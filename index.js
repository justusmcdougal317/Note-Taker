let noteForm;
let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let noteList;


const getNotes = () =>
  fetch('/api/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });


const saveNote = (note) =>
  fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });


const deleteNote = (id) =>
  fetch(`/api/notes/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });


const renderActiveNote = () => {
  const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');

const noteContainer = document.querySelector('.note-container');
const noteTextareas = document.querySelectorAll('.note-textarea');

box1.addEventListener('click', () => {
  noteTextareas[0].value = 'Content for Box 1';
});

box2.addEventListener('click', () => {
  noteTextareas[1].value = 'Content for Box 2';
});

box3.addEventListener('click', () => {
  noteTextareas[2].value = 'Content for Box 3';
});

box4.addEventListener('click', () => {
  noteTextareas[3].value = 'Content for Box 4';
});

  const handleNoteSave = () => {
    const newNote = {
      title: noteTitle.value,
      text: noteText.value,
    };
    saveNote(newNote).then(() => {
      getAndRenderNotes();
      renderActiveNote();
    });
  };    
};

const handleNoteSave = () => {
  const newNote = {
    title: noteTitle.value,
    text: noteText.value,
  };
  saveNote(newNote).then(() => {
    getAndRenderNotes();
    renderActiveNote();
  });
};

const handleNoteDelete = (e) => {
 
};


const handleNoteView = (e) => {
  
};


const handleNewNoteView = (e) => {
 
};




const getAndRenderNotes = () => getNotes().then(renderNoteList);


saveNoteBtn.addEventListener('click', handleNoteSave);

// Render the list of note titles
const renderNoteList = async (notes) => {
  let jsonNotes = await notes.json();
  if (window.location.pathname === '/notes') {
    noteList.forEach((el) => (el.innerHTML = ''));
  }
  let noteListItems = [];
  // Returns HTML element with or without a delete button
  const createLi = (text, delBtn = true) => {
    const liEl = document.createElement('li');
    liEl.classList.add('list-group-item');
    const spanEl = document.createElement('span');
    spanEl.classList.add('list-item-title');
    spanEl.innerText = text;
    spanEl.addEventListener('click', handleNoteView);
    liEl.append(spanEl);
    if (delBtn) {
      const delBtnEl = document.createElement('i');
      delBtnEl.classList.add(
        'fas',
        'fa-trash-alt',
        'float-right',
        'text-danger',
        'delete-note'
      );
      delBtnEl.addEventListener('click', handleNoteDelete);
      liEl.append(delBtnEl);
    }
    return liEl;
  };

  // Add the newly saved note to the list
  const newNote = jsonNotes[jsonNotes.length - 1];
  const li = createLi(newNote.title);
  li.dataset.note = JSON.stringify(newNote);
  noteListItems.push(li);

  jsonNotes.forEach((note) => {
    const li = createLi(note.title);
    li.dataset.note = JSON.stringify(note);
    noteListItems.push(li);
  });
  
  if (window.location.pathname === '/notes') {
    noteListItems.forEach((note) => noteList[0].append(note));
  }
};

getAndRenderNotes();