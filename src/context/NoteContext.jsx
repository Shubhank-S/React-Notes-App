import { nanoid } from "nanoid";
import { createContext, useState } from "react";

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First Note",
      date: "13/12/2023",
    },
    {
      id: nanoid(),
      text: "Second Note",
      date: "14/12/2023",
    },
    {
      id2: nanoid(),
      text: "Third Note",
      date: "15/12/2023",
    },
    {
      id: nanoid(),
      text: "Fourth Note",
      date: "16/12/2023",
    },
  ]);
  const [searchText, setSearchText] = useState();
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  return (
    <>
      <NoteContext.Provider
        value={{ notes, setNotes, addNote, searchText, setSearchText }}
      >
        {children}
      </NoteContext.Provider>
    </>
  );
};

export default NoteProvider;
