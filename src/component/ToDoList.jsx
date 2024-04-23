import toggleTask from "../script/toggleTask.js";
import ToDoInput from "./ToDoInput.jsx";

const ToDoList = ({ listItems, setListItem }) => {

    return (
        <>
            {
                listItems.map((listItem) => (
                    <li className={'todo'} key={listItem.id}>
                        <div className="checkbox">
                            <input
                                id={`myCheckbox${listItem.id}`}
                                type="checkbox"
                                checked={listItem.isDone}
                                onChange={() => toggleTask(listItem.id, listItems, setListItem)}
                            />
                            <label htmlFor={`myCheckbox${listItem.id}`}></label>
                        </div>
                        <div className="content">
                            <ToDoInput
                                listItem={listItem}
                                listItems={listItems}
                                setListItem={setListItem}
                            />
                        </div>
                    </li>
                ))
            }
        </>
    )
};

export default ToDoList;




