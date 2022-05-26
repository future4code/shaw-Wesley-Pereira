import React from 'react'
import axios from 'axios'
import Styled from 'styled-components'

export default class Lista extends React.Component {
  state = {
    lista: [],
  }
  componentDidMount() {
    this.getLista()
  }

  getLista = () => {
    axios
      .get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wesley-shaw/matches',
      )
      .then((response) => {this.setState({ lista: response.data.matches })})
      .catch((error) => {
        console.log(error.response)
      })
  }

  render() {
    const personList = this.state.lista.map((person) => {
      return (
        <p key={person.id}>
          {person.name}
          <img src={person.photo} alt="foto" />
        </p>
      )
    })
    console.log(this.personList)

    return <div><p>{this.personList}</p>
    <p>Lista</p>
    </div>
  }
}
