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

    
    noteTitleInput.textContent = 'Note Title';
    noteTextarea.textContent = 'Note Text';
  }
});

leftContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-note')) {
    const noteElement = event.target.closest('.list-group-item');
    if (noteElement) {
      leftContainer.removeChild(noteElement);
    }
  }
});