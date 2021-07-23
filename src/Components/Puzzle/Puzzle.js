import React, { Component } from 'react';
import axios from 'axios';

export default class Puzzle extends Component {
   constructor(props){
      super(props);

      this.state = {
         difficulty: '',
         solved: false,
      }

      this.editPuzzleValue = this.editPuzzleValue.bind(this);
      this.handleDifficulty = this.handleDifficulty.bind(this);
      this.handleSolved = this.handleSolved.bind(this);
   }
   
   editPuzzleValue(id){
      const { difficulty, solved } = this.state;
      const editedPuzzle = {
         difficulty,
         solved,
      }

      axios.put(`/api/puzzles/${id}`, editedPuzzle)
      .then((res) => this.props.updateEdit(res.data))
      // .then((res) => console.log(res.data))
      .catch((err) => console.log(err.code))
   }

   handleDifficulty(e){
      this.setState({ difficulty: e.target.value })
   }

   handleSolved(e){
      this.setState({ solved: e.target.value })
   }

   render(){
      const { data, destroy } = this.props;
      const mappedPuzzles = data.map((puzzle) => {
         return(
            <div className="puzzle">
               <img className="puzzle-img" src={puzzle.img} alt='Puzzle' />
               <h3 className="puzzle-text"> Shape: {puzzle.shape} Difficulty: {puzzle.difficulty}</h3>
               <input placeholder="Edit Difficulty" onChange={this.handleDifficulty} />
               <input placeholder="Solved/Unsolved" onChange={this.handleSolved} />
               <div className="buttons">
                  <button onClick={() => this.editPuzzleValue(puzzle.id)}> Edit </button> 
                  <button onClick={() => destroy(puzzle.id)}> Destroy </button>
               </div>
            </div>
         )
      });

      return(
         <div className='puzzleDisplay'> {mappedPuzzles} </div>
      )
   }
}