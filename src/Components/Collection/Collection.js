import React from 'react';
import Puzzle from '../Puzzle/Puzzle.js'

export default function Collection ({ data }){
   return (
      <div>
         <Puzzle data={ data }  />
      </div>
   );
}