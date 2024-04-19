import React, { useState } from "react";

const ToDoList = ({ todos, addTodo }) => {


    // Checkbox
    const [isCheckedBox, setIsCheckedBox] = useState(false);
    const handleCheckboxChange = () => {
        setIsCheckedBox(!isCheckedBox);
    };


    // Update isDone
    const toggleTask = (taskId) => {
        setToDoList(todos.map(task => task.id === taskId ? { ...task, isDone: !task.isDone } : task));
    };





    return (
        <>
            <h2 className={'tilte2'}>Todos :</h2>
            <ul>
                {todos.map((todo) => (
                    <li className={'todo'} key={todo.id}>
                        {/* Utilisation de la case à cocher avec son état propre */}
                        <input className={'checkbox'} type="checkbox" checked={todo.isDone} onChange={() => toggleTask(todo.id)} />
                        {todo.content}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ToDoList;