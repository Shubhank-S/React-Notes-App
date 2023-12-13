import  { useContext } from 'react'
import { NoteContext } from '../context/NoteContext';

function useNoteContext() {
  return useContext(NoteContext)
}

export default useNoteContext;