const {estudiante, obtenerPromedio} = require('./calculos');
const fs = require('fs');

console.log('el nombre del estudiante es ' + estudiante.nombre);

console.log('El promedio del estudiante es ' 
    + obtenerPromedio(
        estudiante.notas.matematicas,
        estudiante.notas.ingles,
        estudiante.notas.programacion,
    ));

let {nombre, edad : anhos, notas: {matematicas, ingles, programacion} } = estudiante;
console.log('nombre: ' + nombre);
console.log('promedio ' + obtenerPromedio(matematicas, ingles, programacion));
console.log('edad ' + anhos);

let crearArchivo = (estudiante) => {
    texto = 'nombre estudiante ' + nombre + '\n' + 
    'y tiene un promedio de ' + obtenerPromedio(matematicas, ingles, programacion);
    fs.writeFile('promedio.txt', texto, (err) =>{
        if(err) throw (err);
        console.log('se ha creado archivo');
    });
}

crearArchivo(estudiante);