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
    console.log(tweet);
}