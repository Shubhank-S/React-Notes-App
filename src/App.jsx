import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import NoteList from "./components/NoteList/NoteList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Search />
      <NoteList />
    </div>
  );
}

export default App;
