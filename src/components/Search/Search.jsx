import { useState } from "react";
import useNoteContext from "../../hooks/useNoteContext";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

function Search() {
  const { notes, setNotes, searchText, setSearchText } = useNoteContext();
  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };
  console.log(searchText);
  return (
    <div className="search_container">
      <FaSearch className="search_icon" />
      <input
        type="text"
        className="search"
        placeholder="Search the note here...."
        value={searchText}
        onChange={handleSearchInput}
      />
    </div>
  );
}

export default Search;
