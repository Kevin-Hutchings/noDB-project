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
    this.searchPuzzles = this.searchPuzzles.bind(this);
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

  searchPuzzles(input){
    const { puzzles } = this.state;

    const filteredPuzzles = puzzles.filter((puzzle) => {
      return puzzle.shape.toLowerCase().includes(input.toLowerCase()) || puzzle.difficulty.toLowerCase().includes(input.toLowerCase())
    });
    this.setState({ puzzles: filteredPuzzles })
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
        <Header reset={this.reset} searchPuzzles={this.searchPuzzles} />
        <section className="app">
          <Collection data={ puzzles } destroy={this.destroy} updateEdit={this.updateAddPuzzle} /> 
          <Add updateAddPuzzle={this.updateAddPuzzle} />
        </section>
      </div>
    )
  };
}
