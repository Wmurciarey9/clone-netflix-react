import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genra" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <div className="img-wrapper">
        <img
          src="https://deadline.com/wp-content/uploads/2022/09/Screen-Shot-2022-09-09-at-5.50.09-PM.png"
          alt=""
        />
        <div className="trailer-vignette vignette-layer"></div>
        <div className="list-vignette vignette-layer"></div>
      </div>
      <div className="info">
        <img src="https://lumiere-a.akamaihd.net/v1/images/image_059173ed.png" alt="" />
        <h2>Watch The New Disney Movie Now</h2>
        <span className="description">
          The Clades are a legendary family of explorers whose differences threaten to topple their
          latest and most crucial mission into uncharted and treacherous territory.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon className="icon" />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon className="icon" />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
