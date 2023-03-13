import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/profile.css";
import Postcards from "./Common Components/Postcards";

export default function YourNotes() {
  const [notes, setNotes] = useState([]);

  const displayNotes = () => {
    return notes.map((note, key) => {
      return (
        <Postcards
          key={key}
          userID={note.userID}
          title={note.title}
          author={note.author}
          content={note.body}
          date={new Date(note.changed).toLocaleDateString("en-GB")}
          likes={note.likes}
          dislikes={note.dislikes}
        />
      );
    });
  };

  useEffect(() => {
    const getNotesByID = () => {
      axios
        .get(`/notes/user/${localStorage.getItem("userID")}`)
        .then((response) => {
          console.log(response.data);
          setNotes(response.data);
        });
    };
    getNotesByID();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {displayNotes()}
    </div>
  );
}
