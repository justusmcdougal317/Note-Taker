
document.addEventListener("DOMContentLoaded", function () {
    
    const notesList = document.getElementById("notes-list");
    const noteTitleInput = document.getElementById("note-title");
    const noteTextInput = document.getElementById("note-text");
    const saveNoteBtn = document.getElementById("save-note");
    const clearFormBtn = document.getElementById("clear-form");
  
    
    const existingNotes = [
      { id: 1, title: "Note 1", text: "This is the first note." },
      { id: 2, title: "Note 2", text: "This is the second note." },
    ];
  
    
    function renderNotes() {
      notesList.innerHTML = "";
      existingNotes.forEach((note) => {
        const noteItem = document.createElement("div");
        noteItem.innerHTML = `<p>${note.title}</p>`;
        noteItem.addEventListener("click", () => displayNoteDetails(note));
        notesList.appendChild(noteItem);
      });
    }
  
    
    function displayNoteDetails(note) {
      
    }
  
    
    saveNoteBtn.addEventListener("click", () => {
      
      const newNote = {
        id: existingNotes.length + 1,
        title: noteTitleInput.value,
        text: noteTextInput.value,
      };
      existingNotes.push(newNote);
      renderNotes();
      clearForm();
    });
  
    
    clearFormBtn.addEventListener("click", clearForm);
  
    
    function clearForm() {
      noteTitleInput.value = "";
      noteTextInput.value = "";
    }
  
   
    renderNotes();
  });
  