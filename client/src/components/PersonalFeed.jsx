import React, { useState } from "react";
import "../css/personalfeed.css";
import data from "../temp-data.json";

export default function PersonalFeed() {
  const [notes, setNotes] = useState(data);

  return (
    <div>
      {notes.map((note) => (
        <table className="tableRed">
          <tbody>
            <tr className="row1">
              <td id="colUser">{note.user}</td>
              <td id="colSubject">{note.subject}</td>
              <td id="colTopic">{note.topic}</td>
              <td id="colThumbsUP">
                <input type="button" id="thumbs-up" name="thumbs-up" />{" "}
              </td>
              <td id="colLikes">{note.likes}</td>
              <td id="colThumbsDown">
                <input type="button" id="thumbs-down" name="thumbs-down" />{" "}
              </td>
            </tr>

            {/* <table className="tableRed">
        <tbody>
        {contacts.map((contact)=>(
                    <tr className='row1'>
                        <td>{contact.user}</td>
                        <td>{contact.subject}</td>
                        <td>{contact.topic}</td>
                        <td><input type="button" id="thumbs-up" name="thumbs-up"/> </td>
                        <td>{contact.likes}</td>
                        <td><input type="button" id="thumbs-down" name="thumbs-down"/> </td>
                    </tr>

                    ))} */}

            {/* <tr class="row1">
            <td>NoteKing</td>
            <td>How to create tables in HTML?</td>
            <td>Computing</td>
            <td><input type="button" id="thumbs-up" name="thumbs-up"/> </td>
            <td>09</td>
            <td><input type="button" id="thumbs-down" name="thumbs-down"/> </td>
          </tr> */}
          </tbody>
        </table>
      ))}
    </div>
  );
}
