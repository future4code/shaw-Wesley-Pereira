import React from 'react'
import axios from 'axios'

const headers = {
  headers: {
    Authorization: 'Wesley-Silva-Shaw',
  },
}

const baseUrl =
  'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const message = alert('Usuário cadastrado com sucesso!')

export default class App extends React.Component {
  state = {
    users: [],
    inputName: '',
    inputEmail: '',
  }
  componentDidMount() {
    this.getAllusers()
  }
  getAllusers = () => {
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

    axios
      .get(url, headers)
      .then((res) => {
        this.setState({
          users: res.data,
        })
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }
  postUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    }

    axios
      .post(`${baseUrl}`, body, headers)
      .then(() => {
        this.getAllUsers()
        this.setState({
          inputName: '',
          inputEmail: '',
        })
      })
      .catch((err) => {
        alert('Usuario cadastrado com sucesso!')
      })
  }
  onChangeName = (event) => {
    this.setState({
      inputName: event.target.value,
    })
  }
  onChangeEmail = (event) => {
    this.setState({
      inputEmail: event.target.value,
    })
  }
  removeUser = (userId) => {
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users' +
      userId
    axios.delete(url, headers).then(() => {
      this.getAllusers()
    })
  }
  render() {
    const componentsUsers = this.state.users.map((user) => {
      return <li key={user.id}>{user.name}</li>
    })
    return (
      <div>
        <label>
          Nome:
          <input
            placeholder="Nome"
            value={this.state.inputName}
            onChange={this.onChangeName}
          />
        </label>
        <label>
          Email:
          <input
            placeholder="Email"
            value={this.state.inputEmail}
            onChange={this.onChangeEmail}
          />
        </label>
        <button onClick={this.postUser}>Cadastrar</button>
        <div></div>

        <ul>
          {componentsUsers} <button onClick={this.removeUser}>Remover</button>
        </ul>
      </div>
    )
  }
}
