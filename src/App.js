import React, { Component } from 'react'

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      name: "ankit",
      age: 21
    }
  }

  componentDidMount() {
    console.warn("did mount");
  }

  componentDidUpdate() {
    alert("name update")
    console.warn("did update");
  }

  upI = () => {
    this.setState({name : "ankit upadhyay"});
  }

  render() {

    console.warn("rander");

    return (
      <div>
        <h2> {this.state.name} </h2>
        <h2> {this.state.age} </h2>
        <button onClick={this.upI}> update </button>
      </div>
    )
  }
}
