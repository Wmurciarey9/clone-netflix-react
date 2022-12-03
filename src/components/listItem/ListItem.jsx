import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  // const [movie, setMovie] = useState({});

  // useEffect(() => {
  //   const getMovie = async () => {
  //     try {
  //       const res = await axios.get("/movies/find/" + item, {
  //         headers: {
  //           token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
  //         },
  //       });
  //       setMovie(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getMovie();
  // }, [item]);

  return (
    <>
      <Link to={{ pathname: "/watch" }}>
        {/* <Link to={{ pathname: "/watch", movie: movie }}> */}
        <div
          className="listItem"
          style={{ left: isHovered && index * 350 - 50 + index * 2.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src="https://amc-theatres-res.cloudinary.com/v1664460288/amc-cdn/production/2/movies/62300/62331/MovieStillDynamic/143720.jpg"
            alt=""
          />
          {isHovered && (
            <>
              <video
                src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
                autoPlay={true}
                loop
              />
              <div className="itemInfo">
                <div className="icons">
                  <PlayArrowIcon className="icon" />
                  <AddIcon className="icon" />
                  <ThumbUpOffAltIcon className="icon" />
                  <ThumbDownOffAltIcon className="icon" />
                </div>
                <div className="itemInfoTop">
                  <span>"2h 1m"</span>
                  <span className="limit">+14</span>
                  <span>2022</span>
                </div>
                <div className="desc">
                  In ancient Kahndaq, Teth Adam was bestowed the almighty powers of the gods. After
                  using these powers for vengeance, he was imprisoned, becoming Black Adam. Nearly
                  5,000 years have passed, and Black Adam has gone from man to myth to legend.{" "}
                </div>
                <div className="genre">Action</div>
              </div>
            </>
          )}
        </div>
      </Link>
    </>
  );
}
