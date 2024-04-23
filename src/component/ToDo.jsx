import {useEffect, useState} from 'react'
import ToDoList from "./ToDoList.jsx";
import {loadFromLocalStorage, saveToLocalStorage} from "../script/loadNsave.js";

function ToDo() {

    const [inputValue, setInputValue] = useState('')
    const [listItems, setListItem] = useState(loadFromLocalStorage('listItems'))
        useEffect(() => {
            saveToLocalStorage('listItems', listItems)
        }, [listItems]);

    const handleSubmit = (event) => {
        console.log(listItems)
        event.preventDefault();
            if (inputValue.trim() !== '') {
                const listItem = {
                    id: Date.now(),
                    isDone: false,
                    isVisible: true,
                    content: inputValue
                }
                setListItem([...listItems, listItem])
                setInputValue('')
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
                value={inputValue}
                onChange={ (event) => setInputValue(event.target.value) }
            />

            <button type="submit">GO</button>
            </form>

                <ToDoList listItems={listItems} setListItem={setListItem} />
        </>
    )
}

export default ToDo
