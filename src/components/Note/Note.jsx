import { MdDeleteForever } from "react-icons/md";
import "./Note.css";

function Note() {
  return (
    <div className="note">
      <span>Heelo this is a note</span>
      <div className="note_footer">
        <small>13/12/2023</small>
        <MdDeleteForever className="note_delete_icon" />
      </div>
    </div>
  );
}

export default Note;
