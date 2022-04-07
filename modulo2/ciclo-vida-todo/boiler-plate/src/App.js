import React from 'react'
import styled from 'styled-components'
import './styles.css'

const AppContainer = styled.div`
font-family: sans-serif;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;

`


const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))

  };

  componentDidMount() {
    const tarefas = localStorage.getItem('tarefas')

    if (tarefas) {
      this.setState({tarefas: JSON.parse(tarefas)})
    }


  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})


  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const novaLista = [...this.state.tarefas, novaTarefa]

    this.setState({tarefas: novaLista, inputValue: ''})


  }

  selectTarefa = (id) => {
    const novaLista = this.state.tarefas.map(tarefa => {
      if (tarefa.id === id) {
        tarefa.completa = !tarefa.completa
      }
      return tarefa
    })

    this.setState({tarefas: novaLista})


  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <AppContainer>
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </AppContainer>
    )
  }
}

export default App
