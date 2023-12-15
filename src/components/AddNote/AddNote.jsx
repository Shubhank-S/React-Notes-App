import { useState } from "react";
import useNoteContext from "../../hooks/useNoteContext";
import "./AddNote.css";

function AddNote() {
  const [noteText, setNodeText] = useState("");
  const { notes, setNotes, addNote } = useNoteContext();
  const handleChange = (e) => {
    setNodeText(e.target.value);
    // console.log(noteText);
  };

  const handleSaveClick = () => {
    addNote(noteText);
  };
  return (
    <div className="addnote_container">
      <textarea
        rows="8"
        cols="10"
        placeholder="Please Enter Your note here...."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="addnote_footer">
        <small>200 Remaining</small>
        <button className="addnote_save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
