import { useState, useEffect } from 'react'
// import '../style/app.css'
import Form from "./Form.jsx";
import ToDoList from "./ToDoList.jsx";
import Switch from "./Switch.jsx"

const App = () => {
    // Charger les rappels depuis le stockage local au chargement de l'application
    const loadTodosFromLocalStorage = () => {
        const todosJSON = localStorage.getItem('todos');
        return todosJSON ? JSON.parse(todosJSON) : [];
    };
    const [todos, setTodos] = useState(loadTodosFromLocalStorage());

    // Fonction pour enregistrer les rappels dans le stockage local
    const saveTodosToLocalStorage = (todos) => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    // Mettre à jour le stockage local chaque fois que les todos changent
    useEffect(() => {
        saveTodosToLocalStorage(todos);
    }, [todos]);


    const  addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            isDone: false,
            content: text
        }
        setTodos([...todos, newTodo])
    }



    return (
        <>
            <div className={'App'}>
                    <h1 className={'tilte1 logo'}>My Todo app</h1>
                    <Switch />
                    <Form addTodo={addTodo}/>
                    <ToDoList todos={todos} setTodos={setTodos}/>
            </div>
        </>
    )
}

export default App

// todo : faire une footer et une header ?