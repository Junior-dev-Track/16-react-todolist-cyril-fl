import {useState} from "react";
import toggleTask from "../script/toggleTask.js";




const NotesList = ({ notes, setNotes}) => {


    return (
        <div className="blockNotesOut">
            <ul className="blockNotesIn">
                {notes.map((note) => (
                    <li key={note.id} className="noteThumbnails note">
                        <div className="noteThumbnailsContent">
                        {note.content}
                        </div>
                        <div className="crossCheckbox">
                            <input
                                id={`notes${note.id}`}
                                type="checkbox"
                                checked={note.isDone}
                                onChange={() => toggleTask(note.id, notes, setNotes)}
                            />
                            {/*<label htmlFor={`notes${note.id}`}></label>*/}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NotesList