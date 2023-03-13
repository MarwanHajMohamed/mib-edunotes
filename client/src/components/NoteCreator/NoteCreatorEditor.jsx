import React, { useState, useEffect } from "react";
import { Editor } from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "../../css/Note Creator/noteCreatorEditor.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import axios from "axios";
import Typography from "@mui/material/Typography";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

//With props being an object we know props has one key on it therefore we can destructure it through naming the key creating a local variable
const NoteCreatorEditor = ({ prop_GetActiveNote, prop_OnUpdateNote }) => {
  //Getters and Setters that are a part of the 'preview note' button to see how the note will be viewed
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [wordCount, setWordCount] = useState(0); //Getter and setter for the word count
  const [noteTopics, setNoteTopics] = useState([]); //Getter and setter for the note topics

  //Function that loads the topics from the database
  const loadTopics = () => {
    axios
      .get(`/topic`)
      .then((response) => {
        setNoteTopics(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //(Not Implemented) Function that can add topics to the database
  const addTopicDB = (topicNameToAdd) => {
    axios
      .post("/topic", {
        topicName: topicNameToAdd,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //UseEffect which loads the topics from the database once every load
  useEffect(() => {
    loadTopics();
  }, []);

  //Used to update the note's attributes whenever it get's changed
  const onEditField = (key, value) => {
    prop_OnUpdateNote({
      ...prop_GetActiveNote,
      id: prop_GetActiveNote.noteIDCustom,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  //If there is no active note selected then this will be used as a placeholder
  if (!prop_GetActiveNote)
    return <div className="no-active-note">No selected note</div>;

  //Used to set the topic of the note
  const settingTopic = () => {
    var select = document.getElementById("topicList");
    var value = select.options[select.selectedIndex].value;
    onEditField("topic", value);
  };

  const handleDownloadPDF = async () => {
    // Get the CKEditor5 element
    const editor = document.querySelector(".ck-editor__editable");

    // Get the full height of the editor
    const fullHeight = editor.scrollHeight;

    // Set the height of the canvas element to match the full height of the editor
    const canvas = await html2canvas(editor, {
      height: fullHeight,
    });

    // Create a new PDF document
    const pdf = new jsPDF();

    // Add the screenshot as an image to the PDF
    pdf.addImage(
      canvas.toDataURL(),
      "PNG",
      0,
      0,
      pdf.internal.pageSize.width,
      (canvas.height * pdf.internal.pageSize.width) / canvas.width
    );

    // Save the PDF and open it in a new window
    pdf.save("editor-screenshot.pdf");
  };

  return (
    <>
      <Modal open={open} onClose={handleClose} className="modal">
        <Box className="modal-box">
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="topic-title modalTitle">
              {prop_GetActiveNote.title}
            </div>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: prop_GetActiveNote.body }}
            ></div>
          </Typography>
        </Box>
      </Modal>
      <div className="noteCreator-hero-container">
        <div className="noteCreator-main-note-editor-container">
          <input
            style={{ marginBottom: "10px", padding: "0px 5px" }}
            id="note-title"
            type="text"
            onChange={(event) => onEditField("title", event.target.value)}
            autoFocus
            value={prop_GetActiveNote.title}
          />

          <select
            id="topicList"
            onChange={() => settingTopic()}
            style={{ marginBottom: "10px" }}
          >
            <option value={"General"}>General</option>
            {noteTopics.map((topics) => (
              <option value={topics.topicName} key={topics.topicName}>
                {topics.topicName}
              </option>
            ))}
          </select>

          <label
            style={{ marginBottom: "10px", display: "inline-block" }}
            className="current-topic"
          >
            Current Topic: {prop_GetActiveNote.topic}
          </label>

          <label
            style={{
              marginBottom: "10px",
              display: "inline-block",
              marginRight: "10px",
            }}
          >
            Word Count: {wordCount}{" "}
          </label>

          {/*** 
            <div style={{display: 'inline-block', marginRight: "10px"}}>
              <button onClick={handleDownloadPDF}>PDF</button>
              <span className="beta-label" data-tooltip="Only Text">Beta</span>
            </div>
          ***/}

          <button onClick={handleOpen} className="preview-btn">
            Preview
          </button>

          <CKEditor
            editor={Editor}
            config={{
              removePlugins: ["MediaEmbedToolbar"],
              toolbar: [
                "heading",
                "|",
                "undo",
                "redo",
                "fontFamily",
                "fontSize",
                "bold",
                "italic",
                "link",
                "bulletedList",
                "numberedList",
                "|",
                "outdent",
                "indent",
                "|",
                "blockQuote",
                "insertTable",
                "mediaEmbed",
                "underline",
                "todoList",
                "strikethrough",
                "specialCharacters",
                "pageBreak",
                "highlight",
                "horizontalLine",
                "fontBackgroundColor",
                "fontColor",
                "code",
                "codeBlock",
                "alignment",
              ],
            }}
            data={prop_GetActiveNote.body}
            id={prop_GetActiveNote.noteIDCustom}
            onChange={(event, editor) => {
              onEditField("body", editor.getData());
              setWordCount(
                editor
                  .getData()
                  .replace(/(<([^>]+)>)/gi, "")
                  .trim()
                  .split(/\s+/).length
              );
            }}
          />
        </div>
      </div>
    </>
  );
};

export default NoteCreatorEditor;
