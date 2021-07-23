import React from 'react';
import Puzzle from '../Puzzle/Puzzle.js'

export default function Collection ({ data, destroy, updateEdit }){
   return (
      <div>
         <Puzzle 
            data={ data }  
            destroy={ destroy }
            updateEdit={ updateEdit }
         />
      </div>
   );
}