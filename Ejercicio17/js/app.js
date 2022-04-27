/* comentarios

var arr = ["Fernando",{
          nombre: "Fernando",
          apellido: "Herrera",
          getNombre: function(){
            return this.nombre + " " + this.apellido;
          }
},true, function(){ console.log( this ); } ];

console.log( arr );*/

//**************************************************************************************************** */
//                              MANEJO DE ERRORES EN JAVA SCRIPT
//**************************************************************************************************** */
//Esto quiere decir intenta, ose java script intenta hacer el siguiente bloque de codigo
/* 
el try, es basicamente intente hacer ese bloque de codigo, pero si no lo puede hacer ejecute el catch.
Pero si supongamos yo solo quiero hacer el try y que no tenga un catch, debo obligatoriamente enviar un
finally, Ejmplo:
try{

  var a = 100;
  console.log("El valor de a: ", a );
}
finally{
    console.log("Finalmente");
}

En ese caso el ejecuta el try y adicionalmente finaliza con el finally haciendo el finally. 
Con el catch solo hace el try o el catch
*/
/*Ejemplo 1
try{

  var a = 100;

  if (a ===103){
  //La función throw lo que hace es forzar un error para que se ejecute el catch, basicamente es un
  //lanzador.
    throw 'Que mal!!!';
  }else{
    throw 'oh oh!!!!';
  }
}
catch( e ){
  if (e === "Que mal!!!"){
      console.log( "Error tipo 1" );
}
  if (e === "oh oh!!!!"){
      console.log( "Error tipo 2" );
  }
}
finally{
  console.log("Finalmente");
}
*/
/*Ejercicio 2
try{

  throw new Error("Error tipo 1");

  console.log("Esta parte nunca se ejecuta");

}
catch(e){
  console.log(e.message);
}
finally{
  console.log("Final")
}
*/
/*Ejemplo 3
try{

  throw {
        nombreError: "Error tipo 1",
        accion: "Salir corriendo y echarle agua al servidor",
        codeerror:1
  }

  console.log("Esta parte nunca se ejecuta");

}
catch(e){
  console.log(e);
  console.log(e.nombreError);
  console.log(e.accion);
  console.log(e.codeerror);

  console.log("Parte del catch");
}
finally{
  console.log("Final")
}
*/
try{

  throw function(){
    console.log("Función dentro del trow...");
  }

  console.log("Esta parte nunca se ejecuta");

}
catch(e){
  
    e();

  console.log("Parte del catch");
}
finally{
  console.log("Final")
}