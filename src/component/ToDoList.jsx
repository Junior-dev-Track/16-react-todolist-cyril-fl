


const ToDoList = ({ todos, setTodos }) => {
    // Update isDone
    const toggleTask = (taskId) => {
        setTodos(
            todos.map((task) => {
                task.id === taskId ? console.log(task.content) : task


                setTimeout(() => {
                    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== taskId));
                }, 900);

                return task.id === taskId ? {...task, isDone: !task.isDone} : task
            }
        ))
    }

    // a corriger
    return (
        <>
            <h2 className={'tilte2'}>Todos :</h2>
            <ul className={'todoList'}>
                {todos.map( todo => (
                    <li className={'todo'} key={todo.id}>
                        {/* Utilisation de la case à cocher avec son état propre */}
                        <div className="checkbox">
                            <input
                                id={`myCheckbox${todo.id}`}
                                type="checkbox"
                                checked={todo.isDone}
                                onChange={() => toggleTask(todo.id)}
                            />
                            <label htmlFor={`myCheckbox${todo.id}`}></label>
                        </div>
                        {todo.content}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ToDoList;