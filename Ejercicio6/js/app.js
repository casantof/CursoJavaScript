//Mi primera Function

function primeraFuncion(){

    var a = 20;
    console.log( a );
}
// hay que recordad que todas las funciones generan un valor como resultado.
//Si tu asignas el resultado de la función a una variables y olvidas colocarle los () esto lo que genera
//Es el codigo que esta dentro de esa función mas no asigna el resultado. Es imporante no olvidarlo
var miFuncion = primeraFuncion;
primeraFuncion();