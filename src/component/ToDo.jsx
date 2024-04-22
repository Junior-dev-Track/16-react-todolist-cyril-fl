import { useState } from 'react'

function ToDo({ addTodo }) {

    const [todo, setTodo] = useState('')
    const handleSubmit = (event) => {
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
            <form className={'formulaire'} onSubmit={handleSubmit}>
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

export default ToDo
