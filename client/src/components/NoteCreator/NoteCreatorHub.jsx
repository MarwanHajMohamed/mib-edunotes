import React, { useEffect } from "react";
import "../../css/Note Creator/noteCreatorHub.css";
import { useState } from "react";
import uuid from "react-uuid";
import axios from "axios";
import NoteCreatorEditor from "./NoteCreatorEditor";
import NoteCreatorSidebar from "./NoteCreatorSidebar";
import { useNavigate } from "react-router-dom";

const NoteCreatorHub = () => {
  const [notes, setNotes] = useState([]); //Array of note objects (Getter = notes, Setter = setNotes())
  const [activeNote, setActiveNote] = useState(false); //Stores the current active note - false meaning no active note (Getter = activeNote, Setter = setActiveNotes())
  const [activeUser, setActiveUser] = useState(null);
  const emailData = localStorage.getItem("emailData");

  let navigate = useNavigate();

  const router = (route) => {
    let path = "/" + route;
    navigate(path);
  };

  const checkForLogin = () => {
    axios
      .get(`user/findByEmail?email=${emailData}`)
      .then((response) => {
        setActiveUser(response.data.userID);
        loadNotes(response.data.userID);
      })
      .catch(() => {
        return router("login");
      });
  };

  //Loads all the notes from a certain user that matches the userID passed in
  const loadNotes = (userID) => {
    axios
      .get(`/notes/user/${userID}`)
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        //console.log(error);
      });
  };

  //Arrow function to find the active note
  const getActiveNote = () => {
    return notes.find((note) => note.noteIDCustom === activeNote);
  };

  //Arrow function to add notes to the notes array aswell as the notes table in the database.
  const onAddNote = () => {
    const newNote = {
      noteIDCustom: uuid(),
      userID: activeUser,
      title: "Untitled Note",
      body: "",
      topic: "General",
      changed: Date.now(),
      likes: 0,
      dislikes: 0,
    };

    axios
      .post("/note", {
        noteIDCustom: newNote.noteIDCustom,
        userID: newNote.userID,
        title: newNote.title,
        body: newNote.body,
        topic: newNote.topic,
        changed: newNote.changed,
        likes: newNote.likes,
        dislikes: newNote.dislikes,
      })
      .then((response) => {
        //console.log(response);
      })
      .catch((error) => {
        //console.log(error);
      });

    setNotes([newNote, ...notes]); //Adding the new note alongside the existing notes. The ... means that we will take everything in the existing notes array and put it into this new array
  };

  //Function used to delete the note with the noteIDCustom from the database which gets passed in as a parameter
  const deleteNoteByIDCustom = (noteIDCustom) => {
    axios
      .delete(`/note/deleteByNoteIDCustom/${noteIDCustom}`)
      .then((response) => {
        //console.log(response.data);
      })
      .catch((error) => {
        //console.log(error);
      });
  };

  //Arrow function to delete notes from the notes array and the notes table in the database
  const onDeleteNote = (deletednoteIDCustom) => {
    deleteNoteByIDCustom(deletednoteIDCustom);
    setNotes(notes.filter((note) => note.noteIDCustom !== deletednoteIDCustom)); //Will print false if the current iteration's ID matches with the deleted note id and then remove it from the note array
  };

  //Function used to update a note with the noteIDCustom passed in with the updated values
  const updateNoteDB = (noteIDCustom, note) => {
    axios
      .put(`/note/updateByNoteIDCustom/${noteIDCustom}`, note)
      .then((response) => {
        //console.log(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  //Function to update the note in the notes array and use the updateNoteDB function to update the title,body and topic in the notes table for the database
  const onUpdateNote = (updateNote) => {
    const updateNotesArray = notes.map((note) => {
      if (note.noteIDCustom === activeNote) {
        updateNoteDB(updateNote.noteIDCustom, {
          title: updateNote.title,
          body: updateNote.body,
          topic: updateNote.topic,
        });
        return updateNote;
      }

      return note;
    });

    setNotes(updateNotesArray);
  };

  //Use effect that runs once when the page is loaded which sets the title of the page and loads the notes currently hardcodded to userID = 1
  useEffect(() => {
    //const startTime = performance.now();

    checkForLogin();
    document.title = "Note Creator | EduNotes";

    //const endTime = performance.now();
    //const loadTime = endTime - startTime;
    //console.log(`Page load time: ${loadTime} milliseconds`);
  }, [activeUser]);

  return (
    <div className="NoteCreatorHub">
      {/*Passing in props from this component to the others that require certain states or functions - May use a state manager*/}
      <div style={{ display: "flex" }}>
        <NoteCreatorSidebar
          prop_Notes={notes}
          prop_OnAddNote={onAddNote}
          prop_OnDeleteNote={onDeleteNote}
          prop_ActiveNote={activeNote}
          prop_SetActiveNote={setActiveNote}
        />
        <NoteCreatorEditor
          prop_GetActiveNote={getActiveNote()}
          prop_OnUpdateNote={onUpdateNote}
        />
      </div>
    </div>
  );
};

export default NoteCreatorHub;
