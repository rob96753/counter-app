import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Liked = (props) => {
  const { counter, onLiked } = props;
  const { liked } = counter;
  const classes = liked ? "ml-4 mt-2 text-danger" : "ml-4 mt-2 text-muted";
  return (
    <FontAwesomeIcon
      className={classes}
      icon={faHeart}
      onClick={() => onLiked(counter)}
    />
  );
};

export default Liked;
