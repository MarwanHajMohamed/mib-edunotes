import React, { useState } from "react";
import "../../css/postcards.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Postcards({ title, date, content, likes, dislikes }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
    likes += 1;
  };

  const [isDisliked, setIsDisliked] = useState(false);
  const handleDislike = () => {
    setIsDisliked(!isDisliked);
  };

  const [comments, setComments] = useState([]);

  //   <CommentSection
  //   comments={comments}
  //   onSubmit={NewComment}
  //   name="Comments"
  // />

  // //added by Inayah
  // const [comments, setComments] = useState([]); // create state for comments array

  // // handle adding new comments to the comments array
  // const NewComment = () => {
  //   // Get the text entered by the user
  //   const comment = document.getElementById("CommentsID").value;

  //   // Create a new comment element with the text
  //   const newComment = <p>{comment}</p>;

  //   // Add the new comment to the comments section
  //   setComments([...comments, newComment]);

  //   // Clear the textarea
  //   document.getElementById("CommentsID").value = "";
  // };

  // handle adding new comments to the comments array
  const addComment = () => {
    setComments([...comments, document.getElementById("CommentsID").value]);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose} className="modal">
        <Box className="modal-box">
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="topic-title modalTitle">{title}</div>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
            {/* comment box and thread added by Inayah */}
            <div className="comment-box">
              <textarea
                className="comment-box-textarea"
                id="CommentsID"
              ></textarea>
              <button onClick={() => addComment()}>Submit</button>
            </div>
            <div className="comment-thread">
              {comments.map((comment) => {
                return <div>{comment}</div>;
              })}
            </div>
          </Typography>
        </Box>
      </Modal>
      <div className="postcard-wrapper">
        <div className="postcard-container" onClick={handleOpen}>
          <div className="left-side">
            <div className="post-title">{title}</div>
          </div>
        </div>
        <div className="right-side">
          <div className="like-container">
            <i
              class={
                isLiked ? "fa-solid fa-thumbs-up" : "fa-regular fa-thumbs-up"
              }
              onClick={handleLike}
            ></i>
            <div className="like-counter">{likes}</div>
          </div>
          <div className="dislike-container">
            <i
              class={
                isDisliked
                  ? "fa-solid fa-thumbs-down"
                  : "fa-regular fa-thumbs-down"
              }
              onClick={handleDislike}
            ></i>
            <div className="dislike-counter">{dislikes}</div>
          </div>
          <div className="post-date">{date}</div>

          {/* comment box and thread added by Inayah */}
          {/* <CommentSection
          comments={comments}
          onSubmit={handleNewComment} // pass the handleNewComment function as a prop
          name="Comments"
        />  */}
        </div>
      </div>
    </>
  );
}
