import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class Liked extends Component {
  render() {
    const { counter } = this.props;
    console.log("Counter: ", counter);
    /*const { liked } = this.props.counter;
    console.log("Liked: ", liked);*/
    return (
      <FontAwesomeIcon
        className="ml-4 mt-2"
        icon={faHeart}
        //onClick={() => onLiked(counter.id)}
      />
    );
  }
}

export default Liked;
