import React from 'react';
import Search from '../Search/Search';
import './Header.css'

export default function Header({reset, searchPuzzles}) {
   return (
      <header className="header">
         <h1> Puzzle Collection </h1>
         <h3> Reminder - Solved value is either true or false </h3>
         <Search searchPuzzles={searchPuzzles} reset={reset}/>
      </header>
   );
}