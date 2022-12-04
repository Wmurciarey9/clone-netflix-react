import "./list.scss";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";

const List = ({ list }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  //   const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef();

  const handleClick = (direction) => {
    // setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${330 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 6) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-330 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <div className="wrapper">
        <span className="listTitle">Popular on Netflix</span>
        <ArrowBackIosOutlinedIcon
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: slideNumber <= 0 && "none" }}
          //   style ={{display: !isMoved && "none"}} this is the way the tutorial shows but I still see the arrow when it goes back to zero.
        />
        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>

        <ArrowForwardIosOutlinedIcon
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
