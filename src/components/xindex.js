import React, { Component } from "react";

import OpenButton from "./openButton";

import Modal from "./openButton/Modal/modal";
import LearnMore from "./openButton/LearnMore/learnMore";

class App extends Component {
  state = {
    learning: false,
  };

  learningHandler = () => {
    this.setState({ learning: true });
  };

  learningCancelHandler = () => {
    this.setState({ learning: false });
  };
  render() {
    return (
      <div>
        <Modal
          show={this.state.learning}
          modalClose={this.learningCancelHandler}
        >
          <LearnMore clicked={this.learningCancelHandler} />
        </Modal>
        <OpenButton clicked={this.learningHandler} />
      </div>
    );
  }
}

export default App;
