import React, { useState, useEffect } from 'react';
// import '../style/app.css';
import { loadFromLocalStorage, saveToLocalStorage, test } from '../script/loadNsave.js';
import ToDo from './ToDo.jsx';
import ToDoList from './ToDoList.jsx';
import Switch from './Switch.jsx';
import CalendarView from './CalendarView.jsx';
import Notes from './Notes.jsx';
import NotesList from './NotesList.jsx';


const App = () => {




    // Todos
    const [todos, setTodos] = useState(loadFromLocalStorage('todos'));
        useEffect(() => {
            saveToLocalStorage('todos', todos)
        }, [todos]);
    const  addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            isDone: false,
            content: text
        }
        setTodos([...todos, newTodo])
    }







    // Notes
    const [notes, setNotes] = useState(loadFromLocalStorage('notes'));



        useEffect(() => {
            saveToLocalStorage('notes', notes)
        }, [notes]);
    const  addNote = (text) => {
        const newNote = {
            id: Date.now(),
            isDone: false,
            content: text
        }
        setNotes([...notes, newNote])
    }

    return (
        <div className="App">
            <h1 className="tilte1 logo">My Todo app</h1>
            <Switch />
            <div className="blockList">
                <ToDo addTodo={addTodo} />
                <ToDoList todos={todos} setTodos={setTodos} />
            </div>
            <CalendarView />
            <Notes addNote={addNote} />
            <NotesList notes={notes} setNotes={setNotes}/>
        </div>
    );
};

export default App;

