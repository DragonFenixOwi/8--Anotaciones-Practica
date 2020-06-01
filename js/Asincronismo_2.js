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
const API_URL= "https://swapi.dev/api/";
const PERSONAJES_URL = "people/:id"; 
const OPCIONES = {crossDomain: true}; 




const PERSONAJE = function (personaje)
    {
        // c "https://swapi.dev/ " 
            document.write(`Hola mi nombre es ${personaje.name}${"<br><br>"}`);

    };




function perdirPersonaje (id)
    {
        const URL = `${API_URL}${PERSONAJES_URL.replace(":id",id)}`; 
        $.get(URL, OPCIONES,PERSONAJE);
    }



//llamamos a la API
perdirPersonaje(1);
perdirPersonaje(2);
perdirPersonaje(3);


