import "../../css/Topic/topic.css";
import Sidebar from "../NavBar/Sidebar";
import SearchBar from "./SearchBar";
import Postcards from "./Postcards";
import { useState } from "react";

export default function Topic({ title, noteArray }) {
  const query = "";
  const [searchQuery, setSearchQuery] = useState(query || "");
  const [sortOption, setSortOption] = useState("likes");

  const sortOptions = [
    { label: "Likes", value: "likes" },
    {
      label: "Date Posted",
      value: "changed",
    },
  ];

  const handleOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  const filterPosts = (posts, query) => {
    if (!query) {
      return posts;
    }

    return posts.filter((post) => {
      const postName = post.title.toLowerCase();
      return postName.includes(query.toLowerCase());
    });
  };

  const filteredPosts = filterPosts(noteArray, searchQuery);

  const sort = () => {
    return filteredPosts.sort((a, b) =>
      a[sortOption] > b[sortOption] ? -1 : 1
    );
  };

  return (
    <>
      <Sidebar></Sidebar>
      <div className="topic-container">
        <div className="topic-sort">
          <div className="topic-left-side">
            <div className="topic-title">{title}</div>
            <div className="notes-counter">{filteredPosts.length} Notes</div>
          </div>
          <div className="topic-right-side">
            <div className="sort">
              Sort by
              <select
                onChange={handleOptionChange}
                value={sortOption}
                name="sort"
                id=""
              >
                {sortOptions.map((option) => {
                  return <option value={option.value}>{option.label}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="notes-wrapper">
          <div className="notes-inner-container">
            {sort().map((note, key) => {
              return (
                <Postcards
                  key={key}
                  userID={note.userID}
                  title={note.title}
                  author={note.author}
                  content={note.body}
                  date={new Date(note.changed).toLocaleDateString("en-GB")}
                  likes={note.likes}
                  dislikes={note.dislikes}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
