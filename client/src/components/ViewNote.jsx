import React from "react";
import "../css/displaynote.css";

export default function ViewNote({ note }) {
  return (
    <div className="note-review-container">
      <div className="note-box">{note.body}</div>
    </div>
  );
}
