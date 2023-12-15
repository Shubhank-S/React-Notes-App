import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import NoteList from "./components/NoteList/NoteList";
import useNoteContext from "./hooks/useNoteContext";
import "./App.css";

function App() {
  const { darkMode } = useNoteContext();
  return (
    <div className={`${darkMode && "darkmode"}`}>
      <div className="container">
        <Header />
        <Search />
        <NoteList />
      </div>
    </div>
  );
}

export default App;
