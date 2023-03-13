import React, { useState, useEffect } from "react";
import Topic from "../Common Components/Topic";
import axios from "axios";
import Loading from "../Common Components/Loading";

export default function All() {
  const [notes, setNotes] = useState([]); //Array of note objects  (Getter = notes, Setter = setNotes())
  // const [authors, setAuthors] = useState([]);
  const [spinner, setSpinner] = useState(true);

  // const getAuthors = (Notes) => {
  //   Notes.map((note) => {
  //     return axios
  //       .get(`/user/${note.userID}`)
  //       .then((response) => {
  //         setAuthors(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   });
  // };

  useEffect(() => {
    document.title = "All | EduNotes";

    const getNotes = () => {
      axios
        .get("/note")
        .then((response) => {
          setNotes(response.data);
          // getAuthors(response.data);
          setSpinner(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getNotes();
  }, []);

  const loading = () => {
    if (spinner === true) {
      return <Loading />;
    }
  };

  return (
    <div className="notes-container">
      <Topic title="All Notes" noteArray={notes} />
      {/* {console.log(authors)} */}
      {loading()}
    </div>
  );
}
