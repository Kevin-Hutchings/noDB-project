import React from 'react';
import './Stats.css'

export default function Stats ({ data }) {
   const filterSolved= data.filter((puzzle) => {
      return puzzle.solved.includes('true')
   });
   
   const filterUnsolved = data.filter((puzzle) => {
      return puzzle.solved.includes('false')
   });

   const totalPuzzles = data.length;
   const solvedPuzzles = filterSolved.length
   const unsolvedPuzzles = filterUnsolved.length;
   
   return(
      <div className='stats'>
         <h1> Puzzle Stats </h1>
         <ul>
            <h2> Solved: {solvedPuzzles} </h2>
            <h2> Un-Solved: {unsolvedPuzzles} </h2>
            <h2> Total: {totalPuzzles} </h2>
         </ul>
      </div>
   )
}
