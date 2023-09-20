#include <linux/sched.h>
#include <linux/sched/signal.h>

// Permite dar una licencia, descripcion, autor y version al modulo
#include <linux/module.h>

// Define las macros como KERN_INFO y KERN_ERR para imprimir mensajes en el log
#include <linux/kernel.h>

//Define macros para la declaración de funciones de inicializacion y finalización de modulos (module_init y module_exit)
#include <linux/init.h>

//Proporciona funciones y estructuras para trabajar con el sistema de archivos procfs en Linux (proc_fs)
#include <linux/proc_fs.h>


#include <asm/uaccess.h>

// Proporciona funciones para trabajar con archivos de secuencia (seq_file)
#include <linux/seq_file.h>

// Libreria para obtener informacion del sistema mas especificamente de la memoria ram para este modulo
#include <linux/sysinfo.h>

#include <linux/cpumask.h>
#include <linux/mm.h>


#include <linux/slab.h>
#include <linux/fs.h>

#include <linux/swap.h>


MODULE_LICENSE("GPL");
MODULE_DESCRIPTION("[SO1]Proyecto1 modulo cpu_201901772");
MODULE_AUTHOR("Daniel Reginaldo Dubon Rodriguez - 201901772");

char cadenaAux[256];
// Process information
struct task_struct *task;    
// Child process information
struct task_struct *ts_child;
// Contains a list of processes
struct list_head *list;
struct sysinfo infoRam;

static void init_meminfo(void)
{
    si_meminfo(&infoRam);
}

char * getNameState(long state){
    switch (state)
    {
        case TASK_RUNNING:
            sprintf(cadenaAux, "%ld - Running", state);
            return cadenaAux;
            
        case TASK_INTERRUPTIBLE:
            sprintf(cadenaAux, "%ld - Interruptible", state);
            return cadenaAux;
            
        case TASK_UNINTERRUPTIBLE:
            sprintf(cadenaAux, "%ld - Uninterruptible", state);
            return cadenaAux;

        case __TASK_STOPPED:
            sprintf(cadenaAux, "%ld - Stopped", state);
            return cadenaAux;
            
        case __TASK_TRACED: 
            sprintf(cadenaAux, "%ld - Traced", state);
            return cadenaAux;
            
        case TASK_STOPPED:
            sprintf(cadenaAux, "%ld - Stopped", state);
            return cadenaAux;
            
        case EXIT_ZOMBIE:
            sprintf(cadenaAux, "%ld - Zombie", state);
            return cadenaAux;
        
        case EXIT_DEAD:
            sprintf(cadenaAux, "%ld - Dead", state);
            return cadenaAux;
                
        default:
            sprintf(cadenaAux, "%ld - Desconocido", state);
            return cadenaAux;
    }
}



static int writeFile(struct seq_file *archivo, void *v)
{
    #define Convert(x) ((x) << (PAGE_SHIFT - 10))
    init_meminfo();
    int cantidadProcesos = 0;
    // Total de memoria ram en kB
    unsigned long totalRam = Convert(infoRam.totalram);

    unsigned int cpu;
    unsigned long busy_time, idle_time, total_time;
    unsigned int busy_percent;

    for_each_online_cpu(cpu) {
        busy_time = kcpustat_cpu(cpu).cpustat[CPUTIME_USER] +
                    kcpustat_cpu(cpu).cpustat[CPUTIME_SYSTEM] +
                    kcpustat_cpu(cpu).cpustat[CPUTIME_IRQ] +
                    kcpustat_cpu(cpu).cpustat[CPUTIME_SOFTIRQ] +
                    kcpustat_cpu(cpu).cpustat[CPUTIME_STEAL] +
                    kcpustat_cpu(cpu).cpustat[CPUTIME_NICE];

        idle_time = kcpustat_cpu(cpu).cpustat[CPUTIME_IDLE] +
                    kcpustat_cpu(cpu).cpustat[CPUTIME_IOWAIT];

        total_time = busy_time + idle_time;

        busy_percent += 100 * busy_time / total_time;
    }

    // INICIO
    seq_printf(archivo, "{\n");

    seq_printf(archivo, "\t\"cpu_percentaje\": %d,\n", 20);
    seq_printf(archivo, "\t\"num_cores\": %d,\n", num_online_cpus());
    seq_printf(archivo, "\t\"sum_busy_percent\": %d,\n", busy_percent);
    seq_printf(archivo, "\t\"total_ram\": %ld,\n", totalRam);
    seq_printf(archivo, "\t\"processes\":[\n");

    bool inicioProceso = true;

    for_each_process(task)
    {
        unsigned long rss = 0;
        if (task->mm)
        {
            rss = Convert(get_mm_rss(task->mm));
        }

        cantidadProcesos++;

        if (inicioProceso)
        {
            inicioProceso = false;
        }
        else
        {
            seq_printf(archivo, ",\n");
        }

        // INICIO PROCESO
        seq_printf(archivo, "\t\t{\n");
        seq_printf(archivo, "\t\t\t\"pid\": %d,\n", task->pid);
        seq_printf(archivo, "\t\t\t\"name\": \"%s\",\n", task->comm);
        seq_printf(archivo, "\t\t\t\"user\": %d,\n", __kuid_val(task->real_cred->uid));
        seq_printf(archivo, "\t\t\t\"state\": \"%s\",\n", getNameState(task->__state));
        seq_printf(archivo, "\t\t\t\"ram_memory\": %ld,\n", rss);
        seq_printf(archivo, "\t\t\t\"ram_porcentaje\": %ld,\n", (rss * 100) / totalRam);

        // HIJOS
        seq_printf(archivo, "\t\t\t\"childs\":[\n");

        bool inicioHijos = true;
        list_for_each(list, &(task->children))
        {
            ts_child = list_entry(list, struct task_struct, sibling);
            if(inicioHijos)
            {
                inicioHijos = false;
            }else
            {
                seq_printf(archivo, ",\n");
            }

            unsigned long rss_child = 0;

            if(ts_child->mm)
            {
                rss_child = Convert(get_mm_rss(ts_child->mm));
            }

            seq_printf(archivo, "\t\t\t\t{\n");
            seq_printf(archivo, "\t\t\t\t\t\"pid\": %d,\n", ts_child->pid);
            seq_printf(archivo, "\t\t\t\t\t\"name\": \"%s\",\n", ts_child->comm);
            seq_printf(archivo, "\t\t\t\t\t\"user\": %d,\n", __kuid_val(ts_child->real_cred->uid));
            seq_printf(archivo, "\t\t\t\t\t\"state\": \"%s\",\n", getNameState(ts_child->__state));
            seq_printf(archivo, "\t\t\t\t\t\"pid_parent\": %d,\n", task->pid);
            seq_printf(archivo, "\t\t\t\t\t\"ram_memory\": %ld,\n", rss_child);
            seq_printf(archivo, "\t\t\t\t\t\"ram_porcentaje\": %ld\n", (rss_child * 100) / totalRam);
            seq_printf(archivo, "\t\t\t\t}");
        }


        // FIN HIJOS
        seq_printf(archivo, "\n\t\t\t]\n");

        // FIN PROCESO
        seq_printf(archivo, "\t\t}");
    }

     // FIN PROCESO
    seq_printf(archivo, "\n\t],\n");
    seq_printf(archivo, "\t\"total_processes\": %d\n", cantidadProcesos);

    // FIN
    seq_printf(archivo, "\n}");

    return 0;
}

//Esta funcion se ejecuta cuando se trata de leer el archivo
static int toOpen(struct inode *inode, struct file *file)
{
    return single_open(file, writeFile, NULL);
}

// Si el su Kernel es 5.6 o mayor
static struct proc_ops operaciones =
{
    .proc_open = toOpen,
    .proc_read = seq_read
};

//Funcion a ejecuta al insertar el modulo en el kernel con insmod
// Crea el archivo ram_201901772 en proc
static int _insert(void)
{
    proc_create("cpu_201901772", 0, NULL, &operaciones);
    printk(KERN_INFO "Modulo cpu_201901772 insertado\n");
    return 0;
}

//Funcion a ejecutar al remover el modulo del kernel con rmmod
static void _remove(void)
{
    remove_proc_entry("cpu_201901772", NULL);
    printk(KERN_INFO "Modulo cpu_201901772 removido\n");
}

// Define las funciones a ejecutar al insertar y remover el modulo
module_init(_insert);
module_exit(_remove);