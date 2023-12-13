import { createContext, useState } from "react";

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "First Note",
      date: "13/12/2023",
    },
    {
      id: 2,
      text: "Second Note",
      date: "14/12/2023",
    },
    {
      id2: 3,
      text: "Third Note",
      date: "15/12/2023",
    },
    {
      id: 4,
      text: "Fourth Note",
      date: "16/12/2023",
    },
  ]);
  return (
    <>
      <NoteContext.Provider value={[notes, setNotes]}>
        {children}
      </NoteContext.Provider>
    </>
  );
};

export default NoteProvider;
