import toggleTask from "../script/toggleTask.js";


const ToDoList = ({ todos, setTodos }) => {


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
                                onChange={() => toggleTask(todo.id, todos, setTodos)}
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