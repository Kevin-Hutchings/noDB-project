import React, { Component } from "react";
import axios from "axios";
import './index.css'
//components
import Collection from "./Components/Collection/Collection";
import Header from "./Components/Header/Header";
import Add from './Components/Add/Add';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      puzzles: [],
    };
  }

  componentDidMount() {
    axios.get('/api/puzzles')
    .then(({ data }) => this.setState({ puzzles: data.data }))
    // .then((res) => console.log(res.data.data))
    .catch((err) => console.log(err.code))
  }

  render() {
    const { puzzles } = this.state;
    return (
      <div>
        <Header />
        <section className="app">
          <Collection data={ puzzles } /> 
          <Add />
        </section>
      </div>
    )
  };
}
