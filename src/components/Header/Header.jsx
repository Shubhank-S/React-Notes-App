import React from "react";
import useNoteContext from "../../hooks/useNoteContext";
import "./Header.css";

function Header() {
  const { darkMode, setDarkMode } = useNoteContext();
  console.log(darkMode);
  return (
    <>
      <div className="header">
        <h1>Notes</h1>
        <button onClick={() => setDarkMode((darkMode) => !darkMode)}>
          Toggle Mode
        </button>
      </div>
    </>
  );
}

export default Header;
