//************************************************************************************************** */
//                              Eventos 101
//************************************************************************************************** */
/*esto lo que hace es que debajo de la opción tittle en el index.html, crea un cuadrado al cual se le 
puede adicionar una función para que se ejecute de acuerdo a un evento
<style type="text/css">
      div{
        width: 100px;
        height: 100px;
        background-color: red;
      }
    </style>
*/

//Los eventos son las acciones que hacen que se active una función
/*function evento( arg ){
        console.log("Me dispare");
        console.log( arg );
}
*/
/*Este bloque de codigo va en el body del index para que la siguiente parque se pueda ejecutar 
//esta linea lo que hace es que crea en la pagina una caja de texto y lo que hace es que utiliza 
la función onfocus para activar un evento
 <input type="text" onfocus="evento()"></input>
 //En esta esta creando un boton el cual tiene como id objDemo, lo cual hace que en el app.js se active
 un vento
 <button id="objDemo"> Soy un boton</button>   
//Esta linea lo que hace es que con doble click se active el evento
 <button ondblclick="evento()">Soy un boton</button>  

 <div onclick="evento()">
</div>
*/
//Aqui lo que esta haciendo esta agarrando el elemento que tiene el id objDemo en el index html
/*var objeto = document.getElementById("objDemo");
objeto.addEventListener("click", evento);
*/

//************************************************************************************************** */
//                              Como bloquear el boton derecho del mouse
//************************************************************************************************** */
//Para que esto funcione en el index.html, debes adicionarle lo siguiente al body.esta condición solo es
//cuando el usuario intenta dar click derecho sobre lo que se escribio en el body.
// <body oncontextmenu="return false">

/**
 Pero si usted requiere que el lo bloquee para toda la pagina debes adicionar en el index, debajo del
 titulo el siguiente codigo

 */


//Esto lo que hace es que apenas den click con el mouse viene y consume la función, a la cual le hemos
//colocado una condicion de que si es 2 que es el click derecho, porque el izquiero es el 0 y la ruedita 
//el 1, genere una alerta de que ese boton esta bloqueado. Si oprime otro boton del mouse se lo permite
/*document.onmousedown = function(arg){

    if (arg.button===2){
        alert("Click derecho bloqueado");
        return;
    }
    console.log("No hay problema");
}
//Es necesario adicionar este codigo debajo del titulo en el indes.html, para que bloquee
    <style type="text/css">
        html,body{
          height: 100%;
          width: 100%;
        }
    </style>



*/

//Esto basicamente es para que me muestre que seleccionaron del texto dentro de la pagina
/*
document.onmouseup = function(){
    var texto = window.getSelection()
    console.log( texto );
}
*/
//************************************************************************************************** */
//                                      Ejercicio con onsubmit
//************************************************************************************************** */
/*
function validar(){

    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;

    if (nombre.length < 1){
        return false;
    }
    if (apellido.length < 1){
        return false;
    }

    return true;
}
*/
//************************************************************************************************** */
//                                      Cajas de dialogo
//************************************************************************************************** */
//Esta sentencia lo que hace es que muestra un mensaje en pantalla como un alert, pero pues captura
//la respuesta dada, si es falso o verdadero, basicamente devuelve un booleano.
//var acepto = confirm("quieres borrar algo?");
//console.log( acepto );

//Con esta función se crea una caja de texto la cual da la opción de capturar lo que se escriba.
//es mejor no usar este tipo de codigo, ya que se puede bloquear
/*
var nombre = prompt("Ingrese su nombres", "nombre");
console.log( nombre );
*/
//************************************************************************************************** */
//                                      comando use strict
//************************************************************************************************** */
//Lo que hace es que el codigo sea mas estricto como la definición de variables y otras mas

function getNombre(){
    "use strict";
    nombre2="Juan";
    return nombre2;
}

var nombre = "Fernando";
console.log( nombre );

console.log( getNombre() );
