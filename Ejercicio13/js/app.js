//Esto es un arreglo 
var arr = [5, 4, 3, 2, 1];
//Aqui imprimimos todo el arreglo
console.log( arr );
//Aqui imprimimos la posición 0 del arreglo y la posicion 4,
console.log( arr[0], arr[4] );

//Esto lo que hace es que recibe como parametro el arreglo y lo que hace es invertirlo
arr.reverse();
console.log( arr );

//El arreglo con la función map nos permite ejecutar una función contra cada uno de los elementos del arreglo
//sin hacer un ciclo for o while, A continuación el siguiente ejemplo
//Este lo que hace es que elem va tomando el numero de cada uno de los valores del arreglo como si fuera un 
//ciclo for
arr = arr.map( function(elem){
    elem *=elem;
    return elem;
})

console.log( arr );

//La siguiente sentencia es para sacar la raiz cuadrada de un numero, en este caso es del arreglo que 
//Estamos enviando
arr = arr.map( Math.sqrt);
console.log( arr );

//La función Join, lo que hace es que une todos los valores del arreglo y los deja separados por (,), esto
//depende de lo que tu quieras usar para separarlo
//en este caso dio 1,2,3,4,5  y depues le agregamos al join "|", para separar por ese parametro

arr = arr.join("|");
console.log( arr );

//La función contraria al join es split que lo que hace es que genera un arreglo completo. ['1|2|3|4|5']
//Esto pasa solo cuando en el comando split no le enviamos un parametro para cortar.
//Pero si en cambio enviamo el parametro para cotar entrega lo siguiente ['1', '2', '3', '4', '5']

arr = arr.split("|");
console.log( arr );

//La función push, lo que hace es que adiciona una posición al final del arreglo.
arr.push("6");
console.log( arr );

//SI quiere adicionar una posición al comienzo o la primera posición del arreglo se debe usar lo siguiente 

arr.unshift("0");
console.log( arr );

//to string lo que hace es que coloca la representación textual del arreglo, basicamente es muy parecido
//al split, pero el tostring es mucho mas rapido pero no se le puede enviar parametros

console.log( arr.toString());

//Elimina la ultima posición de arreglo, pero muestra que fue lo que elimino

var elimine = arr.pop();
console.log( arr, elimine);

//la función splice recibe varios parametros, el primero debe ser siempre un numero, que corresponde a 
//la posición en la que voy a trabajar, el siguiente dato es la cantidad de datos que quieres eliminar.
//para este ejemplo me paro en la posición 1 del arreglo y borro 1 numero a partir de esa posición.
//arr.splice( 1, 1 );, podemos adicionar otro parametro que es que en borre el valor que existe en 
//la posición 1 y adicione un valor 10, en esa posición, tambien  ahi mismo se pueden adicionar mas valores
//No siempre es necesario que se borre alguna posición, tambien se puede enviar 0 en el segundo 
//parametro y a partir de ahi comienza a adicionar la información que yo requiera.

arr.splice( 1, 1, "10", "20", "30", "40" );
console.log( arr );

//función slice es basicamente lo opuesto de splite, lo que hace es que tome la posición de arreglo
//donde quiero comenzar a cortar, en este caso me coloco en la posición 0, y corto hasta la posición 2,
//de ahi en adelante no guarda nada mas
//
arr = arr.slice( 0, 2 );
console.log( arr );

//
var arr = [

    true,
    {
        nombre: "Fernando",
        apellido: "Herrera"
    },
    function(){
        console.log("Estoy viviendo en un arreglo");
    },
    function( persona ){

        console.log( persona.nombre + " " + persona.apellido );
   
    },
    [
        "fernando", 
        "Carlos", 
        "Hernando", 
        "Melisa", 
        [
            "Juan",
            "Pedro",
            "Dilcia",
            function(){
                console.log( this );
            }
        ]
    ]
];

console.log( arr ); 
console.log( arr[0] );
console.log( arr[1].nombre + " " + arr[1].apellido ); 
//Esta es la opción para llamar a la función dentro del arreglo
arr[2](); 
//Esta llamando a la función persona
arr[3]( arr[1]);

console.log( arr[4][4][1] )

var arreglo2 = arr[4][4];

arreglo2[1] = "Pedra!";
console.log( arreglo2[1]);

arreglo2[3]();