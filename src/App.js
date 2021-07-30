import React, { Component } from "react";
import axios from "axios";
import './index.css'
//components
import Collection from "./Components/Collection/Collection";
import Header from "./Components/Header/Header";
import Add from './Components/Add/Add';
import Stats from "./Components/Stats/Stats";

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
    .catch((err) => console.log(err))
  }

  updateAddPuzzle(puzzles) {
    this.setState({ puzzles })
  }

  destroy(id) {
    axios.delete(`/api/puzzles/${id}`)
    .then(({ data }) => this.setState({ puzzles: data }))
    .catch((err) => console.log(err))
  }

  searchPuzzles(input) {
    const { puzzles } = this.state;

    const filteredPuzzles = puzzles.filter((puzzle) => {
      let inputCase = (input.toLowerCase())
      let shape = puzzle.shape.toLowerCase().includes(inputCase)
      let difficulty = puzzle.difficulty.toLowerCase().includes(inputCase)
      let solved = puzzle.solved.toLowerCase().includes(inputCase)
      
      return shape || difficulty || solved
    });

    this.setState({ puzzles: filteredPuzzles })
  }

  reset(){
    axios.get('/api/puzzles')
    .then(({ data }) => this.setState({ puzzles: data }))
    .catch((err) => console.log(err))
  }

  render() {
    const { puzzles } = this.state;
    return (
      <div>
        <Header reset={this.reset} searchPuzzles={this.searchPuzzles} />
        <body>
          <section className="app">
            <Collection 
              data={puzzles} 
              destroy={this.destroy} 
              updateEdit={this.updateAddPuzzle}
            /> 
            <div className='side-bar'>
              <Add updateAddPuzzle={this.updateAddPuzzle} />
              <Stats data={puzzles} />
            </div>
          </section>
        </body>
      </div>
    )
  };
}
