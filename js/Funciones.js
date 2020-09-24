  
/* 
    -------------------------------
        Author : Osvaldo Aquino
        NickName: Owi
        FUNCIONES
    -------------------------------
*/




// Fimcopmes que actuan como argumentos 

function hola (/*parametros*/ persona )
    {

    }

hola (/* arugumentos*/'Pepe'); 


/*
    Podemos tener argumentos una funcion 
    eso aumenta el sistema
 */

function suma (a,b)
    {
        return a + b;
    }

/*
    ¿es posible enviar menos de lo que a pedido ?
        si 
    ¿es posible enviar mas de lo que a pedido ?
        si tambien 
    pero sabemos que el resultado va a ser "un error"
*/
var resultado = suma (10);
alert (resultado); 




// Solucion 

function suma (a,b)
    {
        if (b=== undefined)
            b=0;
        return a + b;
    }

/*
    
*/
var resultado = suma (10);
alert (resultado);



/*Argumentos sobrantes no generan error  */
function suma (a,b)
    {
        return a + b;
    }

/*
    
*/
var resultado = suma (4,5,8,9);
alert (resultado);

/*
    siguiente ejemplo 
*/

/* El nombre del parametro da totalmente igual
    pero tiene que ser un parametro logico y que se entienda  */


//funcion de escritura
function suma (total)
    {
        if (total)              // el if es una costumbre para saber si llega un parametro. En vez de total puede ser true
            {
                document.write(`La suma es ${total}`);
            }
        
    }

/*
    
*/

//funcion logica
function logica (a,b)
    {
        return a + b;
    }



//llamar a la funcion
suma(logica(10,200));
/*
    - En vez de enviar valores. Estamos enviando una funcion y esa funcion tiene una carga
    de elementos.
    - le vamos a llamar a suma otra funcion 
    en este caso "logica"
    - la funcion logica la mandamos a un parametro
    - Esta es una de las bases que hay que tener clara para lo que viene despues
    de "asincronismo"
    - Lo estoy 
*/
