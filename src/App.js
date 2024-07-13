import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import AddNote from './components/AddNote';
import Note from './components/Note';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [notes, setNotes] = useState([]);
  const[darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    const newNote = { ...note, id:Date.now(), backgoundColor: note.backgoundColor };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter(note => note.id !== id);
    setNotes(filteredNotes);
  };

  const editNote = (id, updateNote) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, ...updateNote } : note
    );
    setNotes(updatedNotes);
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeColor = (id, color) => {
    const updatedNotes = notes.map(note => note.id === id ? { ...note, backgroundColor : color} : note);
    setNotes(updatedNotes)
  }

  

  return (
    <div className={darkMode ? 'bg-dark text-white' : ''}>
      <div className='container py-3'>
        <div className='d-flex justify-content-between align-items-center mb-3'>
          <h1>MY Notes</h1>
          <div>
            <button className='btn btn-secondary' onClick={toggleDarkMode}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
        <AddNote onAdd={addNote} />
        <div className='my-notes'>
          <div className='notes-container'>
            {notes.map(note => (
              <Note key={note.id} note={note} onDelete={deleteNote} onEdit={editNote} changeColor={changeColor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
