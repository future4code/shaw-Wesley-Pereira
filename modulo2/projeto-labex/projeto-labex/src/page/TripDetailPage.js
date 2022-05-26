import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToHome, goToAdminHome } from '../routes/coordinator'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { BaseUrl } from './BaseUrl'
// import { UseProtectedPage } from './UseProtectPage'
import Styled from 'styled-components'
import CssBaseline from '@mui/material/CssBaseline'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'


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
const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}


export default function TripDetail() {
  // UseProtectedPage()
  const navigate = useNavigate()
  const params = useParams()
  

 const [trip, setTrip] = useState([])
 const [trips, setTrips] = useState([])
 
 const theme = useTheme()
 const [personName, setPersonName] = React.useState([])

 const handleChange = (event) => {
   const {
     target: { value },
   } = event
   setPersonName(typeof value === 'string' ? value.split(',') : value)
 }
 
 
  

 

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

  const listOptions = trips.map((trip) => {
    return (
      
        
          <option value={trip.name}>{trip.name}</option>
          
      
    )
  })

  return (
    <Div>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#1A5250', height: '100vh' }}>
          <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
      <H1>Trip</H1>
      {/* <div key={trip.id}>
        <select>
          {listOptions}
          </select>
      </div> */}
      <Select
              multiple
              displayEmpty
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Escolha uma viagem</em>
                }

                return selected.join(', ')
              }}
              MenuProps={MenuProps}
              inputProps={{ 'aria-label': 'Without label' }}
            >{listOptions}</Select>
      <Button variant="outlined" onClick={() => goToAdminHome(navigate)}>Voltar</Button>
      <Button variant="outlined" onClick={() => goToHome(navigate)}>Home</Button>
      </FormControl>
        </Box>
      </Container>
    </Div>
  )
}
