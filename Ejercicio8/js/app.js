

var persona = {

    nombre: "Maria",
    apellido: "Dubon",
    imprimirNombre: function(){

        console.log( this.nombre + " " + this.apellido );
    },
    direccion: {
        pais: "Costa Rica",
        obtenerPais: function(){
            //Aqui creo una variable self, para asignar el valor de this, que en ese punto si estaba
            //tomando la informacion del objeto dirección.
            var self = this;
            var nuevaDireccion = function(){
                console.log( self );
                console.log("La dirección es en: " + self.pais);



            }
            nuevaDireccion();
        }
    }

};

persona.imprimirNombre();
persona.direccion.obtenerPais();

