import { useContext, useState } from "react";
import NoteList from "./components/NoteList/NoteList";
import { NoteContext } from "./context/NoteContext";
import "./App.css";

function App() {
  const [notes, setNotes] = useContext(NoteContext);
  console.log(notes);
  return (
    <div className="container">
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
