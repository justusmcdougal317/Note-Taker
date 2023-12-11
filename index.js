const saveNoteBtn = document.querySelector('.save-note');
const noteTitleInput = document.querySelector('.note-title');
const noteTextarea = document.querySelector('.note-text');
const leftContainer = document.getElementById('note-list');

saveNoteBtn.addEventListener('click', () => {
  const title = noteTitleInput.textContent.trim();
  const text = noteTextarea.textContent.trim();

  if (title || text) {
   
    const noteElement = document.createElement('li');
    noteElement.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    noteElement.innerHTML = `
      <div>
        <h5 class="list-item-title">${title || 'Untitled'}</h5>
        <p class="list-item-text">${text}</p>
      </div>
      <i class="fas fa-trash text-danger delete-note"></i>
    `;

   
    leftContainer.appendChild(noteElement);

<<<<<<< HEAD
    
    noteTitleInput.textContent = 'Note Title';
    noteTextarea.textContent = 'Note Text';
=======
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
>>>>>>> 2e5321d4f32ddd877c072ade70c6cb4912472002
  }
});

leftContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-note')) {
    const noteElement = event.target.closest('.list-group-item');
    if (noteElement) {
      leftContainer.removeChild(noteElement);
    }
  }
<<<<<<< HEAD
});
=======
};

getAndRenderNotes();
>>>>>>> 2e5321d4f32ddd877c072ade70c6cb4912472002
