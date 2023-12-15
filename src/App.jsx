import Search from "./components/Search/Search";
import NoteList from "./components/NoteList/NoteList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Search />
      <NoteList />
    </div>
  );
}

export default App;
