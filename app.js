/**
 * INCIANDO EL PROGRAMA
 */

const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);

let comando = argv._[0];

//console.log(argv, 'lala')

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        //console.log(tarea);
        break;

    case 'listar':

        let listado = porHacer.getListado();

        console.log(listado);

        for (let tarea of listado) {
            console.log('============ COSAS POR HACER ==========='.green);
            console.log(tarea.descripcion);
            console.log('Completado: ', tarea.completado);
            console.log('========================================'.green);
        }

        break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

        console.log(actualizado);

        // if (!actualizado) {
        //     throw new Error('No se ha actualizado correctamente');
        // } else {
        //     console.log('Actualizado correctamente a', argv.completado);
        // }

        break;

    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);

        console.log(borrado);

        break;


    default:

        console.log('Comando no reconocido');

}