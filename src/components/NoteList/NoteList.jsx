import Note from "../Note/Note";
import "./NoteList.css";

function NoteList() {
  return (
    <div className="note_container">
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
}

export default NoteList;
