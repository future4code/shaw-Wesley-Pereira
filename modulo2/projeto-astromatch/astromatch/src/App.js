import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import Icon1 from './img/hug.png'

const AreaToda = Styled.div`
  
background-color: #383838;
  width: 398px;
  height: 598px;
  border: 1px solid black;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  margin-bottom: 6rem;
`
const Footer = Styled.div`
  
  margin-top: 29rem;
  `
const Header = Styled.div`
display: flex;
`
  
  const Astromatch = Styled.div`
  display: flex;
  
  margin-left: 10rem;
  
  `
  const BotaoIcone = Styled.div`
  display: flex; 
  margin-top: 0.5rem;
  margin-left: 6rem;
  
  `



  const Tela = Styled.div`
  border-box: border-box;
  width: 100%;
  `
  const Button = Styled.div`
  display: flex;
  justify-content: space-evenly;
  `

export default function App() {
  
  return (
    <AreaToda>
      <Header>
    <Astromatch>
      <p>astromatch</p>
      </Astromatch>
      <BotaoIcone>
      <img height={40} src={Icon1} alt="icon"/>
      </BotaoIcone>
      </Header>
      <hr />
      <Tela>
        pessoas
      </Tela>
      <Footer>
        <Button>
          <button>X</button>

          <button>S2</button>
        </Button>
      </Footer>
    </AreaToda>
  )
}
