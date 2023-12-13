import { MdDeleteForever } from "react-icons/md";
import "./Note.css";

function Note({ id, text, date }) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note_footer">
        <small>{date}</small>
        <MdDeleteForever className="note_delete_icon" />
      </div>
    </div>
  );
}

export default Note;
