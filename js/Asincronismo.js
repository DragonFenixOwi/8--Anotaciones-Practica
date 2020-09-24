/* 
    -------------------------------
        Author : Osvaldo Aquino
        NickName: Owi
        ASINCRONISMO
    -------------------------------
*/



/*
    
    -JavaScritp solo puede hacer una cosa a la vez. No lo podemos mandar 2 o 3
    - ¿que ocurre si le mandamos mas cosa a la vez? 
        - delega esas cosas al navegador porque puede hacer una cosa a la vez
        - eso se llama event loop - bucle de eventos
    - CALLBACKS
        - son esas tareas que delegan al navegador
        -Esas fuciones que el navegador te tiene que dar una respuestas porque no ha cumplido hacer esa tarea porque 
        estaba en otras cosas

    -MUCHO CUIDADO  con CALLBACKS
        - Paso de tareas a funciones
        - se acumula muchas funciones porque no se pueden hacer
        - Event loop bloqueado. Va a tener varias fuciones que va a tardar en ejecutar
        - Hay que tener mucho cuidado con eso. 
    */




/*
    -----------------------------------------------------------
        ¿ COMO SE COMPORTA JAVASCRIPT EN SU LÍNEA DE TIEMPO 
    -----------------------------------------------------------
*/


console.log(1);
//vamos a hacer que nos atrace esto 
//necesitamos una funcion sino no funciona el timeur
setTimeout(() => console.log(2),3000);
console.log(3);




/* SIGUIENTE CASO */



// la funcion la coge y la añade a la cola de tareas
//solo por tener una funcion adentro, manda a la cola de tareas.
setTimeout(() => console.log(2),0);
console.log(3);

//cuando llega al final del codigo, empieza a sacar las tareas de la cola de tareas


/*
    -Para entender el asincronismo hay que saber como trabaja esa cola de tareas.
    -
*/


setTimeout (() => console.log('hola mundo'), 3000);


// si el ventilador se sobre carga, salir no mas del bucle.
/*
    -Aun que se haya resuelto en 3 segundos la linea de arriba
    tuvo que esperar 9 para ejecutarlas
    - Mientras no tenga las tareas basicas ejecutadas, no va  a ir a la pila o la cola de tareas
    - No es para nada lineal, es en orden de prioridades. 
    -
*/

// tareas basicas
for (let i=0; i< 1000000000; i++)
    {
        // tarda 9 segundos para terminar este bucle
    }


/*
    - por que tiende a esperar 
    -Porque se mete en un argumento
*/






    
/*
    ---------------------------------------------
                    CALLBACK'S
    ----------------------------------------------
*/


/*
    CALLBACK'S
        - Es una funcion que se pasda a otra funcion como argumento. (Funciones.js)
            - Y es un modo de asegurar que cierto codigo no se ejecuta antes de terminar el anterio
            - es una llamada atras. Si no se ha producido esto no hagas esto.
            - Ejecutar en el momento oportuno.
    Para entender los CALLBACK'S 
            - ¿que es una libreria?
        - JQuery - trabajaremos con esta libreria externa
        - porque tenemos libreria interna de javascript
    - libreria 
        -clases, funciones que no tenemos en javascript
    - JQuery
        - tiene codigo malo. 
        - Es una libreria muy antigua.
        - Es muy conocida, pero .........
        - https://code.jquery.com/
    lIBRERIA
            <script
        src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"></script>
    
        - JQuery va a ser el request que nos va atraer una API
*/


    
/*
    ---------------------------------------------
                    API
    ----------------------------------------------
*/


/*
    - Forma de conectar dos aplicaciones
    - Yo puedo conectarme a una aplicacion y consumir esa API
    - API (Free, registro, pago)
        - algunos son bastente bestias porque no nos piden dinero pero nos piden hasta que donemos sangre
    - API bastente interesante
        - https://swapi.dev/ 

    - Personajes de star- Wars
*/




/*
    ---------------------------------------------
                    STAR WARS
    ----------------------------------------------
*/

//crear las bases para poder acceder a la API


// Hacemos una API_URL no va a cambair
const API_URL= "https://swapi.dev/api";
const PERSONAJES_URL = "people/:id:"; 




//personajes de Star- WARS
const LEIA_URL = `${API_URL}${PERSONAJES_URL}.replace(':id',5)`; //sin espacios los dos singos del dolar.
const OPCIONES = {crossDomain: true}; /*esto no es javascript- Es JQuery */


// esta funcion se va a convertir en un callback
const PERSONAJE = function (personaje)
    {
        // creo que habia mas datos como "personaje.height" = altura. 
        // los datos que visualizamos  es algo que traemos de la API de "https://swapi.dev/ " 
        document.write(`Hola yo soy ${personaje.name}`);
    }

/*
    - mira yo no quiero que me envies esa informacion sin antes guardarla. Por eso lo convertimos en un callback
*/


//ahora necesito esa informacion 
//$.get(LEIA_URLM,crossDomain, OPCIONES,/*aqui vamos a insertar el callback */);
//callback es una funcion 

/*
    - llamamos a la libreria de JQuery y a su fucion get 
    - PERSONAJE se convierte en un callback
    - get va a ser el encargado de llamar a la funcion PERSONAJE
    - Y si la recumeracion no funciona o no devuelve datos, nuestra funcion callbalk, nunca se va a
    ejecutar y eso es perfecto. 
    - Los callbacks son para eso. Que la funcion que yo llamo funcione y no llame a otra funcion.
*/
$.get(LEIA_URL, OPCIONES,PERSONAJE);
