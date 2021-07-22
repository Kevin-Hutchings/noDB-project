import React, { Component } from 'react';
import axios from 'axios';

export default class Add extends Component {
   constructor(props){
      super(props);

      this.state = {
         img: '',
         shape: '',
         difficulty: '',
      }

      this.handleImgInput = this.handleImgInput.bind(this);
      this.handleShapeInput = this.handleShapeInput.bind(this);
      this.handleDifficultyInput = this.handleDifficultyInput.bind(this);
   }

   handleImgInput(e){
      this.setState({img: e.target.value})
   }

   handleShapeInput(e){
      this.setState({shape: e.target.value})
   }

   handleDifficultyInput(e){
      this.setState({difficulty: e.target.value})
   }
      
   
   addNewPuzzle = () => {
      let id = 7;
      const { img, shape, difficulty } = this.state;
      const newPuzzle = { 
         id,
         img,
         shape,
         difficulty
      }

      id++

      axios.post('/api/puzzles', newPuzzle)
      .then((res) => this.props.updatePuzzles(res.data))
      .catch((err) => console.log(err.code))
   }

   render(){
      return(
         <section className="add-component">
            <h1> Add Puzzle </h1>
            <input placeholder="Image URL" onChange={this.handleImgInput}></input>
            <input placeholder="Shape" onChange={this.handleShapeInput}></input>
            <input placeholder="Difficulty" onChange={this.handleDifficultyInput}></input>
            <button onClick={this.addNewPuzzle}> Add </button>
         </section>
      )
   }
}