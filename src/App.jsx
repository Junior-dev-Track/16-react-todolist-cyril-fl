import { useState } from 'react'
import './style/app.css'
import Form from "./component/Form.jsx";
import ToDoList from "./component/ToDoList.jsx";

function App() {

  return (
      <>
        <h1>My Todo app</h1>
            <Form />
            <ToDoList />
      </>
  )
}

export default App
