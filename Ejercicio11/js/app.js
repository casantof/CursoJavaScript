
//Crea una función, la coloca la J en mayuscula para avisar que es una clase.(Recibe un parametro de nombre)
function Jugador( nombre ){
//crea unos parametros 
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;
//Crea una funcíon para curar un campañero
    this.curar = function( jugadorObjetivo ){

        if ( this.sp >= 40 ){
             this.sp -= 40;
             jugadorObjetivo.pv += 20;
    }else{
        console.info( this.nombre + " no tiene sp" );
    }
//muestra el estado de un juegador

        this.estado( jugadorObjetivo );

}      
//Se crea una función tirar flecha para herir a un jugador        
this.tirarFlecha = function( jugadorObjetivo ){

            if ( jugadorObjetivo.pv > 40){
                 jugadorObjetivo.pv -= 40;
            }else{
                jugadorObjetivo.pv = 0;
                console.error(jugadorObjetivo.nombre + " murio!!!")    
            }

            this.estado( jugadorObjetivo );

        };
    
//función para mostrar los estados a ese momento cuando la invocan
    this.estado = function( jugadorObjetivo ){

        console.info( this );
        console.info( jugadorObjetivo );
    }
};
//crea variables
var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");
//Imprime como esta cada jugador
console.log( gandalf );
console.log( legolas );

//Ejecuta el programa, o llama la función para ejecutar
gandalf.curar( legolas );
