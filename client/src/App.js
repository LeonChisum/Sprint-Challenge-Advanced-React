import React, { Component } from 'react'
import Axios from 'axios'
import PlayerCard from './components/PlayerCard';
import Selector from './components/Selector';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      order: 1,
    }

  }

  componentDidMount() {
    this.fetchPlayer();
  }

  fetchPlayer = () => {
    Axios.get('http://localhost:5000/api/players')
          .then(res => {
            console.log(res.data)
            this.setState({
              players: res.data
            })
          })
  }

  render() {
    return (
      <div>
        <Selector order={this.state.order} setOrder={(num) => this.setState({order: num})}/>
        {this.state.players.map(player => (
          <PlayerCard key={player.id}
                      players={player}
                      order={this.state.order} />
        ))}
      </div>
    )
  }
}
