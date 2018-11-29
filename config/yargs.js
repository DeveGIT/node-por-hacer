/**
 * 
 *  CONFIGURAMOS YARGS 
 * 
 */

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

let argv = require('yargs')
    .command('crear', 'Crear tarea por hacer', { descripcion })
    .command('actualizar', 'Actualizar la nota', { descripcion, completado })
    .command('borrar', 'Borra una tarea', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
}