//*********************************************************************************************+
//            27. Cuidado con las funciones y su contexto
//*********************************************************************************************+
//En este caso vamos a crear una funcion que crea arreglos de funciones

//function crearFunciones(){

//    var arr    = [];
//    var numero = 1;

//    for (var numero = 1; numero <= 10; numero ++){
        
//        arr.push(
//            (function(numero){
            
//                return function(){
//                    console.log( numero );
//                }

//            })(numero)
//        );
//    }

//    return arr;
//}

//var funciones = crearFunciones();

//funciones[0]();
//funciones[1]();
//funciones[2]();
//funciones[3]();
//funciones[4]();


//*********************************************************************************************+
//                        28. Objeto numero
//*********************************************************************************************+
//

//var a = 10.43654645;
//var b = new Number(10);
// cuando uno compara de la siguiente manera (a === b), uno esta comparando valor y objeto.
// En ese caso la comparación es falsa porque a es un valor primitivo, y b es un objeto que tiene un 
//Valor primitivo.
//Cuando se compara de la siguiente manera (a == b), en este caso si son iguales porque esta comparando
//es el valor de las variables

// aqui veremos el uso de las funciones que tienen las variables numericas en este caso
//toFixed ("Esto lo que hace es que formatea un numero a una cantidad de numeros decimales") estos se asignan
//dentro del parentesis puede ser 2 o 3 o 4 o 5 ... hasta el 20 que es el numero maximo de decimales
//Ejemplo a.toFixed(2) ---> Suponiendo que a vale 10 lo que hace es lo siguiente "10.00"
//Otro ejemplo es que si a vale 10.4365 --- devuelve 10.44 ya que redondea tambien los decimales
//Forma 1
//console.log(a.toFixed(5));
//Forma 2, es usando toString, que lo que hace es mostrar el valor en un Sgtring, muestra todo el valor
//a = a.toString();
//console.log( a ); 

// otra función es toPrecision, esta lo que hace es que uno selecciona la cantidad de numeros que quiere
//que sean exactos, en este caso colocamos 4 y nos dio como resultado 10.44, si colocamos 2 seria 10
//console.log( a ); 
//console.log( a.toPrecision(4) ); 

// otra función es valueOf, Esto retorna el valor primitivo del objeto
//var b = new Number( "20e" );
//console.log( b );
//console.log( b.valueOf() );

//*********************************************************************************************+
//                        28. Objeto booleanos
//*********************************************************************************************+
// Si usted envia cualquier parametro entre comillas "1", "-1" o "f", siempre va devolver true
// pero si envias por ejemplo un numero 1 mayor a 1 da true, pero si mandas 0 ó -0 ó NaN ó null
// ó undefined ó un string vacio "" muestra false  ota forma de obtener false es enviando el parametro
// vacio() eso dtambien da cero como respuesta

//var a = new Boolean();
//var b = false;

//console.log( a.valueOf() );

//if( a ){

//    console.log("Me imprimi!!!");
//}

//*********************************************************************************************+
//                        28. Objeto String
//*********************************************************************************************+

//var a = new String("Fernando Herrera");
//console.log( a );

//Esta opcion toma el string y lo convierte en mayusculas
//console.log( a.toUpperCase() );
//Esta opcion toma el string y lo convierte en minusculas
//console.log( a.toLowerCase() );
//Esta opcion toma el string y me muestra cuando encuentra la primera letra que estoy buscando
//Esto tambien funciona para saber desde donde comienza una palabra por ejemplo Herrera dice que es desde la 9
//var i = a.indexOf("a");
//console.log("La letra esta en la posición: ", i);
//Esta opcion toma el string y me muestra cuando encuentra la ultima letra que estoy buscando
//var i = a.lastIndexOf("n");
//console.log("La letra esta en la posición: ", i);

//Esta opcion toma el string y en este caso toma desde la posición 6 en adelante hasta la posición 3
//Tambien solo puedes mandar desde que posicion en adelante quieres tomar.  . 
//var nombre = a.substring( 6, 3 );
//console.log( nombre );

//Esta opcion toma el string y en este caso toma desde la posición 0 hasta que encuentre el primer blanco 
//var nombre = a.substring( 0, a.indexOf(" ") );
//console.log( nombre );

//esta opción lo que hace es que crea un arreglo, lo que puedo hacer es que dentro del split decirle 
//como quiero lo lo parta para crearlo ejempl ['Fernando', 'Herrera'] cuando encuentra un espacio
//lo toma como si fuera otro parametro del arreglo  
//var split = a.split(" ");
//console.log( split );
//Esta opción es para saber que tamalo tiene el arreglo 
//console.log( split.length );


//===========
//Esta instrucción lo que hace es escribir en la pagina donde esta el codigo, el valor que esta dentro
//de los parentesis
//document.write("Hola mundo ");

//Hay una opción que es a.italics() lo que hace es que convierte la variable a en lenguaje html esta tambien
//a.blink(), a.strike(), a.bold()
//document.write( a.italics());

//*********************************************************************************************+
//                        28. Objeto Fecha(Date)
//*********************************************************************************************+
//
//var hoy = new Date();
//var fMili = new Date(1);
//var fcfija = new Date(2016, 10, 1, 23, 45, 12);

//console.log( hoy );
//console.log( fMili );
//console.log(fcfija);

//Trae el año
//console.log( hoy.getFullYear() );
//trae el dia
//console.log( hoy.getDate() );
//trae la hora
//console.log( hoy.getHours() );
//trae los segundos
//console.log( hoy.getSeconds() );
//trae el valor de una fecha en milisegundos
//console.log( hoy.getTime() );
//trae la Milisegundos
//console.log( hoy.getMilliseconds() );
//trae el mes
//console.log( hoy.getMonth() );

//Ejemplopara saber cuanto se demora un proceso en ejecutar
//var inicio = new Date();

//Esto hace un ciclo de un proceso de 15000 ocurrencias, para saber el tiempo que tardo procesarlas
//for (var i = 0; i < 15000; i++){
//    console.log("Algo....");
//}

//var fin = new Date();

//console.log( inicio );
//console.log( fin );
//COn esto calcula el inicio y el fin del anterior ciclo for que esta un poco mas arriba
//var duracion = fin.getTime() - inicio.getTime();
//console.log( duracion, "Milisegundos" );
//console.log( (duracion/1000), "Segundos");

//Otras operaciones con Fechas
//var fecha = new Date(2016, 9, 20);
//Este comando sirve paa asignarle el valor de 31 al dia.
//fecha.setDate( 31 );

//Procedimiento para sumar dias a una fecha
//Date.prototype.sumarDias = function( dias ){
//    this.setDate( this.getDate() + dias );
//    return this;
//}

//Procedimiento para sumar años a una fecha
//Date.prototype.sumarAnios = function( anios ){
//    this.setFullYear( this.getFullYear() + anios );
//    return this;
//}
//console.log( fecha );
//console.log( fecha.sumarDias(-5) );
//console.log( fecha.sumarAnios(6) );

//*********************************************************************************************+
//                        28. Objeto Math
//*********************************************************************************************+
//
//var PI = Math.PI;
//var E  = Math.E;

//console.log( PI );
//console.log( E );

//var num1 = 10.456789;
//Esta sentencia sirve para tomar un numero, redondearlo y dejarlo con 2 decimales,
//si requieren dejarlo con 3 decimales deben multiplicarlo por 3 y dividirlo por 3 y asi sucesivamente
//console.log( Math.round( num1*100 ) /100 );

//Este muestra tambien los enteros nada mas, quita los decimales y tampoco redondea.
//console.log( Math.floor( num1 ));
//Este procedimiento genera un numero random, pero nunca cero ni 1, solamente decimales entre esos 2 
//numeros.
//var rnd = Math.random();
//console.log( rnd );

//Aqui se hace un dado, basicamente lo que hace es que toma un numero entre 1 y 6 solamente
//no genera mas numeros.
//function randomEntre( min, max ){
//    return Math.floor( Math.random() * (max-min + 1) + min);
//}
//console.log( randomEntre( 1, 6 ) ); 

//Esto es para generar la raiz cuadrada de un numero
//console.log( Math.sqrt( 4 ) );

//Esta función es para generar exponenciales, la primera es la base y el otro el exponente
//console.log( Math.pow( 7, 2) );

//*********************************************************************************************+
//                        28. Expresiones regulares
//*********************************************************************************************+