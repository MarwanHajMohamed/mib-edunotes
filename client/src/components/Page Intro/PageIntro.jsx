import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../css/PageIntro/pageIntro.css";
import Card from "../Common Components/Card";
import Browse from "./Browse";
import Follow from "./Follow";
import axios from "axios";

import "../../css/Blobs/blob.css";

export default function PageIntro() {
  let navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [found, setFound] = useState(false);

  const loginPath = () => {
    let path = "/login";
    navigate(path);
  };

  const generalPath = () => {
    let path = "/general";
    navigate(path);
  };

  const searchItems = (e) => {
    e.preventDefault();
    axios.get("/topic").then((response) => {
      response.data.map((topic) => {
        if (
          search.toLowerCase() === topic.topicName.toLowerCase() ||
          search.toLowerCase() === "all"
        ) {
          setFound(true);
        }
      });
    });
    if (found === true) {
      navigate(search);
    } else console.log("Topic not found");
  };

  useEffect(() => {
    document.title = "Home | EduNotes";
  }, []);

  return (
    <>
      <div className="pageintro-container" id="home">
        <svg
          className="blob"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="var(--red)"
            d="M52.9,-64.8C65.3,-52.6,70,-32.9,73.9,-12.7C77.9,7.4,81,28,74,45.2C67,62.3,49.8,75.9,30.3,82.7C10.9,89.6,-10.8,89.5,-29,82C-47.2,74.4,-61.9,59.3,-69.7,42.1C-77.6,24.8,-78.5,5.4,-74.1,-12C-69.7,-29.3,-60,-44.6,-46.7,-56.7C-33.5,-68.8,-16.7,-77.8,1.7,-79.9C20.2,-81.9,40.4,-77.1,52.9,-64.8Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="blob2"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#106929"
            d="M56.2,-53.1C72.5,-40,85,-20,84.2,-0.8C83.4,18.5,69.4,36.9,53.2,49.9C36.9,62.9,18.5,70.4,-1.4,71.8C-21.3,73.2,-42.6,68.5,-49.5,55.5C-56.4,42.6,-49,21.3,-46.3,2.7C-43.6,-15.9,-45.6,-31.7,-38.7,-44.8C-31.7,-57.9,-15.9,-68.2,2.1,-70.3C20,-72.4,40,-66.2,56.2,-53.1Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="blob3"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#C1CC40"
            d="M57.4,-2.3C57.4,23.3,28.7,46.5,6.5,46.5C-15.7,46.5,-31.3,23.3,-31.3,-2.3C-31.3,-27.9,-15.7,-55.7,6.5,-55.7C28.7,-55.7,57.4,-27.9,57.4,-2.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <div className="title-container">
          <div className="title">EduNotes</div>
        </div>
        <form onSubmit={searchItems}>
          <div className="search-container">
            <input
              type="search"
              className="search-input"
              placeholder="Search topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="searchIcon">
              {/* <i className="fa-solid fa-search" onClick={searchItems}></i> */}
            </button>
          </div>
        </form>
        <div className="card-wrapper">
          <Card
            title="Create"
            description="Use our custom text editor to create notes, add diagrams, 
                        import pictures and much more. The only limit is your imagination!"
            path={loginPath}
          />
          <Card
            title="Upload"
            description="Be recognised globally by uploading useful and insightful notes. 
                        Earn likes for your hard work and redeem them in our store!"
          />
          <Card
            title="Browse"
            description="Boost your knowledge and experience by browsing how other students with 
                        similar topics tend to revise or write notes."
            path={generalPath}
          />
        </div>
      </div>

      <Browse />
      <Follow />
      {/* <Footer /> */}
    </>
  );
}
