//Esta es la clase de argumentos, basicamente lo que hace es que envia unicamente lo que se envío para 
//la función. basicamente lo que muestra es un arreglo con los valores que se le entregaron
//Recordar que los arreglos son objetos que pueden tener otros objetos, otras funciones etc..
//var arguments = 10; 
//
//function miFuncion( a,b,c,d){
//
//    console.log( arguments );
//
//}
//
//miFuncion(10, 20, 30, 40, {}, function(){});

//Otro ejemplo es que supongamos yo necesito los 4 parametros, pero solo me envian 3
//La idea es realizar la siguiente validación para forzar y que me revise los datos
//var arguments = 10; 

//function miFuncion( a,b,c,d){

//    if ( arguments.length !==4 ){
//        console.error("La función necesita 4 parametros")
//        alert("La función necesita 4 parametros");
//        return;
//    }
//*    console.log( arguments );

//        console.log( a + b + c + d);

//}

//miFuncion(10, 20, 30, 40);

//*********************************************************************************************+
// Sobre carga de operadores en JavaScript
//*********************************************************************************************+

//function crearProducto( nombre, precio ){
//
//    nombre = nombre || "Sin nombre";
//    precio = precio || 0;
//    
//    console.log( "Producto: ", nombre, "Precio: ", precio );
//}
//
//function crearProducto100( nombre ){
//    crearProducto( nombre, 100);
//
//}
//
//function crearCamisa(precio){
//    crearProducto( "Camisa", precio);

//}
//crearProducto( "Lapiz" );
//crearProducto100("Corrector");
//crearCamisa( 75 );


//*********************************************************************************************+
//                 POLIMORFISMO
//*********************************************************************************************+
// EL POLIMORFISMO, QUIERE DECIR QUE RECIBE MUCHAS COSAS SIN AFECTARSE. PUEDEN SER DE SUS HIJOS
//ES UNA FUNCIÓN QUE PUEDE RECIBIR DIFERENTES TIPOS DE PARAMETROS O DE DATOS 
//pOR EJEMPLO TENEMOS UNA FUNCIÓN QUE NECESITA DETERMINAR QUE TIPO DE DATO ES.


function determinaDato( a ){

    if  (a === undefined){
        console.log("A es undefined, no se que hacer");
    }
    if (typeof a === "number"){
        console.log(" A es un numero y puedo hacer operaciones con numeros");
    }
    if (typeof a === "string"){
        console.log("A es un texto puedo hacer operaciones con textos");
    }
    if (typeof a === "object"){
        console.log("A es un objeto... pero puede ser cualquier cosa");
        if (a instanceof Number ){
            console.log("A es un objeto numerico");
        }
    }
    if (typeof a === "boolean"){
        console.log("A es un boleano");
    }
};

//Cuando se crea una variable de esta forma, lo que se crea es un objeto que va ser numerico
var b = new Number(3); 
//Por eso cuando ejecuto de esta manera muestra el valor de b, pero dice que es un objeto
console.log( b );
determinaDato(b);

//determinaDato({
//    nombre: "Fernando"
//});

