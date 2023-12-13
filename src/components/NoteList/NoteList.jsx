import Note from "../Note/Note";
import "./NoteList.css";

function NoteList({ notes }) {
  return (
    <div className="note_container">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
    </div>
  );
}

export default NoteList;
