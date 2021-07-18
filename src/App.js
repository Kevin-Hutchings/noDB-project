import React, { Component } from "react";
import data from './data.js';
import Collection from "./Components/Collection/Collection";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      puzzles: data,
      collection: []
    };
  }

  render() {
    const { puzzles } = this.state;
    return (
      <div>
        <Collection data={puzzles} />
      </div>
    )
  };
}
