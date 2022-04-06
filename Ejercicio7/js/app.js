

//function imprimir(nombre, apellido){

//Otra opción de hacer un if es de las siguiente manera

//    apellido = apellido || "xxx";

//Si el apelliso no esta adicionado como un parametro al momento de llamar la función imprimir, entra
//y le asigna valor a la variables
//    if(apellido === undefined){
//        apellido = "Santofimio"; 
//    }
    
//    console.log( nombre + " " + apellido );
//}


//imprimir("Juan");

//*El siguiente ejemplo usa una función a la cual se le envía un objeto anonimo, dentro del llamado a la 
// funcion, se crea unas variables dentro del objeto creado al llamar laa función **/
//function imprimir (persona){
//    console.log(persona.nombre, " ", persona.apellido)
//}

//imprimir({
//    nombre: "Carlos",
//    apellido: "Perez"
//})

//Otra forma de como enviar un objeto a la función
//function imprimir(persona){
//    console.log( persona.nombre, " ", persona.apellido)
//}
//
//var obj = {
//    nombre: "Juan",
//    apellido: "Garcia"
//}
//imprimir(obj);

//Este ejemplo es para enviar una function anonima a otra fuction 
//function imprimir ( fn ){
//    fn();
//}

//imprimir( function(){

//    console.log(" Función anonima");

//})

//Este ejemplo es para enviar una function que no es anonima es una función explicita a otra fuction 
//function imprimir ( fn ){
//    fn();
//}
//var miFuncion = function(){
//    console.log("miFunción");
//}

//imprimir( miFuncion )

//**************************************************************************************************** */
// Aqui vamos a ver ejemplos de funciones que retornen algo                                              //
//**************************************************************************************************** */
//Este ejemplo de una función que retorna un numero aleatorio, pero nunca envía el 1.
//function obtenerAleatorio(){
//    return Math.random();
//}
//console.log(obtenerAleatorio() + 10);

//Este ejemplo de una función que retorna un numero aleatorio, pero nunca envía el 1.
function obtenerAleatorio(){
    return Math.random();
}
//Esta función retorna un nombre
function obtenerNombre(){

    return "Juan";
}

console.log(obtenerNombre() + " Santofimio");
//Esta function retorna un boleano de acuerdo si la validación se cumple o no
function retornarBooleano(){

    if (obtenerAleatorio() > 0.5){
        return true;
    }else{
        return false; 
    }
}

if (retornarBooleano()){
    console.log("Es mayor a 0.5");
}else{
    console.log("Es menor a 0.5");
}



//Para recordar, las funciones tambien pueden retornar otro objeto, a continuación un ejemplo
//lo mas recomendable es envíar objetos anonimos asi no se utiliza espacio en memoria

function crearPersona(nombre, apellido){

    return {
        nombre: nombre,
        apellido: apellido
    }

}

var persona = crearPersona("Maria", "paz");


//Ejemplo funciones que regresan funciones

function crearFuncion(){

    return function( nombre ){
        console.log("Me creo: " + nombre);
        return function(){
            console.log("Segunda función")
        }
    }
}

var nuevaFuncion = crearFuncion();
var segundaFuncion = nuevaFuncion ( persona.nombre );

segundaFuncion();