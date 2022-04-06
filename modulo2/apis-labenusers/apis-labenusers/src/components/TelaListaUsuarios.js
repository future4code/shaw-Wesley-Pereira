import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CardUsuario = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  justify-content: space-between;
`

export default class TelaListaUsuarios extends React.Component {
  state = {
    usuarios: [],
  }

  componentDidMount() {
    this.pegarUsuarios()
  }

  // pegarUsuarios = () => {
  //   const url =
  //     'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
  //   axios
  //     .get(url, {
  //       headers: {
  //         Authorization: 'wesley-silva-shaw',
  //       },
  //     })
  //     .then((res) => {
  //       this.setState({ usuarios: res.data })
  //     })
  //     .catch((err) => {
  //       alert('Ocorreu um problema, tente novamente mais tarde')
  //     })
  // }
    pegarUsuarios = async () => {
      const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: 'wesley-silva-shaw',
          }
        })
        this.setState({ usuarios: res.data})
      }catch (err) {
        alert('Ocorreu um problema, tente novamente mais tarde')
      }
    }




  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
  axios.delete(url, {
    headers: {
        Authorization: 'wesley-silva-shaw',
    }
  })
  .then((res) => {
    alert("Usuário deletado com sucesso")
    this.pegarUsuarios()
  })
    .catch((err) => {
        alert("Ocorreu um problema, tente novamente mais tarde")
    })

}

  render() {
    const listaUsuarios = this.state.usuarios.map((user) => {
      return (
        <CardUsuario key={user.id}>
          {user.name}
          <button onClick={() => this.deleteUser(user.id)}>Deletar</button>
        </CardUsuario>
      )
    })

    return (
      <div>
        <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
        <h2>Lista de Usuários</h2>
        {listaUsuarios}
      </div>
    )
  }
}
