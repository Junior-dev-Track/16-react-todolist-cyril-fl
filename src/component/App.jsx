import { useState } from 'react'
import '../style/app.css'
import Form from "./Form.jsx";
import ToDoList from "./ToDoList.jsx";

function App() {

    const [todos, setTodos] = useState([]);

    function addTodo(text) {
        const newTodo = {
            id: Date.now(),
            isDone: false,
            content: text
        };
        setTodos([...todos, newTodo]);
    }



    return (
        <div className={'App'}>
            <h1 className={'tilte1'}>My Todo app</h1>
                <Form addTodo={addTodo} />
                <ToDoList todos={todos} setTodos={setTodos}/>
        </div>
    );
}

export default App

// todo : faire une footer et une header ?