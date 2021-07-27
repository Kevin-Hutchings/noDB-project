import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './Add.css'

export default class Add extends Component {
   constructor(props) {
      super(props);

      this.state = {
         img: '',
         shape: '',
         difficulty: '',
         userInput: ''
      }

      this.handleImgInput = this.handleImgInput.bind(this);
      this.handleShapeInput = this.handleShapeInput.bind(this);
      this.handleDifficultyInput = this.handleDifficultyInput.bind(this);
      this.addNewPuzzle = this.addNewPuzzle.bind(this);
   }

   handleImgInput(e) {
      this.setState({img: e.target.value})
   }

   handleShapeInput(e) {
      this.setState({shape: e.target.value})
   }

   handleDifficultyInput(e) {
      this.setState({difficulty: e.target.value})
   }

   addNewPuzzle(e) {
      e.preventDefault();
      const { img, shape, difficulty } = this.state;
      const newPuzzle = { 
         id: uuidv4(),
         img,
         shape,
         difficulty,
         solved: 'false',
      }
      
      axios.post('/api/puzzles', newPuzzle)
      // .then((res) => console.log(res.data))
      .then((res) => this.props.updateAddPuzzle(res.data))
      .catch((err) => console.log(err.code))

      this.setState({
         img: '',
         shape: '',
         difficulty: '',
      });
   }

   render() {
      const { img, shape, difficulty } = this.state;

      return(
         <form className="add-component">
            <h2> Add Puzzle </h2>
            <input placeholder="Image URL" onChange={this.handleImgInput} value={img} />
            <input placeholder="Shape" onChange={this.handleShapeInput} value={shape} />
            <input placeholder="Difficulty" onChange={this.handleDifficultyInput} value={difficulty} />
            <button className="button" onClick={this.addNewPuzzle}> Add </button>
         </form>
      )
   }
}