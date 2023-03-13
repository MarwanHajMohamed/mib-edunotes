import React, { useState, useEffect } from "react";
import Topic from "../Common Components/Topic";
import axios from "axios";
import Loading from "../Common Components/Loading";

export default function Maths() {
  const [notes, setNotes] = useState([]); //Array of note objects (Getter = notes, Setter = setNotes())
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    document.title = "Maths | EduNotes";

    const getNotesByTopic = () => {
      axios
        .get("/notes/topic/Maths")
        .then((response) => {
          setNotes(response.data);
          setSpinner(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getNotesByTopic();
  }, []);

  const loading = () => {
    if (spinner === true) {
      return <Loading />;
    }
  };

  return (
    <div className="notes-container">
      <Topic title="Maths" noteArray={notes} />
      {loading()}
    </div>
  );
}
