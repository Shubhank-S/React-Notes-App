import { useState } from "react";
import NoteList from "./components/NoteList/NoteList";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <div className="container">
      <NoteList />
    </div>
  );
}

export default App;
