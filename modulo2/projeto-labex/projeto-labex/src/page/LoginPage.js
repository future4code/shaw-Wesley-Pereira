import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToHome, goToAdminHome } from '../routes/coordinator'
import { BaseUrl } from './BaseUrl'
import { useState } from 'react'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Styled from 'styled-components'
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'

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
 
  
  min-block-size: 30%;
  min-inline-size: 100%;
  box-sizing: border-box;
  display: grid;
  place-content: center;
  font-family: system-ui;
  font-size: min(200%, 50vmin);
  font-family: "Dank Mono", ui-monospace, monospace;
`
const Div = Styled.div`
text-align: center;
`

export default function Login() {
  const navigate = useNavigate()
  const params = useParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onSubmitLogin = (event) => {
    const body = {
      email: email,
      password: password,
    }
    axios
      .post(`${BaseUrl}/login`, body)
      .then((response) => {
        alert('Deu Certo: ', response.data)
      })
      .catch((error) => {
        alert('Deu errado: ', error.response)
      })
  }

  return (
    <Div>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#1A5250', height: '100vh' }}>
          <H1>Login</H1>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              required
              type="email"
              value={email}
              onChange={onChangeEmail}
            />
            <br />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              required
              pattern={'^.{3,}'}
              title={'Sua senha deve ter no mínimo 3 caracteres'}
              type="password"
              value={password}
              onChange={onChangePassword}
            />
          </Box>
          <ButtonGroup
            variant="outlined"
            aria-label="outlined primary button group"
          >
            <Button onClick={onSubmitLogin}>Login</Button>
            <Button onClick={() => goToHome(navigate)}>Home</Button>
            <Button onClick={() => goToAdminHome(navigate)}>Admin</Button>
          </ButtonGroup>
        </Box>
      </Container>
    </Div>
  )
}
