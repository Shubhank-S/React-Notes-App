import Note from "../Note/Note";
import AddNote from "../AddNote/AddNote";
import useNoteContext from "../../hooks/useNoteContext";
import "./NoteList.css";

function NoteList() {
  const { notes, setNotes } = useNoteContext();
  // console.log(notes);
  return (
    <div className="note_container">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote />
    </div>
  );
}

export default NoteList;
