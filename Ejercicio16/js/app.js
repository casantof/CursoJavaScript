//*************************************************************************************************** */
//                            EXPRESIONES REGULARES                                                   */
//*************************************************************************************************** */
//Aquí lo que hace es que va buscar "a" dentro del string o texto que yo tenga, no es tan usada, es mas 
//usada la del segundo ejemplo la del reg2
//var reg1 = RegExp("a");
//otra opción es, esas 2 expresiones son lo mismo
//var reg2 = /a/;

//var texto = "Holaaaa mundo, 123456.23"; 
//Aqui lo que hace es por medio de la función match llamar la expresion regular que busca a. se puede hacer
// colocando la variable o tambien /a/
//var arr = texto.match( reg1 ); Se usa mas como esta en la linea 16
//Esta expresion regular muestra un arreglo si y solo si encontro por lo menos una vez la letra a, de lo 
//contrario regresa un null
//var arr = texto.match( /a/ );

//SI adicionas al comienzo /^a/ quiere decir que busque en la primera posición del string la letra a
//Pero si quieres buscar en la ultima posición del string se debe adicionar /a$/
//Otra alternativa es que si quieres por ejemplo los 3 primeros caracteres debes colocarlo asi /.../
//cada . en ese caso seria un caracter
//Otra opcion es si quiero que en la primera posición busque cualquier cosa y en la seegunda una o. Se debe
//escribir de la siguiente manera /^.o/
//Otra forma es si quiero buscar un numero, selecciono un rango de numeros /[0-9]/ y el va a buscar dentro
//del string hasta encontrar algun numero que este entre ese rango y mostrar la posición
//Cabe resaltar que esto es keysensitive, lo que hace es que si buscas minusculas solo sera minusculas 
// /[a-z]/ no tendra mayusculas, Si quieres que tome minusculas y mayusculas debes hacerlo asi /[a-zA-Z]/ 
//Si requiere buscar espacio u otros separadores debes hacerlo asi /\s/
//Una forma resumida de buscar /[a-zA-Z0-9]/ lo puedes hacer asi /\w/
//Si quieren abreviar solo buscar numeros /[0-9]/, se puede hacer asi /\d/
//var arr = texto.match( /[0-9]/ );

//Existen 3 controladores para estas busquedas por ejemplo:
// i = insensible no tiene en cuenta mayusculas ni minusculas ( /m/i )
// g = todas las apariciones busca de todo                    ( /[aeiou]/g ), muestra las vocales que encuentre
//     en el orden como las encuentre, Pero tiene en cuenta las mayusculas y minusculas, si desea que no
//     tenga en cuenta las mayusculas ni las minusculas se debe colocar asi ( /[aeiou]/ig ) combinado
// m = que busca en multilinea                                 


//Operadores de repetición, o como buscar operadores repetitivos. en este caso encuentra 4 (a)
//Por ejemplo si yo le pongo a la busqueda (/[a+]/g), lo que hace es que muestra las (a) que esten pegadas
//o continuas algo asi aaaa + las que estan separadas
//var arr = texto.match( /[a]/ig );
//console.log( arr );
/*Otra opción que existe es (/[a?]/g), lo que haces es que va mostrar basicamente el vector completo
Pero solo se visualizaran las vocales (a), el resto de caracteres los mostrara en (""), porque eso
no lo esta buscando. hay un comando similar, hace lo mismo, pero muestra las letras que esten pegadas
en una misma posición del vector. El comando es: (/[a*]/g)                              
* Otra forma es (/a{2}/), este comando lo que hace es que busca la letra (a), pero solo busca la posición
  donde encuentre 2 (a) pegadas ejemplo asi (aa), pero solo busca la primera posición. Si quiere que 
  encuentre mas posiciones se le debe adicionar la g al comando (/a{2,}/g) y se le coloca la , para que sepa
  que sigue de ahi en adelante. Si requieren que solamente busque 2 veces que cumplan esas condiciones o 3
  lo unico que deben hacer es adicional el numero de veces que requieran asi (/a{2,3}/g) a continuación un
  ejemplo de su uso

var texto = "Aeropuerto"; 
var arr = texto.match( /[aeiou]{2,2}/ig );
console.log( arr );
*/

/*Ejercicio: buscar en el siguiente string los numeros y entregar lo que voy a sumar o que tambien me 
muestre la palabra respuesta*/
var texto = "La respuesta de la suma es: 45 + 65 = 105"; 
var arr = texto.match( /\d{1,}|respuesta/ig );
console.log( arr );

//Cualquier cosa si necesitan comandos o revisar funcionalidades puedes buscar de la siguiente manera
//mozilla regular expresion 
//Developer.mozilla.org