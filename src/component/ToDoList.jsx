import React from "react";

const ToDoList = ({ todos, setTodos }) => {
    // Update isDone
    const toggleTask = (taskId) => {
        setTodos(
            todos.map((task) => {
                const Id = task.id

                Id === taskId ? {...task, isDone: !task.isDone} : task
                Id === taskId ? console.log(task.content) : task

            }
        )
    };



    // a corriger
    return (
        <>
            <h2 className={'tilte2'}>Todos :</h2>
            <ul>
                {todos.map((todo) => (
                    <li className={'todo'} key={todo.id}>
                        {/* Utilisation de la case à cocher avec son état propre */}
                        <input
                            className={'checkbox'}
                            type="checkbox"
                            checked={todo.isDone}
                            onChange={() => toggleTask(todo.id)}
                        />
                        {todo.content}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ToDoList;