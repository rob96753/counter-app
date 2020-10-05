import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <div>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <FontAwesomeIcon
          onClick={() => onIncrement(counter)}
          className="ml-4 mt-2"
          icon={faPlus}
        />
        <FontAwesomeIcon
          onClick={() => onDecrement(counter)}
          className="ml-4 mt-2"
          icon={faMinus}
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
