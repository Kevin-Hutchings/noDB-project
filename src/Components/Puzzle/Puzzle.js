import React, { Component } from 'react';
import axios from 'axios';

export default class Puzzle extends Component {
   constructor(props){
      super(props);

      this.state = {
         userInput: {},
      }
   }

   render(){
      const { data, destroy } = this.props;
      const mappedPuzzles = data.map((puzzle) => {
         return(
            <div className="puzzle">
               <img className="puzzle-img" src={puzzle.img} alt='Puzzle' />
               <h3 className="puzzle-text"> Shape: {puzzle.shape} Difficulty: {puzzle.difficulty}</h3>
               <input placeholder="Edit Difficulty" /><input placeholder="Solved/Unsolved" />
               <div className="buttons">
                  <button> Edit </button> 
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