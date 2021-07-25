//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets =[];


//Eventos
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweets);
}


//Funciones
function agregarTweets(e) {
    e.preventDefault();
    const tweet = document.querySelector('#tweet').value;

    if(tweet === '') {
        mostrarError('EL TWEET NO PUEDE IR VACIO');
        return;
    };

    const tweetObj = {
        id: Date.now(),
        tweet
    };

    tweets =[...tweets, tweetObj];
    crearHTML();
    formulario.reset();
}

//Muestra mensaje de error
function mostrarError(m) {
    const mensaejError = document.createElement('p');
        mensaejError.textContent = m;
        mensaejError.classList.add('error');
        mensaejError.style.fontSize = '1rem';

        const contenido = document.querySelector('#contenido');
        contenido.appendChild(mensaejError);

        //elimina alerta despues de 2 segundos
        setTimeout( () => {
            mensaejError.remove();
        },2000) 
}

//Muestra listado de tweets en el HTML
function crearHTML() {
    limpiarTweets();
    if(tweets.length > 0) {
        tweets.forEach( tweet => {
            const li = document.createElement('li');
            li.innerText = tweet.tweet;
            listaTweets.appendChild(li);
        });
    }
}

//Limpia HTML previo
function limpiarTweets() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}