//************************************************************************************************** */
//                          Funciones especiales; call(), Apply() y Bind()
//************************************************************************************************** */
//Basicamente esto corresponde a punteros en los cuales uno trae o apunta a lo que uno quiere
/*
var carro = {
          color: "Blanco",
          marca: "Mazda",
          imprimir: function(){
                var salida = this.marca + " - " + this.color; 
                return salida;
          }
}

var carro2 = {
          color: "Rojo",
          marca: "Toyota"
}

console.log(carro.imprimir());

var logCarro = function(arg1, arg2){
    console.log("Carro: ", this.imprimir() );
    console.log("Argumentos; ", arg1, arg2);
    console.log("===========================");
}

/*
                                    EJEMPLO CON LA FUNCIÓN BLIND
La función bind es para asignarle o setearle la parte del proceso al this que quiero que encuentre 
En este caso no encuentraba el this de la función carro, porque el estaba apuntando al objeto global
Pero con el siguiente comando le estoy asignando el objeto carro para que lo encuentre

var logModeloCarro = logCarro.bind ( carro );
logModeloCarro("abc", "xyz");

/**
                                      EJEMPLO CON LA FUNCIÓN CALL
Basicamente, con esta función se llamas mas rapido y no necesita tanto codigo como en la función blind
solamente le asignamos a lo que queremos que apunte el this mas sus argumentos
        logModeloCarro.call(lo que queremos que sea el this, arg1, arg2);            
                                      

logModeloCarro.call( carro, "123", "456" );
/*a diferencia de call con el apply es basicamente que el call recibe lo que queremos que valga el this
mas sus argumentos, en cambio el apply recibe lo que queremos que valga el this y a continuación un
vector que puede tener n cantidad de parametros, siempre debe estar en formato de vector.

logModeloCarro.apply( carro, ["asd", "qwd"] );



//Todo esto sirve para algo que se conoce como FUNCIONES PRESTADAS. Ejemplo
console.log( carro.imprimir.call( carro2, ) );
*/

//************************************************************************************************ */
//                  IF - ELSE 
//************************************************************************************************  */
//Ejercicio 1
var nota = 90;

if(nota >= 90){
  console.log("A");
}else if(nota >= 80){
  console.log("B");
}else if(nota >= 70){
  console.log("C");
}else if(nota >= 60){
  console.log("D");
}else{
  console.log(F);
}

//Ejercicio 2 - Otra forma de hacer un If
//var a = 10;
//var b = 20;
//var c = ( a > b )? a : b;
//console.log( c );

//Ejercicio 3 - Otra forma de hacer un IF 
/*
var a = 10;
var b = 20;
var c = ( a > b )? function(){
  console.log("A es mayor que B");
  return a;
}() : function(){
  console.log("B es mayor que A");
  return b;
}();
console.log( c );
*/

//Ejercicio 4 -Otra forma de hacer un if
var a = 10;
var b = undefined;
//basicamente esta diciendo que tome el valor del que este definido y tenga algun valor. Si las dos variables
//tienen valores toma el primero.
var c = a || b;

console.log( c );

//Esta opción es buena cuando se utiliza con funciones de la siguiente manera
function getNombre(){
        var nombre = nombre || "<Sin nombre>";

        console.log( nombre );
}
getNombre();
        

//************************************************************************************************ */
//                                      SWITCH
//************************************************************************************************  */
//Ejemplo 1
var mes = 2;

switch (mes){

    case 1:
        console.log("El mes es Enero");
        break;
    case 2:
        console.log("El mes es Febrero");
        break;
    case 3:
        console.log("El mes es Marzo");
        break;
    case 4:
        console.log("El mes es Abril");
        break;
    case 5:
        console.log("El mes es Mayo");
        break;
    case 6:
        console.log("El mes es Junio");
        break;
    case 7:
        console.log("El mes es Julio");
        break;
    case 8:
        console.log("El mes es Agosto");
        break;
    case 9:
        console.log("El mes es Septiembre");
        break;
    case 10:
        console.log("El mes es Octubre");
        break;
    case 11:
        console.log("El mes es Noviembre");
        break;
    case 12:
        console.log("El mes es Diciembre");
        break;
    default:
        console.log("EL mes e sale del rango");
};

//Ejemplo 2
var val = 40;

switch (val){

    case ( 10 > 5 )? 40:1 :
        console.log("es 40");
        break;
    case 2:
        console.log("El mes es Febrero");
        break;
    case 3:
        console.log("El mes es Marzo");
        break;
    default:
        console.log("Es cualquier otro numero");
}