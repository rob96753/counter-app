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
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 1 },
      { id: 5, value: 5 },
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
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    if (counters[index].value > 0) {
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
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
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
