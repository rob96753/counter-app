import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faMinus,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    // template literals "`"
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {}

  render() {
    const { counter, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <div>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <FontAwesomeIcon
          onClick={() => onIncrement(counter)}
          className={counter.value > 0 ? "ml-4 mt-2" : "ml-1 mt-2"}
          icon={faPlus}
        />

        <FontAwesomeIcon
          onClick={() => onDecrement(counter)}
          className="ml-4 mt-2"
          icon={counter.value > 0 ? faMinus : faPlusSquare}
        />
        <FontAwesomeIcon
          className="ml-4 mt-2"
          icon={faTrash}
          onClick={() => onDelete(counter.id)}
        />
      </div>
    );
  }

  formatCount = () => {
    // argument destructuring
    const { value } = this.props.counter;
    return value ? value : "Zero";
  };
}

export default Counter;
