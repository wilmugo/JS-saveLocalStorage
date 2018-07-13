// Variables
const noteList = document.getElementById('note-list');

//Eventos
function eventListener() {
  //evento que envia lo que esta escrito en el valor del textarea a la lista
  document.querySelector('#form').addEventListener('submit', newNote);

  //evento para eliminar nota de la lista
  noteList.addEventListener('click', removeNote);

  //cargar elementos del local storage
  document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}
eventListener();

//Funciones
//funcion para crear nota y agregarla a la lista
function newNote(e) {
  e.preventDefault();

  //leer el valor del texto en el textarea
  const note = document.getElementById('note').value;
  document.getElementById('note').value = '';

  addElementInList(note);

  //agregar la nota al localstorage
  addNoteToLocalstorage(note);
}

//funcion para remover nota de la lista
function removeNote(e) {
  //delegacion de evento pregunta si el target del click fue en el link con la clase remove-note
  if (e.target.classList.contains('remove-note')) {
    //elimina el padre del link donde se hace click
    e.target.parentElement.remove();
  }
}

function addNoteToLocalstorage(note) {
  let notes = getNotesFromLocalstorage();

  //agregar nota al array
  notes.push(note);

  //convertir el arra en string
  localStorage.setItem('notes', JSON.stringify(notes));
}

//cargar datos del local storage
function localStorageOnLoad() {
  let notes = getNotesFromLocalstorage();

  notes.forEach(note => {
    addElementInList(note);
  });
}

//helper para obtener datos del local storage
function getNotesFromLocalstorage() {
  let notes;
  const notesLS = localStorage.getItem('notes');
  if (notesLS === null) {
    notes = [];
  } else {
    notes = JSON.parse(notesLS);
  }
  return notes;
}

//helper para crear elemento en la lista
function addElementInList(note) {
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
