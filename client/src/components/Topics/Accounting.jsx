import React, { useState, useEffect } from "react";
import Topic from "../Common Components/Topic";
import axios from "axios";
import Loading from "../Common Components/Loading";

export default function Accounting() {
  const [notes, setNotes] = useState([]); //Array of note objects (Getter = notes, Setter = setNotes())
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    document.title = "Accounting | EduNotes";

    const getNotesByTopic = () => {
      axios
        .get("/notes/topic/Accounting")
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
      <Topic title="Accounting" noteArray={notes} />
      {loading()}
    </div>
  );
}
