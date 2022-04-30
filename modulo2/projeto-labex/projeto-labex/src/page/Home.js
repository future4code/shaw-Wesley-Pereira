import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToListTrip, goToLogin } from '../routes/coordinator'
import Space from '../img/Space.jpg'
import Styled from 'styled-components'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Box from '@mui/material/Box'

const Center1 = Styled.div`
  
position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);


   
`
const Center2 = Styled.div`
  
position: absolute;
	top: 30%;
	left: 50%;
	transform: translate(-50%, -50%);


   
`
const IMG = Styled.img`
  
  width: 100vw;
  height: 100vh;
`

const Logo = Styled.div`
display: flex;
justify-content: center;
align-items: center;
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px #ccc;
  color: #fff;
  
  `

export default function Home() {
  const navigate = useNavigate()
  const params = useParams()

  return (
    <div>
      <IMG src={Space} alt="Space" />
      <Center1>
        <Logo>
          <h1>LabeX</h1>
        </Logo>
      </Center1>
      <Center2>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              m: 1,
            },
          }}
        >
          <ButtonGroup variant="text" aria-label="outlined button group">
            <Button onClick={() => goToListTrip(navigate)}>Ver viagens</Button>
            <Button onClick={() => goToLogin(navigate)}>Login</Button>
          </ButtonGroup>
        </Box>
      </Center2>
    </div>
  )
}
