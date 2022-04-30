import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToHome, goToLogin, goToCreateTrip, goToDetailTrip } from '../routes/coordinator'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';
import Styled from 'styled-components'


const Div = Styled.div`
text-align: center;
`
const H1 = Styled.h1`
background: linear-gradient(
  to right, 
  hsl(98 100% 62%), 
  hsl(204 100% 59%)
);
-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 10vmin;
  line-height: 1.1;
 
  
  min-block-size: 100%;
  min-inline-size: 100%;
  box-sizing: border-box;
  display: grid;
  place-content: center;
  font-family: system-ui;
  font-size: min(200%, 5vmin);
  font-family: "Dank Mono", ui-monospace, monospace;
`

export default function Admin() {
  const navigate = useNavigate()
  const params = useParams()

  

  return (
    <Div>
      <H1>Admin</H1>
      <ButtonGroup
            variant="outlined"
            aria-label="outlined primary button group"
          >
      <Button onClick={() => goToLogin(navigate)}>Voltar</Button>
      <Button onClick={() => goToHome(navigate)}>Home</Button>
      <Button onClick={() => goToCreateTrip(navigate)}>Criar viagem</Button>
      <Button onClick={() => goToDetailTrip(navigate)}>Detalhes viagem</Button>
      </ButtonGroup>
    </Div>
  )
}
