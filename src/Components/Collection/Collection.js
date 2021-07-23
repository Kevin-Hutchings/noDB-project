import React from 'react';
import Puzzle from '../Puzzle/Puzzle.js'

export default function Collection ({ data, destroy }){
   return (
      <div>
         <Puzzle data={ data }  destroy={destroy}/>
      </div>
   );
}