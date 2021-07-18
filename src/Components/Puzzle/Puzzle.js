// import React, { Component } from 'react';

// export default class Puzzle extends Component {
//    constructor(props){
//       super(props);

//       this.state = {
//          userInput: {},
//       }
//    }

//    render(){
//       const mappedPuzzles = data.map((puzzle) => {
//          return(
//             <div>
//                <img src={puzzle.img} alt='Puzzle' />
//                <h3> {puzzle.shape} {puzzle.difficulty} </h3>
//             </div>
//          )
//       })
//       return(
//          <div> {mappedPuzzles} </div>
//       )
//    }
// }

import React from 'react';

export default function Puzzle ({data}){
   const mappedPuzzles = data.map((puzzle) => {
      return (
         <div>
            <img src={puzzle.img} alt='Puzzle' />
            <h3> Shape: {puzzle.shape} Difficulty: {puzzle.difficulty} </h3>
         </div>
      )
   });

   return (
      <div> {mappedPuzzles} </div>
   )
}