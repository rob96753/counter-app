import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FortAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4, liked: false },
      { id: 2, value: 3, liked: false },
      { id: 3, value: 2, liked: false },
      { id: 4, value: 1, liked: false },
      { id: 5, value: 5, liked: false },
    ],
  };

  handleDelete = (counterId) => {
    const counters = [...this.state.counters];
    const newCounters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({
      counters: newCounters,
    });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    if (counters[index].value > 0) {
      counters[index].disabled = false;
    }
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    if (counters[index].value > 0) {
      counters[index] = { ...counter };
      counters[index].value--;

      this.setState({ counters });
    } else {
      counters[index].disabled = true;
    }
  };

  handleLiked = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].liked = !counters[index].liked;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onLiked={this.handleLiked}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
