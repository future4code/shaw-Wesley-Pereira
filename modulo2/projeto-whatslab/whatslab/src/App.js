import React, { Component } from 'react';
import './App.css';
import Styled from 'styled-components';



const StyledBox = Styled.div`
  background-color: #C4C3B3;
  width: 500px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`


const StyledComponent = Styled.div`
  padding: 30px 0 10px 20px;
  
  widith: 100%;
  
    
`;


const StyledUl = Styled.ul`

`


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      message: '',
      messages: []
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      messages: [...this.state.messages, {
        userName: this.state.userName,
        message: this.state.message
      }],
      message: ''
    })
  }

  render() {
    return (
      
      <StyledBox>
        
        <StyledUl>
          {this.state.messages.map((message, index) => {
            return <li key={index}>{message.userName}: {message.message}</li>
          })}
        </StyledUl>
        <StyledComponent>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} placeholder="Usuário" />
          <input type="text" name="message" value={this.state.message} onChange={this.handleChange} placeholder="Mensagem" />
          <button type="submit">Enviar</button>
        </form>
        </StyledComponent>
        
      </StyledBox>
      
    )
  }
}