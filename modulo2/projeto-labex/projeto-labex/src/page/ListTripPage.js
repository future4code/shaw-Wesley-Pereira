import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToHome, goToApplicationForm } from '../routes/coordinator'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BaseUrl } from './BaseUrl'
import Styled from 'styled-components'
import Button from '@mui/material/Button'

const Logo = Styled.div`
display: flex;
justify-content: center;
align-items: center;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px #ccc;
  color: #black;
  
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
  const Div = Styled.div`
text-align: center;
`
const P1 = Styled.p`
color: #ccc;
`
const P2 = Styled.p`
color: #35858B;
`
const P3 = Styled.p`
color: #072227;
`

export default function ListTrip() {
  const navigate = useNavigate()
  const params = useParams()

  const [trips, setTrips] = useState([])

  useEffect(() => {
    getTrips()
  }, [])

  const getTrips = () => {
    axios
      .get(`${BaseUrl}/trips`)
      .then((response) => {
        
        setTrips(response.data.trips)
      })
      .catch((error) => {
        alert(error.data)
      })
  }

  const listaTrips = trips.map((trip) => {
    return (
      <div key={trip.id}>
       <Logo>
        <P1>Nome: <H1>{trip.name} </H1> </P1>
        <P2>Data: {trip.date} </P2>
        
        <P3>Descrição: {trip.description}</P3>
        </Logo>
        
        
      </div>
    )
  })

  return (
    <Div>
      <H1>Lista de Viagens</H1>
      {listaTrips}
      <Button variant="outlined" onClick={() => goToHome(navigate)}>Voltar</Button>
      <Button variant="outlined" onClick={() => goToApplicationForm(navigate)}>Cadastrar</Button>
    </Div>
  )
}
