import React from 'react';
import { useNotesStore } from './context';

export const NewNoteForm = () => {
    const [noteText, setNoteText] = React.useState('')
    const noteStore = useNotesStore()

    return <>
    <input vallue={noteText} onChange={(e)=>{
        setNoteText(e.target.value)
    }} type="text"/>

    <button onClick={()=>{
        noteStore.addNote(noteText)
    }}>add note</button>
    </>

}