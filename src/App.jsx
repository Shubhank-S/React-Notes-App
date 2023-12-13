import NoteList from "./components/NoteList/NoteList";
import useNoteContext from "./hooks/useNoteContext";
import "./App.css";

function App() {
  const [notes, setNotes] = useNoteContext();
  // console.log(notes);
  return (
    <div className="container">
      <NoteList />
    </div>
  );
}

export default App;
