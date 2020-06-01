/*
    ------------------------------
        Asincronismo
    ------------------------------
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
const OPCIONES = {crossDomain: true}; 


// e
const PERSONAJE = function (personaje)
    {
        // c "https://swapi.dev/ " 
        document.write(`Hola yo soy ${personaje.name} ${"<br><br>"}`);
    };






function perdirPersonaje (id)
    {
        const URL = `${API_URL}${PERSONAJE_URL.replace(":id",id)}`; 
        $.get(LEIA_URL, OPCIONES,PERSONAJE);
    }



//llamamos a la API
pediPersonaje(1);
pediPersonaje(2);
pediPersonaje(3);
/*
    -Las API
        -No podemos controlar 
        - Porque pedimos a la API una petición pero no pudimos controlar el orden que yo quiero que llegue los valores

*/

