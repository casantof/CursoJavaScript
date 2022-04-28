/*Aqui estoy enviando un mensaje a la pagina
function saludo(){
  document.write("Hola mundo!!!! ");
}
saludo();
*/

//************************************************************************************************** */
//                                  Como crear cookies
//************************************************************************************************** */

//document.cookie = "nombre=Carlos";//Este es el comando para crear la cookie
/*
function crearCookies(nombre, valor){
  
  valor = escape(valor);
  var hoy = new Date();
  hoy.setMonth( hoy.getMonth() + 1);
/*existe una palabra reservada expires para las cookies, la cual sirve para darle una fecha de expiración
 
  document.cookie = nombre+"="+valor+";expires" + hoy.toUTCString()+";";

}

function borrarCookie(nombre){

  var hoy = new Date();
  hoy.setMonth( hoy.getMonth() - 1);
/*existe una palabra reservada expires para las cookies, la cual sirve para darle una fecha de expiración
 
  document.cookie = nombre+"=;expires=" + hoy.toUTCString()+";";

}


/*Prueba de como funciona la opcion escape, basicamente cambia los caracteres especiales por valores
que reconozca javascript y que no genere conflicto con la cookies que se esta creando, por ejemplo ";"
y otros caracteres especiales, en algun momento que se quiera recuperar el valor original se puede
usar la función unescape( escape(demo)). A continuación un ejemplo de escape
var demo = "123;123*123'123/";
console.log( demo );
console.log( escape(demo) );


//borrarCookie("nombre");
//crearCookies("nombre", "Carlos");
//crearCookies("correo", "fernando.herrera85@gmail.com");
//crearCookies("direccion", "San JOse Costa rica");

var cookies = document.cookie;

console.log( cookies );
*/
/***************************************************************************************************** */
//                                Ejercicio 2
//***************************************************************************************************** */
// Toma las cookies creadas y lo que hace es que va obtener alguna cookie
//document.cookie = "nombre=Carlos";//Este es el comando para crear la cookie
function crearCookies(nombre, valor){
  
  valor = escape(valor);
  var hoy = new Date();
  hoy.setMonth( hoy.getMonth() + 1);
/*existe una palabra reservada expires para las cookies, la cual sirve para darle una fecha de expiración
 */
document.cookie = nombre+"="+valor+";expires" + hoy.toUTCString()+";";

}

function borrarCookie(nombre){

  var hoy = new Date();
  hoy.setMonth( hoy.getMonth() - 1);
/*existe una palabra reservada expires para las cookies, la cual sirve para darle una fecha de expiración
 */
  document.cookie = nombre+"=;expires=" + hoy.toUTCString()+";";

}

function getcookie( nombre ){
  var cookies = document.cookie;
  var cookieArr = cookies.split("; ");

  console.log( cookieArr );


  for (var i = 0; i<cookieArr.length; i++){
      var parArray = cookieArr[i].split("=");
      cookieArr[i] = parArray;
      
      if(parArray[0] === nombre){
          return unescape(parArray[1]);
      }
  }
  console.log(cookieArr);
  return  undefined;

}

console.log(getcookie( "direccion" ));

//console.log( cookies );


