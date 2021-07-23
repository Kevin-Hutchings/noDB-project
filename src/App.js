import React, { Component } from "react";
import axios from "axios";
import './index.css'
//components
import Collection from "./Components/Collection/Collection";
import Header from "./Components/Header/Header";
import Add from './Components/Add/Add';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      puzzles: [],
    };

    this.updateAddPuzzle = this.updateAddPuzzle.bind(this);
    this.destroy = this.destroy.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    axios.get('/api/puzzles')
    .then(({ data }) => this.setState({ puzzles: data }))
    .catch((err) => console.log(err.code))
  }

  updateAddPuzzle(puzzles){
    this.setState({ puzzles })
  }

  destroy(id){
    axios.delete(`/api/puzzles/${id}`)
    .then(({ data }) => this.setState({ puzzles: data }))
    .catch((err) => console.log(err.code))
  }

  reset(){
    axios.get('/api/puzzles')
    .then(({ data }) => this.setState({ puzzles: data }))
    .catch((err) => console.log(err.code))
  }

  render() {
    const { puzzles } = this.state;
    return (
      <div>
        <Header reset={this.reset} />
        <section className="app">
          <Collection data={ puzzles } destroy={this.destroy} updateEdit={this.updateAddPuzzle} /> 
          <Add updateAddPuzzle={this.updateAddPuzzle} />
        </section>
      </div>
    )
  };
}
