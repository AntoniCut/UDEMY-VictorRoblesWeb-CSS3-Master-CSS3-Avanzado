//  Alertas.
//alert("Hola, soy Victor Robles WEB");

//  Variables.
let nombre = "Victor Robles";
nombre = "Victor Robles WEB";

//  Constantes.
const apellido = "robles";
let altura = 180;

//  Mostrar por consola.
console.log(nombre);
console.log(altura);

//  Concatenacion.

//let concatenacion = " El nombre es " + nombre + " y la altura es de " + altura;
//console.log(concatenacion);
let concatenacion = nombre + " " + apellido;

//  Seleccionar elementos del DOM (Document object Model).
let datos = document.querySelector("#datos");

//  Utilizamos un Template String.
datos.innerHTML = 
`   <hr>
    <h1> Soy la caja de datos </h1> 
    <h2> Mi nombre es ${concatenacion} </h2> 
    <h3> Mido ${altura} </h3>
  `;

//  Condiciones.
if(altura >= 185) {
    datos.innerHTML += "<h1> Eres una persona alta </h1>";
}
else {
    datos.innerHTML += "<h1> Eres una persona baja </h1>";
}

//  Bucles.
for(let year=2000; year <= 2023; year++) {
    //datos.innerHTML += "<h2> Estamos en el año: " + year + "</h2>";
    datos.innerHTML += `<h2> Estamos en el año: ${year} </h2`;
}

//  Arrays.
let nombres = ["Victor", "Francisco", "Pepe"];

let divNombres = document.querySelector("#nombres");
/*
divNombres.innerHTML += nombres[0];
divNombres.innerHTML += nombres[1];
divNombres.innerHTML += nombres[2];
*/

divNombres.innerHTML = "<h1> Listado de Nombres </h1> <ul>";

/*
nombres.forEach(nombre => {
    divNombres.innerHTML += "<li>" + nombre + "</li>"
});
*/

for(let nombre of nombres) {
    divNombres.innerHTML += "<li>" + nombre + "</l1>";
}

divNombres.innerHTML += "</ul>"

//  Funciones.
const miInformacion = (nombre, altura) => {

    let misDatos = `
        <h1> Soy la caja de datos </h1> 
        <h2> Mi nombre es ${nombre} </h2> 
        <h3> Mido ${altura} cm </h3>
    `;

    return misDatos;
}

console.log(miInformacion("Victor Robles", 187));

const imprimir = () => {
    let datos = document.querySelector("#datos");
    datos.innerHTML += miInformacion("Victor Robles", 187);
}

imprimir();