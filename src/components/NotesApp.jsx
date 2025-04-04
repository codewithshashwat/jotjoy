import React, { useState, useEffect } from "react";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);

  // ✅ Load notes from LocalStorage when component mounts
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  // ✅ Save notes to LocalStorage whenever notes change
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  // ✅ Function to add a new note
  const addNote = (text) => {
    if (text.trim() !== "") {
      const newNote = { id: Date.now(), text };
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
    }
  };

  // ✅ Function to delete a note
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#4facfe] to-[#00f2fe] p-6">
      <div className="max-w-3xl mx-auto">
        {/* Add Note Component */}
        <div className="bg-white p-6 shadow-xl rounded-2xl">
          <h2 className="text-3xl font-bold text-[#1e3c72] mb-4 poppins-bold">Add New Note</h2>
          <textarea
            id="noteInput"
            className="w-full poppins-regular p-4 border-2 border-[#1e3c72] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00f2fe]"
            rows="3"
            placeholder="Write your thoughts here..."
          />
          <button
            onClick={() => {
              let noteInput = document.getElementById("noteInput").value;
              addNote(noteInput);
              document.getElementById("noteInput").value = ""; // Clear input
            }}
            className="mt-4 bg-[#1e3c72] poppins-regular text-white px-6 py-2 flex justify-center items-center gap-1 rounded-full hover:bg-[#2a5298] transition duration-300"
          >
            <i className="fa-solid fa-plus"></i>
            Add Note
          </button>
        </div>

        {/* Notes List Component */}
        <div className="bg-white p-6 shadow-xl rounded-2xl mt-6">
          <h2 className="text-3xl font-bold text-[#1e3c72] mb-4 poppins-bold">My Notes</h2>
          <ul className="space-y-4">
            {notes.length > 0 ? (
              notes.map((note) => (
                <li
                  key={note.id}
                  className="bg-gradient-to-r poppins-regular from-[#4facfe] hover:scale-110 transition-all  to-[#00f2fe] text-white p-4 rounded-lg shadow-md flex justify-between items-center"
                >
                  {note.text}
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="ml-4 bg-[#a0001c] px-3 py-1 rounded-lg hover:bg-[#800016] transition"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </li>
              ))
            ) : (
              <p className="text-gray-500 poppins-light text-center">No notes yet. Start jotting! <i class="fa-solid fa-pen-nib"></i></p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotesApp;
