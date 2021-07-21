import React, { Component } from 'react';
import axios from 'axios';

export default class Add extends Component {
   constructor(props){
      super(props);

      this.state = {
         url: '',
         shape: '',
         difficulty: '',
      }

      this.handleurlInput = this.handleurlInput.bind(this);
      this.handleShapeInput = this.handleShapeInput.bind(this);
      this.handleDifficultyInput = this.handleDifficultyInput.bind(this);
   }

   handleurlInput(e){
      this.setState({url: e.target.value})
   }

   handleShapeInput(e){
      this.setState({shape: e.target.value})
   }

   handleDifficultyInput(e){
      this.setState({difficulty: e.target.value})
   }
      

   addNewPuzzle = () => {
      const { url, shape, difficulty } = this.state;
      const newPuzzle = { 
         url,
         shape,
         difficulty
      }
      axios.post('/api/puzzles', newPuzzle)
      .then((res) => this.props.addPuzzle(res.data))
      .catch((err) => console.log(err.code))
   }

   render(){
      return(
         <section className="add-component">
            <h1> Add Puzzle </h1>
            <input placeholder="Image URL" onChange={this.handleurlInput}></input>
            <input placeholder="Shape" onChange={this.handleShapeInput}></input>
            <input placeholder="Difficulty" onChange={this.handleDifficultyInput}></input>
            <button onClick={this.addNewPuzzle}> Add </button>
         </section>
      )
   }
}