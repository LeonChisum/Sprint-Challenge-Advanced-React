import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    }

  }

  componentDidMount() {
    this.fetchPlayer();
  }

  fetchPlayer = () => {
   const res = fetch('http://localhost:5000/api/players')
          
   console.log(res)
  }

  render() {
    return (
      <div>
        <h1>hello world</h1>
      </div>
    )
  }
}
