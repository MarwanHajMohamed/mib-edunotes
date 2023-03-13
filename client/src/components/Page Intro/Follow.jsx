import React from "react";
import "../../css/PageIntro/follow.css";
import mac from "../../css/images/mac.png";

export default function Follow() {
  return (
    <div className="follow-container">
      <div className="follow-title">Follow Users</div>
      <div className="follow-description">
        See what your favourite peers have been posting by following them!
      </div>
      <img className="mac" src={mac} alt="" />
      <div className="follow-account-container">
        <div className="account">
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="note-container">
          <div className="note">
            <div className="note-left">
              <div className="note-title">Class Diagrams</div>
              <div className="note-author">John Doe</div>
            </div>
            <div className="note-right">
              <div className="thumbs-up">
                <i className="fa-solid fa-thumbs-up"></i>
                <div className="like-counter">30</div>
              </div>
              <div className="thumbs-down">
                <i className="fa-solid fa-thumbs-down"></i>
                <div className="dislike-counter">2</div>
              </div>
            </div>
          </div>
          <div className="note">
            <div className="note-left">
              <div className="note-title">Use Cases</div>
              <div className="note-author">John Doe</div>
            </div>
            <div className="note-right">
              <div className="thumbs-up">
                <i className="fa-solid fa-thumbs-up"></i>
                <div className="like-counter">22</div>
              </div>
              <div className="thumbs-down">
                <i className="fa-solid fa-thumbs-down"></i>
                <div className="dislike-counter">4</div>
              </div>
            </div>
          </div>
          <div className="note">
            <div className="note-left">
              <div className="note-title">Heuristic Search</div>
              <div className="note-author">John Doe</div>
            </div>
            <div className="note-right">
              <div className="thumbs-up">
                <i className="fa-solid fa-thumbs-up"></i>
                <div className="like-counter">15</div>
              </div>
              <div className="thumbs-down">
                <i className="fa-solid fa-thumbs-down"></i>
                <div className="dislike-counter">8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
