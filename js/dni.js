
/* 
    ------------------------------------------
        Author : Osvaldo Aquino
        NickName: Owi
        FUNCIÓN Y  PROTOTIPO (CONSTRUCTOR)
    ------------------------------------------
*/


// letra invariable de referencia para saber la letra de un número DNI
const Letra_DNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X",
                    "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K",
                    "E", "T",];
                


/* La clase persona no va a tener un constructor por eso le ponemos NOMBRE Y  DNI */
class Persona 
    {
        constructor(nombre,dni)
            {
                this.nombre = nombre;
                this.dni = dni;
                //cada ves que hacemos this es una ll
                // // dame algo. this es pedir algo. 
                // Juan.dni   la consola te da el dni
                // this.dni  pasa absolutamente lo mismo
            }
    
            policia (comprobar)
                {
                    var comprobar = comprobar_dni (this.dni);
                    if (comprobar)
                        {
                            document.write(`El dni de ${this.nombre} es correcto`);
                        }
                    else 
                        {
                            document.write(`El dni de ${this.nombre} no  es correcto`);
                        }
                }
    
    }





//FUNCION

function comprobar_dni (dni)
    {
        /* Substring es una especie de corte que haces en un string que es de la posicion cero hasta el 8*/
        var numero_sin_letra = dni.substring(0,7);


        //logica del DNI
        const RESTO = numero_sin_letra%23;
        var dni_completo = string(numero_sin_letra + letras[RESTO]); 

        if (dni_completo === dni)
            {
                return true;
            }
        else
            {
                return false;
            }
    }

// iniciar 

/*

*/

var juan = new Persona ('Juan','78212121P');


/*
    - Estamos enviando una funcion no un metodo. 
    - Envio de funciones atraves de argumentos
    - 
*/

//Envio de la  funcion como argumento, hacia el parametro
/*
    
*/
juan.policia(comprobar_dni);
