import { MdDeleteForever } from "react-icons/md";
import useNoteContext from "../../hooks/useNoteContext";
import "./Note.css";

function Note({ id, text, date }) {
  const { notes, setNotes, addNote } = useNoteContext();

  const deleteNote = (id) => {
    const deleteNotes = notes.filter((note) => note.id !== id);
    setNotes(deleteNotes);
  };
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note_footer">
        <small>{date}</small>
        <MdDeleteForever
          className="note_delete_icon"
          onClick={() => deleteNote(id)}
        />
      </div>
    </div>
  );
}

export default Note;
