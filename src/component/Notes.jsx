import React from 'react';

const Notes = ({ addNote }) => {
    const handleSubmit = (event) => {
        event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
        const note = event.target.elements.note.value; // Récupère la valeur du champ de texte

        if (note.trim() === '') { // Vérifie si la note est vide
            alert('Veuillez entrer une note valide.'); // Affiche une alerte si la note est vide
            return; // Arrête la fonction si la note est vide
        } else {
            addNote(note); // Appelle la fonction addNote avec la note en tant qu'argument
            event.target.reset(); // Réinitialise le formulaire après la soumission

        }

    };

    return (
        <form className={"noteArea"} onSubmit={handleSubmit}>
            <textarea
                type="text"
                className="champText notefield"
                placeholder="Une note ?"
                id="note"
            ></textarea>
            <div className="noteButtonArea">
                <button className={'noteSendButton'} type="submit">GO</button>
            </div>
        </form>
    );
};

export default Notes;
