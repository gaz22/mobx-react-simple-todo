import './App.css';
import { NewNoteForm } from './NewNoteForm';
import { useNotesStore } from './context';
import { useObserver } from 'mobx-react';

function App() {

  const notesStore = useNotesStore()
  console.log("notesStore",notesStore)
  return useObserver(()=>(
    <>
       <ul>
        {notesStore.notes.map((note)=>{
          return(
            <li key={note.id}>{note.text}</li>
          )
        })}
       </ul>
       <NewNoteForm/>
    </>
  ));
}

export default App;
