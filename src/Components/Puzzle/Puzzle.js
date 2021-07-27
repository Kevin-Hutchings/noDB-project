import React, { Component } from 'react';
import axios from 'axios';
import './Puzzle.css'

export default class Puzzle extends Component {
   constructor(props) {
      super(props);

      this.state = {
         difficulty: '',
         solved: '',
      };

      this.editPuzzleValue = this.editPuzzleValue.bind(this);
      this.handleDifficulty = this.handleDifficulty.bind(this);
      this.handleSolved = this.handleSolved.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }
   
   editPuzzleValue(id) {
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

   handleDifficulty(e) {
      this.setState({ difficulty: e.target.value });
   }
   
   handleSolved() {
      this.setState({ solved: 'true' });
   }
   
   handleSubmit(id) {
      this.editPuzzleValue(id);
      this.setState({
         difficulty: '',
         solved: ''
      });
   }

   render() {
      const { data, destroy } = this.props;

      const mappedPuzzles = data.map((puzzle, index) => {
         return(
            <div key={index} className={puzzle.solved === 'true' ? `${'puzzle'} + ${'solved'}` : 'puzzle'}>
               <img className="puzzle-img" src={puzzle.img} alt='Puzzle' />
               <section className="puzzle-text">
                  <h3> Shape: {puzzle.shape} </h3>
                  <h3> Difficulty: {puzzle.difficulty} </h3>
               </section>
               <section className="edit-puzzle">
                  <input
                     className="input" 
                     placeholder="Edit Difficulty"
                     value={this.state.difficulty}
                     onChange={this.handleDifficulty} />
                  <button className="button" onClick={() => this.handleSubmit(puzzle.id)}> Edit </button> 
                  <button className="button" onClick={this.handleSolved}> Solved! :D </button>
                  <button className="button" onClick={() => destroy(puzzle.id)}> Destroy? D: </button>
               </section>
            </div>
         )
      });

      return(
         <div className='puzzleDisplay'> {mappedPuzzles} </div>
      )
   }
}