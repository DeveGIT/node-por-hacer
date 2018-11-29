/**
 * 
 * 
 */


const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });

}

const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = []; //si sale error es por que el archivo está vacío.
    }


}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}


const getListado = () => {

    cargarDB();

    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    console.log(nuevoListado);
    console.log("***********************************");
    console.log(listadoPorHacer);

    if (nuevoListado.length !== listadoPorHacer.length) {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;

    } else {
        return false;
    }


    // let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    // console.log(index);

    // if (index >= 0) {

    //     listadoPorHacer.splice(index, 1);

    //     console.log(listadoPorHacer);

    //     guardarDB();
    //     return true;
    // } else {
    //     return false;
    // }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}