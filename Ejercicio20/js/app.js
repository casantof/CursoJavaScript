//************************************************************************************************** */
//                              Ejercicios de java Script con archivos json
//************************************************************************************************** */
//Para verificar si el json es valido puedes usar la siguiente pagina: json.parser.online.fr
/*
var objetoJS = {
     nombre: "Carlos",
     edad: 35
};

console.log( "Objeto literal", objetoJS );    
//En esta sentencia lo que hacemos es que convertimos el objetoJS, a un formato json, con la funcion
//stringify
var jsonString = JSON.stringify( objetoJS );

console.log( jsonString );

//Esta función lo que hace es reversar o convertir el formato JSON  a forma de objeto
var objDesdeJSON = JSON.parse( jsonString );
console.log( objDesdeJSON );
console.log( objDesdeJSON.nombre );
console.log( objDesdeJSON.edad );
*/

//************************************************************************************************** */
//                              Ejercicios While y DO While
//************************************************************************************************** */
//Ejercicio 1
/*var i = 0;

while( i <=10 ){

    console.log( i );
    i++;
}*/
//Ejercicio 2
/*
var i = 0;

while( i <=10 ){
//En este caso estamos aumentando el i de primeras y lo que hacemos es que colocamos un break, para que
//Se detenga y se salga del ciclo o podemos colocar un continue, para que cuando se cumpla esa condición
//lo que haga es que no lo imprima sino, se salte la impresión y siga con su validación.
    i++;
    
    if ( i ===5){
        break;      //Tambien puedes usar continue, arriba esta la explicación
    }
    console.log( i );
}*/

//************************************************************************************************** */
//                              Ejercicios DO While
//************************************************************************************************** */
//Basicamente el do lo que cambia es que primero le dice que haga y despues coloca la condición que se 
//debe cumplir con el while
//Ejercicio 1
/*
var i = 0;

do{
    i++;

    if( i === 5){
        continue;
    }
    console.log( i );

}while( i <10 );*/

//************************************************************************************************** */
//                              Ejercicios ciclo For
//************************************************************************************************** */
//Ejercicio 1 FOR
/*
for ( var i = 0; i <= 10; i++){
     
    console.log( i );

}*/
//************************************************************************************************** */
//                              Ejercicios ciclo For in
//************************************************************************************************** */
//Ejercicio 1 FOR IN
/*
var Persona = function(){
    this.nombre     = "Juan",
    this.apellido   = "Pineda",
    this.edad       = 18;
};

var juan = new Persona();
//Esta función lo que hace es que incluye el parametro direccion al objeto persona.
Persona.prototype.direccion = "San Jose";


//Este ciclo for lo que hace es que por cada parametro que tiene juan, va ejecutar la condición que esta
//dentro del ciclo FOR, se le adiciona prop al vector
for ( prop in juan){

 //Si yo quiero que me traiga lo que esta originalmente y no me incluya este nuevo parametro que le 
//adicione se debe usar la siguiente función. basicamente trae true para los originales del objeto 
//y false para el que se adiciono, Este ejemplo es par si el objeto esta creado
    // console.log( juan.hasOwnProperty( prop ));
//pero, si necesitas mirar que no este creado el objeto o la negación de esta condición es de la 
//siguiente forma
        if( !juan.hasOwnProperty( prop )){
            continue;
        }
    console.log( prop, ":", juan[prop] );
}
for( num in [1,2,3,4,5,6,7,8,9,10]){
    console.log( num );
}
*/
//************************************************************************************************** */
//                              Ejercicios reflejo
//************************************************************************************************** */
//Ejercicio 1 reflejo
/*
[1,2,3,4,true,5,6,7,8,9,false,"nombre"].forEach(function( val ){
    console.log( val );
});
*/
//************************************************************************************************** */
//                              Rotulación de los ciclos
//************************************************************************************************** */
//Ejercicio 1 
/*
for_principal: //esto es una rotulación
for(var i = 0; i <= 5; i++ ){

    console.log( "i: ", i );

    for_secundario: //Esto es una rotulación
    for(var j = 0; j <= 5; j++ ){

        console.log( "j: ", j );
        //Basicamente esta linea esta diciendo que ejecute solamente el for principal y que no ejecute
        //mas este ciclo for, basicamente lo ejecuta 1 vez y no lo vuelve a ejecutar    
        //continue for_principal;

        for(var x = 0; x <= 5; x++){
            console.log("X: ", x);
            break for_principal; //En este caso lo que hago es salirme al for principal y en este caso
            //Solo se ejecutaria una vez, otra opcion es salirme al ciclo secundario.        
        }
    }

}*/
//************************************************************************************************** */
//                              FUNCIONES DE TIEMPO EN JAVA SCRIPT

//************************************************************************************************** */
//Ejercicio 1 
/*
setTimeout(function() {
    
    console.log("estoy ejecutandome");

}, 1000);//Aqui 1000 es un segundo 
*/
//Ejercicio 2, esta opción lo que hace es que se ejecuta hasta que que yo quiera, obviamente si lo 
//condiciono
/*
var segundos = 0;
var intervalo = setInterval(function(){
    
    segundos ++;
    console.log("seg", segundos);

    if( segundos ===3 ){
        clearInterval( intervalo );
    }

}, 1000)*/

//Ejercicio 3

var juan = {
    nombre: "Juan",
    edad: 30,
    imprimir: function(){
        var self = this;
        setTimeout(function(){
        console.log( self );    
        console.log( self.nombre, self.edad);
        },1000)
    }
};
juan.imprimir();