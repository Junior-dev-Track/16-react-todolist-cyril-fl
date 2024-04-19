import {useState} from "react";
import ListElement from "./toDoList/ListElement.jsx";
import Checkbox from "./toDoList/Checkbox.jsx";

const ToDoList = () => {
    return (
        <>
            <h1>Todos</h1>
                <ul>
                    <ListElement />
                    <Checkbox />
                    <ListElement />
                    <Checkbox />
                </ul>
        </>
    )
}

export default ToDoList