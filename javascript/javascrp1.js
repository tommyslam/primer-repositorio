/* 
let user = prompt('porfavor ingrese su Usuario: ')
let pass = prompt('porfavor ingrese su Password: ')

console.log(user);
console.log(pass);

if (user == 'Pepe' && pass== 1234) {
    alert('Bienvenido a su sistema');
    location.href = './bienv.html'
} else {
    alert('Usuario o Password incorrectos')
    location.href = './error.html'
}

*/







 
 // VAR es un espacio de memoria para guardar datos
 var nombre;

 // asignacion de una variable
 nombre = "pepe"; 
 // = es un operador de asignacion
 // recuperar la info:
 console.log(nombre);

 //simplificar
 var apellido = 'perez'; //js es flexible con las comillas

 console.log(apellido);

 //mas simpl.. declaramos y aplicamos otra variable
 provincia = 'mendoza';

 console.log(provincia);

 //concatenar datos 
 console.log('Mi nombre es ' + nombre + ', mi apellido es ' + apellido + ' y vivo en ' + provincia);

 
 //template string
 console.log(`Mi nombre es ${nombre} ${apellido} y vivo en ${provincia}`);

 
 //otra variable es let SOLO PUEDO ASIGNARLA UNA VEZ
 let pais = 'Argentina';
 //una diferencia es que VAR puedo volver a asignarla
 var apellido = 'gomez'; //puede confundirnos por si lo declaraste antes.

 

//constante: no cambia
const dni = 433012321; //tengo que declararla si o si en el momento. Y no se puede reasignar

console.log(`Mi numero de dni es: ${dni}`);

//operadores matematicos basicos: + - * / %
let numUno = 1000;
let numDos = 5000;

resultado = numUno + numDos;
console.log(resultado);


//condicionales if
/* if(condition = verdadera para que se ejecute el codigo){

} */
let edad = 18;


if(edad < 18){
    console.log('1. no puedes comprar bebidas');
}

if(edad > 18){
    console.log('2. puedes comprar bebidas');
}

if(edad >= 18){
    console.log('3. puedes comprar bebidas');
}

if(edad <= 18){
    console.log('4. no puedes comprar bebidas');
}

if(edad == 18){
    console.log('5. puedes comprar bebidas');
}

if(edad === 18){
    console.log('6. puedes comprar bebidas');
}



// otro ejemplo 
let password = 123456789;

if(password === 123456789){
    console.log('puedes tener acceso a tu cuenta bancaria');
}


let a = 5;

console.log(a == 5);
console.log(a != 5);
console.log(!true);

// Operadores logicos: && || 

// %% y logico: todas las condiciones deben ser true
// || o logico: con 1 condicion true todo es true 
let cliente = true;
let pagoAlDia = false;
let dia = 'viernes'

// false
if(!cliente && dia == 'lunes' && pagoAlDia){
    console.log('Lo sentimos, no tenemos ofertas para usted hoy');
}

// false
if(cliente && dia == 'lunes'){
    console.log('Por ser cliente, tiene 50% de descuento por ser viernes');
}


if(cliente && dia == 'viernes'){
    console.log('Por ser cliente, y ser viernes tiene 70% de descuento');
}

// O LOGICO
if(!cliente || dia == 'lunes' || pagoAlDia){
    console.log('Lo sentimos, no tenemos ofertas para usted hoy');
}

// IF ELSE

/*
if () {
    
} else {
    
}
*/

// ALERT: alert() funcion modal para enviar mensajes
//PROMPT: prompt() funcion modal para introducir datos



console.log('///////////////////// CLASE 3 ///////////////////');
//arreglos
let banana = 'banana';
let manzana = 'manzana';
let peras = 'peras';

//array - arreglo - vector
//índice          0          1           2         3       4     - posición de los elementos
let frutas = ['mangos', 'bananas', 'manzanas', 'peras', 'ananá'];

//índice         0          1            2         3        4            5                6        7
let persona = ['Pepe', 123456789, 'San Martín 200', 7, 2615589654, ['Juan', 'Mario'], 'Argentina', true];

//acceso al arreglo - todos los elemetos
console.log(frutas);

console.log('============================================================================');

console.log(persona);

console.log('============================================================================');


//acceso al elemento por su índice
//muestro manzanas
console.log('El elemento más vendido es: ' + frutas[0] + ' y el que no vendemos es ' + frutas[4]);
console.log('El elemento del índice 1 es: ' + frutas[1]);
console.log('El elemento del índice 2 es: ' + frutas[2]);
console.log('El elemento del índice 3 es: ' + frutas[3]);
console.log('El elemento del índice 4 es: ' + frutas[4]);


console.log('============================================================================');

console.log(persona[5][1]);

console.log('============================================================================');
//bucles: son pequeñas estructuras repetitivas de código 

//for
//         inicio                límite                   paso
/* for (  let index = 0   ;   index < array.length     ;      index++) {
    //código para repetir siempre que sea true
    const element = array[index];
} */


// i = index de emmet
for (let i = 0; i < 10; i++) {
    console.log('Estamos contando de 0 a 9: ' + i);    
}

console.log('============================================================================');
console.log(persona.length);
console.log('============================================================================');

for (let i = 0; i < persona.length; i++) {
    console.log(`Los elementos de Persona son: ${persona[i]}`);    
}

