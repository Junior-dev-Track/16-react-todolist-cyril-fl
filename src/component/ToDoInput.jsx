import { useState } from "react";
// import * as events from "node:events";

const ToDoInput = ({ listItem, listItems, setListItem }) => {
    const [inputValue, setInputValue] = useState(listItem.content);

    const toggleVisibility = () => {
        setListItem(prevItems => {
            return prevItems.map(item => {
                if (item.id === listItem.id) {
                    return { ...item, isVisible: !item.isVisible };
                }
                return { ...item, isVisible: true };
            });
        });
    };

    const handleChange = (event) => {
        // console.log(event.target.value)
        setInputValue(event.target.value); // Met à jour la valeur de l'input avec la nouvelle valeur
    }

    const handleSubmit = (event, itemId) => {
        event.preventDefault();

        const updatedItem = listItems.map((item) => {
            if (item.id === listItem.id) {
                return {
                    ...item,
                    content: inputValue // Mettre à jour le contenu avec la nouvelle valeur de l'input
                };
            }
            return item;
        });
        setListItem(updatedItem);

        toggleVisibility()
    }

    return (
        <>
            <form
                onSubmit={(event) => handleSubmit(event, listItem.id)}
            >
                <label
                    onClick={toggleVisibility}
                    className={listItem.isVisible ? '' : 'none'}
                >
                    {inputValue}
                </label>
                <input
                    defaultValue={inputValue}
                    onChange={handleChange}
                    className={`listItemInput ${!listItem.isVisible ? '' : 'none'}`}
                />
            </form>
        </>
    );
};

export default ToDoInput;
