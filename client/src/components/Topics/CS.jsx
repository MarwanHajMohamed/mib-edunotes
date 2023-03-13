import React, { useState, useEffect } from "react";
import Topic from "../Common Components/Topic";
import axios from "axios";
import Loading from "../Common Components/Loading";

export default function CS() {
  const [notes, setNotes] = useState([]); //Array of note objects (Getter = notes, Setter = setNotes())
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    document.title = "CS | EduNotes";

    const getNotesByTopic = () => {
      axios
        .get("/notes/topic/cs")
        .then((response) => {
          setNotes(response.data);
          // console.log(notes);
          setSpinner(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    notes.map((note) => {
      return console.log(note.userID);
    });
    getNotesByTopic();
  }, []);

  const loading = () => {
    if (spinner === true) {
      return <Loading />;
    }
  };

  return (
    <div className="notes-container">
      <Topic title="Computer Science" noteArray={notes} />
      {loading()}
    </div>
  );
}
