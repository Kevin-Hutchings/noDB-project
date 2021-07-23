import React from 'react';
import './Header.css'

export default function Header({reset}) {
   return (
      <div className="header">
         <h1> Puzzle Collection </h1>
         <button className="reset-button" onClick={() => reset()}> Reset </button>
      </div>
   );
}