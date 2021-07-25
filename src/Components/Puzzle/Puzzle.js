import React, { Component } from 'react';
import axios from 'axios';

export default class Puzzle extends Component {
   constructor(props){
      super(props);

      this.state = {
         difficulty: '',
         solved: 'false',
      };

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

      this.setState({difficulty: ''})
   }

   handleDifficulty(e){
      this.setState({ difficulty: e.target.value });
   }

   handleSolved(e){
      this.setState({ solved: e.target.value });
   }

   render(){
      const { data, destroy } = this.props;
      const mappedPuzzles = data.map((puzzle) => {
         return(
            <div className={puzzle.solved.includes('true') ? 'puzzle-solved' : 'puzzle-unsolved'}>
               <img className="puzzle-img" src={puzzle.img} alt='Puzzle' />
               <section className="puzzle-text">
                  <h3> Shape: {puzzle.shape} </h3>
                  <h3> Difficulty: {puzzle.difficulty} </h3>
               </section>
               <section className="edit-puzzle">
                  <input className="input" placeholder="Edit Difficulty" onChange={this.handleDifficulty} />
                  <input className="input" placeholder="Solved? true or false" onChange={this.handleSolved} />
                  <button className="button" onClick={() => this.editPuzzleValue(puzzle.id)}> Edit </button> 
                  <button className="button" onClick={() => destroy(puzzle.id)}> Destroy </button>
               </section>
            </div>
         )
      });

      return(
         <div className='puzzleDisplay'> {mappedPuzzles} </div>
      )
   }
}