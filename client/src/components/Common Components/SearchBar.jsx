import React from "react";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div>
      <div className="search-container topics">
        <input
          autoComplete="off"
          type="text"
          className="search-input"
          placeholder="Search notes..."
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="searchIcon">
          <i className="fa-solid fa-search"></i>
        </button>
      </div>
    </div>
  );
}
