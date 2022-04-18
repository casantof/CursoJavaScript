//function Persona(){
//
//    this.nombre   = "Fernando";
//    this.apellido = "Herrera";
//    this.edad     = 30;
 //   this.pais     = "Costa Rica";
//
//}

//Persona.prototype.imprimirInfo= function(){
//       console.log( this.nombre + " " + this.apellido + " (" + this.edad + ")");
//}
//
//var fer = new Persona();
//
//fer.imprimirInfo();


//Otro ejemplo usando protoripos
//Number.prototype.esPositivo = function(){
//    if ( this > 0){
//        return true;
//    }else{
//        return false;
//    }

//}

//****************************************************************************************************
//                 FUNCIONES ANONIMAS
//****************************************************************************************************
//Ejemplo 1
//(function(){
//
//    var a = 10;
//
//    console.log( a );
//
//    function cambiarA(){
//        a = 20;
//    }
//
//    cambiarA();
//    console.log( a );
//
//})();
//************************************************************************ */
//function ejecutarFuncion ( fn ){
//
//    if ( fn() == 1){
//        return true;
//    }else{
//        return false;
//    }
//    
//}
//
//console.log(
//    ejecutarFuncion( function(){
//        console.log("Función anonima ejecutada!!");
//        return 0; 
//})
//);
//************************************************************************************************** */
//             FUNCIONES TYPEOF  O INSTANCEOF
//************************************************************************************************** */
//la función typeof es para decir que tipo de parametro estoy enviando, envie un 1 dijo que era numerico
//ENvie unas "" dijo que era string, envie {} dijo que era un objeto.
//Envie una función vacia function(){} y me dijo que era una función
//Ejemplo typeof
//function identifica( param ){
    //console.log( typeof param); esta ya estaba comentariada para este ejercicio
//    if (typeof param == "function"){
//        param();
//    }else{
//        console.log( param );
//    }
//}
//
//identifica(function(){ console.log("Soy una función anonima!!!")   });

//<Este ejemplo es con la opción instanceof, que basicamente devuelve un true o un false si se cumple
// la funcion por ejemplo en este caso enviamos una función de tipo persona y como es una funcion retorna
//true
function identifica( param ){

    console.log( param instanceof Persona);

}

function Persona(){
    this.nombre = "Fernando";
    this.edad   = 30;

}

var fernando = new Persona;

identifica( fernando );