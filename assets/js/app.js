// Variables
const noteList = document.getElementById('note-list');

//Eventos
function eventListener() {
  document.querySelector('#form').addEventListener('submit', newTweet);
}
eventListener();

//Funciones
function newTweet(e) {
  e.preventDefault();

  //leer el valor del texto en el textarea
  const note = document.getElementById('note').value;
  document.getElementById('note').value = '';

  //crear boton de eliminar
  const removeBtn = document.createElement('a');
  removeBtn.classList = 'remove-note';
  removeBtn.textContent = 'X';

  //crear elemento li donde va ir el texto del textarea
  const li = document.createElement('li');
  li.textContent = note;

  //poner el boton de eliminar en el li
  li.appendChild(removeBtn);

  //colocar el li en el div tweet-list
  noteList.appendChild(li);
}
