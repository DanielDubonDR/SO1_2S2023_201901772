#include <linux/module.h>
#include <linux/kernel.h>
#include <linux/sched.h>        // pr_info
#include <linux/sched/signal.h> // for_each_process
#include <linux/proc_fs.h>
#include <linux/seq_file.h>

#include <linux/init.h>
#include <linux/uaccess.h>
#include <linux/slab.h>
#include <linux/fs.h>
#include <linux/sysinfo.h>
#include <linux/mm.h>
#include <linux/swap.h>
#include <linux/user_namespace.h>
#include <linux/cred.h>
#include <linux/mm_types.h>
#include <linux/cpufreq.h>
#include <linux/cpumask.h>
#include <linux/sched/cputime.h>
#include <linux/sched/stat.h>
#include <linux/sched/cputime.h>
#include <linux/tick.h>


MODULE_LICENSE("GPL");
MODULE_DESCRIPTION("[SO1]Proyecto1 modulo cpu_201901772");
MODULE_AUTHOR("Daniel Reginaldo Dubon Rodriguez - 201901772");



static int writeFile(struct seq_file *archivo, void *v)
{
    u64 idle_time, iowait_time, total_time;
    u64 idle_time_us, iowait_time_us, total_time_us;
    unsigned int cpu;
    unsigned long usage;


    for_each_possible_cpu(cpu) {
        idle_time = get_cpu_idle_time_us(cpu, NULL);
        iowait_time = get_cpu_iowait_time_us(cpu, NULL);
        total_time = idle_time + iowait_time;

        idle_time_us = (idle_time * 1000000ULL) / USER_HZ;
        iowait_time_us = (iowait_time * 1000000ULL) / USER_HZ;
        total_time_us = (total_time * 1000000ULL) / USER_HZ;

        usage = 100 - (idle_time_us * 100) / total_time_us;

        seq_printf(archivo, "CPU %u: uso = %lu%%\n", cpu, usage);
    }

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