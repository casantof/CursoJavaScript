/** 

function persona(){

    this.nombre = "Juan";
    this.apellido = "Mendoza";
    this.edad = 30;

    this.imprimirPersona = function(){
    
        return this.nombre + " " + this.apellido + " " + "(" + this.edad + ")";

    }
}

var juan = new persona();

console.log( juan );
console.log( juan.nombre );
console.log( juan.imprimirPersona() );

*/

function persona(nombre, apellido){

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 30;

    this.imprimirPersona = function(){
    
        return this.nombre + " " + this.apellido + " " + "(" + this.edad + ")";

    }
}

var juan = new persona("Juan", "Medoza");


console.log( juan.imprimirPersona() );
