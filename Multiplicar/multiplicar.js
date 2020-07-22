//requireds
const fs = require('fs');
const colors = require('colors');

// module.exports.crearArchivo = (base) =>
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let contenido = "";
        for (let i = 1; i < limite + 1; i++) {
            contenido += `${i}*${base} = ${i*base}\n`;
        }
        fs.writeFile(`Tablas/Tabla-${base} al ${limite}.txt`, contenido, (err) => {
            if (err) reject(err);
            else resolve(`Archivo creado: Tabla del ${base}`);
        });
    })
}

let listarTabla = (base, limite = 10) => {
    console.log('=================='.green);
    console.log(`  ==Tabla de ${base}==`.green);
    console.log('=================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${i}*${base} = ${i*base}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}