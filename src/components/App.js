import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <>
        <h1>
          <p data-ns-test="project-name">Business app</p>
        </h1>
        <p data-ns-test="project-description">For PujaPath</p>
      </>
    );
  }
}

export default App;
