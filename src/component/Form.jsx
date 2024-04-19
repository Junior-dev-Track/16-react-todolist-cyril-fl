import { useState } from 'react'
import InputField from "./form/InputField.jsx";
import AddTodo  from "./form/AddTodo.jsx";

function Form() {

    return (
        <>
            <label>Form</label>
            <InputField />
            <AddTodo />
        </>
    )
}

export default Form
