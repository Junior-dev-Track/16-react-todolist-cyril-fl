import {useState} from "react";
import toggleTask from "../script/toggleTask.js";

const NotesList = ({ notes, setNotes}) => {


    return (
        <div className="notesCarouselOut">
            <ul className="notesCarouselIn">
                {notes.map((note) => (
                    <li key={note.id} className="noteThumbnails note">
                        <div className="noteThumbnailsContent">
                        {note.content}
                        </div>
                        <div className="noteThumbnailsCheckbox">
                            <input
                                id={`notes${note.id}`}
                                type="checkbox"
                                checked={note.isDone}
                                onChange={() => toggleTask(note.id, notes, setNotes)}
                            />
                            <label htmlFor={`notes${note.id}`}></label>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NotesList