import React from 'react';
import Search from '../Search/Search';
import './Header.css'

export default function Header({reset, searchPuzzles}) {
   return (
      <header className="header">
         <h1> Puzzle Collection </h1>
         <Search searchPuzzles={searchPuzzles} reset={reset}/>
         <button className="reset-button" onClick={() => reset()}> Reset </button>
      </header>
   );
}