import React from 'react';
import Search from '../Search/Search';
import './Header.css'

export default function Header({reset, searchPuzzles}) {
   return (
      <header className="header">
         <h1> Puzzle Collection </h1>
         <h3> Search by Shape, Difficulty, or Solved (true/false). </h3>
         <Search searchPuzzles={searchPuzzles} reset={reset}/>
      </header>
   );
}