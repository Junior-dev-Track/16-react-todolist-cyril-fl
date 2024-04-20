import { useState } from 'react'

function Form({ addTodo }) {

    const [todo, setTodo] = useState('')
    const addToList = (event) => {
        event.preventDefault();
            if (todo.trim() !== '') {
                addTodo(todo)
                console.log(todo)
                setTodo('');
            } else {
                alert('Veuillez entrer un rappel valide.');
            }
    }

    return (
        <>
            <form className={'formulaire'} onSubmit={addToList}>
            <input
                className={'champText'}
                type={'text'}
                placeholder={'T\'as oublié quoi ?'}
                id={'id'}
                value={todo}
                onChange={ (event) => setTodo(event.target.value) }
            />

            <button type="submit">GO</button>
            </form>
        </>
    )
}

export default Form
