import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <FontAwesomeIcon
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="ml-4 mt-2"
          icon={faPlus}
        />
        <FontAwesomeIcon
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="ml-4 mt-2"
          icon={faMinus}
        />
        <FontAwesomeIcon
          className="ml-4 mt-2"
          icon={faTrash}
          onClick={() => this.props.onDelete(this.props.counter.id)}
        />
      </div>
    );
  }

  formatCount = () => {
    console.log(this.props.counter);
    const { value } = this.props.counter;
    return value ? value : "Zero";
  };
}

export default Counter;
