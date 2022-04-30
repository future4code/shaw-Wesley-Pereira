import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToHome, goToAdminHome } from '../routes/coordinator'
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Styled from 'styled-components'
import Select from '@mui/material/Select'
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'


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


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function CreateTrip() {
  const navigate = useNavigate()
  const params = useParams()
  const [text, setText] = useState('')
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
  const getText = (event) => {
    setText(event.target.value)
  }

  

  return (
    <Div>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#1A5250', height: '100vh' }}>
          <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
      <H1>Criar Viagem</H1>
      <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
      <TextField
                id="outlined-basic"
                label="Nome"
                variant="outlined"
                type="text"
                onChange={getText}
                value={text}
              /><br/>
              <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
              <Select
              multiple
              displayEmpty
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Selecione um planeta</em>
                }

                return selected.join(', ')
              }}
              MenuProps={MenuProps}
              inputProps={{ 'aria-label': 'Without label' }}
            >
                <option value="" disabled="" selected=""></option>
                <option value="Mercurio">Mercurio</option>
                
            <option value="Venus">Venus</option>
            <option value="Terra">Terra</option>
            <option value="Marte">Marte</option>
            <option value="Júpiter">Júpiter</option>
            <option value="Saturno">Saturno</option>
            <option value="Urano">Urano</option>
            <option value="Netuno">Netuno</option>
            <option value="Plutão">Plutão</option>
              </Select>
              </FormControl><br/>
              <TextField
                id="outlined-basic"
                
                variant="outlined"
                type="date"
                onChange={getText}
                value={text}
              /><br/>
               <TextField
                id="outlined-basic"
                label="Descrição"
                variant="outlined"
                type="text"
                onChange={getText}
                value={text}
              /><br/>
               <TextField
                id="outlined-basic"
                label="Duração"
                variant="outlined"
                type="number"
                onChange={getText}
                value={text}
              /><br/>
              </Box>
      <Button variant="outlined" onClick={() => goToAdminHome(navigate)}>Voltar</Button>
      <Button variant="outlined" onClick={() => goToHome(navigate)}>Home</Button>
      </FormControl>
        </Box>
      </Container>
    </Div>
  )
}
