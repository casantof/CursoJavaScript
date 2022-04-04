//Crea un Objeto persona y dentro de este crea un objeto dirección. 
var persona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion:{
        pais: "Costa Rica",
        ciudad: "San Jose",
        edificio:{
            nombre: "Edificio principal",
            telefono: "2222-3333"
        }
    }
};

//Imprime por consola el objeto dirección que esta dentro del objeto persona
console.log(persona.direccion);
console.log(persona.direccion.pais);//Imprime por consola el pais que esta dentro del objeto dirección.

//Si olvidamos adicionar algo al objeto y necesitamos incluirlo lo podemos hacer de la siguiente manera
persona.direccion.zipcode = 11101;
console.log(persona.direccion);

//

console.log(persona.direccion.edificio.telefono);

//Aqui podemos crear una variable que contenga la dirección en memoria para apuntar directamente a ella y
//Asi evitarnos escribir toda la ruta a la que queremos acceder.
var edificio = persona.direccion.edificio;

console.log(edificio.telefono);


//Esta es otra forma de acceder al valor de una variable . En este caso estamos observando la información  de la ciudad
//que se encuentra dentro del objeto dirección y este a su vez dentro de persona.
console.log( persona["direccion"]["ciudad"]);

//Otra opción para acceder a esto es por medio de la creación de una variables la cual se crea y se le
//puede asignar el nombre que uno quiera para que el ingrese a buscarla
var nombre="edad";
console.log( persona[nombre]);
