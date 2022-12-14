import "./watch.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import { Link, useLocation } from "react-router-dom";
import { LinkToPages } from "../../components/linkToPages/LinkToPages";

export default function Watch() {
  //   const location = useLocation();
  //   const movie = location.movie;
  return (
    <div className="watch">
      <LinkToPages />
      <Link to="/">
        <div className="back">
          <ArrowBackOutlinedIcon />
          Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
      />
    </div>
  );
}
