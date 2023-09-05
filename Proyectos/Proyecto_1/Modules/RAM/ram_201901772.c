// Permite dar una licencia, descripcion, autor y version al modulo
#include <linux/module.h>

// Define las macros como KERN_INFO y KERN_ERR para imprimir mensajes en el log
#include <linux/kernel.h>

//Define macros para la declaración de funciones de inicializacion y finalización de modulos (module_init y module_exit)
#include <linux/init.h>

//Proporciona funciones y estructuras para trabajar con el sistema de archivos procfs en Linux (proc_fs)
#include <linux/proc_fs.h>

/* for copy_from_user */
#include <asm/uaccess.h>

// Proporciona funciones para trabajar con archivos de secuencia (seq_file)
#include <linux/seq_file.h>

// Libreria para obtener informacion del sistema mas especificamente de la memoria ram para este modulo
#include <linux/sysinfo.h>
#include <linux/mm.h>
#include <linux/swap.h>

MODULE_LICENSE("GPL");
MODULE_DESCRIPTION("[SO1]Proyecto1 modulo ram_201901772");
MODULE_AUTHOR("Daniel Reginaldo Dubon Rodriguez - 201901772");

struct sysinfo infoRam;

static void init_meminfo(void)
{
    si_meminfo(&infoRam);
}

static int writeFile(struct seq_file *archivo, void *v)
{
    // Variables para obtener informacion de la memoria ram
    long cached;
    long available;
    unsigned long pages[NR_LRU_LISTS];

    // Obtener informacion de la memoria ram
    init_meminfo();

    cached = global_node_page_state(NR_FILE_PAGES) - total_swapcache_pages() - infoRam.bufferram;
	
    if (cached < 0) cached = 0;

    available = si_mem_available();

    
    // Convertir de bytes a megabytes
    unsigned long ramTotal = (infoRam.totalram * infoRam.mem_unit) >> 20;
    unsigned long ramLibre = (infoRam.freeram * infoRam.mem_unit) >> 20;
    unsigned long ramDisponible = (available * infoRam.mem_unit) >> 20;
    unsigned long ramBuffers = (infoRam.bufferram * infoRam.mem_unit) >> 20;
    unsigned long ramCache = (cached * infoRam.mem_unit) >> 20;
    unsigned long ramPorcentaje = ((ramTotal - ramDisponible) * 100) / ramTotal;

    seq_printf(archivo, "{\n\t\"ramTotal\": %lu,", ramTotal);
    seq_printf(archivo, "\n\t\"ramLibre\": %lu,", ramLibre);
    seq_printf(archivo, "\n\t\"ramDisponible\": %lu,", ramDisponible);
    seq_printf(archivo, "\n\t\"ramBuffers\": %lu,", ramBuffers);
    seq_printf(archivo, "\n\t\"ramCache\": %lu,", ramCache);
    seq_printf(archivo, "\n\t\"ramPorcentaje\": %lu", ramPorcentaje);
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
    proc_create("ram_201901772", 0, NULL, &operaciones);
    printk(KERN_INFO "Modulo ram_201901772 insertado\n");
    return 0;
}

//Funcion a ejecutar al remover el modulo del kernel con rmmod
static void _remove(void)
{
    remove_proc_entry("ram_201901772", NULL);
    printk(KERN_INFO "Modulo ram_201901772 removido\n");
}

// Define las funciones a ejecutar al insertar y remover el modulo
module_init(_insert);
module_exit(_remove);