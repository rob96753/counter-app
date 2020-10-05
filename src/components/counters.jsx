import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // argument destructuring
    const {
      counters,
      onDelete,
      onIncrement,
      onDecrement,
      onLiked,
    } = this.props;
    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onLiked={onLiked}
            selected={true}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
