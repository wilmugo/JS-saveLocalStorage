// Variables
const tweetList = document.getElementById('tweet-list');

//Eventos
eventListener();
function eventListener() {
  document.querySelector('#form').addEventListener('submit', newTweet);
}

//Funciones
function newTweet(e) {
  e.preventDefault();

  //leer el valor del texto en el textarea
  const tweet = document.getElementById('tweet').value;

  //crear boton de eliminar
  const removeBtn = document.createElement('a');
  removeBtn.classList = 'remove-tweet';
  removeBtn.textContent = 'X';

  //crear elemento li donde va ir el texto del textarea
  const li = document.createElement('li');
  li.textContent = tweet;

  //poner el boton de eliminar en el li
  li.appendChild(removeBtn);

  //colocar el li en el div tweet-list
  tweetList.appendChild(li);
}
