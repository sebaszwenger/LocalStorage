//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets =[];


//Eventos
eventListeners();

function eventListeners() {
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweets);

    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        crearHTML();
    });

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

//Muestra mensaje de error por 2 segundos
function mostrarError(m) {
    const mensaejError = document.createElement('p');
    mensaejError.textContent = m;
    mensaejError.classList.add('error');
    mensaejError.style.fontSize = '1.2rem';
    mensaejError.style.margin = '2.5rem 0';
    mensaejError.style.borderRadius = '4px';
    formulario.appendChild(mensaejError);
        
    setTimeout( () => {
        mensaejError.remove();
    },2000);    
}

//Muestra listado de tweets en el HTML
function crearHTML() {
    limpiarTweets();
    if(tweets.length > 0) {
        tweets.forEach( tweet => {
            const btnEliminar = document.createElement('A');
            btnEliminar.innerHTML = 'X';
            btnEliminar.classList.add('borrar-tweet');

            btnEliminar.onclick = () => {
                eliminarTweet(tweet.id);
            }

            const li = document.createElement('li');
            li.innerText = tweet.tweet;
            li.appendChild(btnEliminar);
            listaTweets.appendChild(li);
        });
    }
    
    sincronizarStorage();
}

//Limpia HTML previo
function limpiarTweets() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

//Agrega los tweets actuales al local storage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Elimina un tweet
function eliminarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}