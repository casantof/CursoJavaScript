
//tipos de datos primitivos
/*
var num = 10;
var str = "Texto";
var bol = true;
var und = undefined;
var nul = null;

//como declarar objetos

var obj = {
    numero = 10
    texto = "carlos"
    //Este es un objeto dentro de un objeto
    objHijo:{
        mascota: "Perro"
    }
}
*/

//Por valor o por referencia

var a = 10;
var b = a; 
console.log("a: ", a);
console.log("b: ", b);

a=20;


console.log("a: ", a);
console.log("b: ", b); 

var c ={
    nombre: "juana"
}

var d = c;

console.log("c: ", c);
console.log("d: ", d); 

c.nombre= "Maria";

console.log("c: ", c);
console.log("d: ", d); 

d.nombre= "Pedro";

console.log("c: ", c);
console.log("d: ", d); 