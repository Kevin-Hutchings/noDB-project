import React, { Component } from 'react';

export default class Search extends Component {
   constructor(props){
      super(props);

      this.state = {
         userInput: ''
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleClear = this.handleClear.bind(this);
   }

   handleChange(e){
      this.setState({ userInput: e.target.value });
   }

   handleClick(){
      this.props.searchPuzzles(this.state.userInput);
   }

   handleClear(){
      this.setState({userInput: ''})
      this.props.reset();
   }

   render(){
      return(
         <section>
            <input 
               value={this.state.userInput}
               onChange={(e) => this.handleChange(e)}
               placeholder="Search"
            />
            <button onClick={this.handleClick}> Search </button>
            <button onClick={this.handleClear}> Clear </button>
         </section>
      )
   }
}