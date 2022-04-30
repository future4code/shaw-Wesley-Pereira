import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToHome, goToListTrip } from '../routes/coordinator'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { BaseUrl } from './BaseUrl'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'

import Container from '@mui/material/Container'

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

export default function AppForm() {
  const navigate = useNavigate()
  const [getTrip, setGetTrip] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [prof, setProf] = useState('')
  const [text, setText] = useState('')
  const [country, setCountry] = useState('')
  const [viagem, setViagem] = useState('')

  const theme = useTheme()
  const [personName, setPersonName] = React.useState([])

  const handleChange = (event) => {
    const {
      target: { value },
    } = event
    setPersonName(typeof value === 'string' ? value.split(',') : value)
  }

  const getName = (event) => {
    setName(event.target.value)
  }
  const getAge = (event) => {
    setAge(event.target.value)
  }
  const getProf = (event) => {
    setProf(event.target.value)
  }
  const getText = (event) => {
    setText(event.target.value)
  }
  const getCountry = (event) => {
    setCountry(event.target.value)
  }
  const getViagem = (event) => {
    setViagem(event.target.value)
  }
  useEffect(() => {
    getTrips()
  }, [])
  const getTrips = () => {
    axios
      .get(`${BaseUrl}/trips`)
      .then((res) => {
        
        setGetTrip(res.data.trips, '')
      })
      .catch((err) => {
        alert(err.data.trips)
      })
  }
  const applyToTrip = (id) => {
    const body = {
      name: name,
      age: age,
      applicationText: text,
      profession: prof,
      country: country,
    }
    axios
      .post(`${BaseUrl}/trips/${id}/apply`, body)
      .then((res) => {
        alert('Usuario cadastrado com sucesso')
        setName('')
        setAge('')
        setCountry('')
        setViagem('')
        setText('')
        setProf('')
        
      })
      .catch((err) => {
        alert(err.data)
      })
  }
  return (
    <Div>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#1A5250', height: '100vh' }}>
          <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
            <H1>Inscreva-se para uma viagem</H1>

            <br />
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
                onChange={getName}
                value={name}
              />
              <br />
              <TextField
                id="outlined-basic"
                label="Idade"
                variant="outlined"
                type="number"
                onChange={getAge}
                value={age}
              />
              <br />
              <TextField
                id="outlined-basic"
                label="Profissão"
                variant="outlined"
                type="text"
                onChange={getProf}
                value={prof}
              />
              <br />
              <TextField
                id="outlined-basic"
                label="Texto da Candidatura"
                variant="outlined"
                type="text"
                onChange={getText}
                value={text}
              />
            </Box>
            <br />
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
            >
              <MenuItem disabled value=""></MenuItem>
              {getTrip.map((trip) => (
                <MenuItem
                  key={trip.id}
                  value={viagem}
                  style={getStyles(name, personName, theme)}
                >
                  {trip.name}
                </MenuItem>
              ))}
            </Select>
            <Select
              multiple
              displayEmpty
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Escolha seu país</em>
                }

                return selected.join(', ')
              }}
              MenuProps={MenuProps}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <option value="Brasil">Brasil</option>
              <option value="Afeganistão">Afeganistão</option>
              <option value="África do Sul">África do Sul</option>
              <option value="Albânia">Albânia</option>
              <option value="Alemanha">Alemanha</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antilhas Holandesas">Antilhas Holandesas</option>
              <option value="Antárctida">Antárctida</option>
              <option value="Antígua e Barbuda">Antígua e Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Argélia">Argélia</option>
              <option value="Armênia">Armênia</option>
              <option value="Aruba">Aruba</option>
              <option value="Arábia Saudita">Arábia Saudita</option>
              <option value="Austrália">Austrália</option>
              <option value="Áustria">Áustria</option>
              <option value="Azerbaijão">Azerbaijão</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrein">Bahrein</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belize">Belize</option>
              <option value="Benim">Benim</option>
              <option value="Bermudas">Bermudas</option>
              <option value="Bielorrússia">Bielorrússia</option>
              <option value="Bolívia">Bolívia</option>
              <option value="Botswana">Botswana</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgária">Bulgária</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Butão">Butão</option>
              <option value="Bélgica">Bélgica</option>
              <option value="Bósnia e Herzegovina">Bósnia e Herzegovina</option>
              <option value="Cabo Verde">Cabo Verde</option>
              <option value="Camarões">Camarões</option>
              <option value="Camboja">Camboja</option>
              <option value="Canadá">Canadá</option>
              <option value="Catar">Catar</option>
              <option value="Cazaquistão">Cazaquistão</option>
              <option value="Chade">Chade</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Chipre">Chipre</option>
              <option value="Colômbia">Colômbia</option>
              <option value="Comores">Comores</option>
              <option value="Coreia do Norte">Coreia do Norte</option>
              <option value="Coreia do Sul">Coreia do Sul</option>
              <option value="Costa do Marfim">Costa do Marfim</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Croácia">Croácia</option>
              <option value="Cuba">Cuba</option>
              <option value="Dinamarca">Dinamarca</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Egito">Egito</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Emirados Árabes Unidos">
                Emirados Árabes Unidos
              </option>
              <option value="Equador">Equador</option>
              <option value="Eritreia">Eritreia</option>
              <option value="Escócia">Escócia</option>
              <option value="Eslováquia">Eslováquia</option>
              <option value="Eslovênia">Eslovênia</option>
              <option value="Espanha">Espanha</option>
              <option value="Estados Federados da Micronésia">
                Estados Federados da Micronésia
              </option>
              <option value="Estados Unidos">Estados Unidos</option>
              <option value="Estônia">Estônia</option>
              <option value="Etiópia">Etiópia</option>
              <option value="Fiji">Fiji</option>
              <option value="Filipinas">Filipinas</option>
              <option value="Finlândia">Finlândia</option>
              <option value="França">França</option>
              <option value="Gabão">Gabão</option>
              <option value="Gana">Gana</option>
              <option value="Geórgia">Geórgia</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Granada">Granada</option>
              <option value="Gronelândia">Gronelândia</option>
              <option value="Grécia">Grécia</option>
              <option value="Guadalupe">Guadalupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guernesei">Guernesei</option>
              <option value="Guiana">Guiana</option>
              <option value="Guiana Francesa">Guiana Francesa</option>
              <option value="Guiné">Guiné</option>
              <option value="Guiné Equatorial">Guiné Equatorial</option>
              <option value="Guiné-Bissau">Guiné-Bissau</option>
              <option value="Gâmbia">Gâmbia</option>
              <option value="Haiti">Haiti</option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungria">Hungria</option>
              <option value="Ilha Bouvet">Ilha Bouvet</option>
              <option value="Ilha de Man">Ilha de Man</option>
              <option value="Ilha do Natal">Ilha do Natal</option>
              <option value="Ilha Heard e Ilhas McDonald">
                Ilha Heard e Ilhas McDonald
              </option>
              <option value="Ilha Norfolk">Ilha Norfolk</option>
              <option value="Ilhas Cayman">Ilhas Cayman</option>
              <option value="Ilhas Cocos (Keeling)">
                Ilhas Cocos (Keeling)
              </option>
              <option value="Ilhas Cook">Ilhas Cook</option>
              <option value="Ilhas Feroé">Ilhas Feroé</option>
              <option value="Ilhas Geórgia do Sul e Sandwich do Sul">
                Ilhas Geórgia do Sul e Sandwich do Sul
              </option>
              <option value="Ilhas Malvinas">Ilhas Malvinas</option>
              <option value="Ilhas Marshall">Ilhas Marshall</option>
              <option value="Ilhas Menores Distantes dos Estados Unidos">
                Ilhas Menores Distantes dos Estados Unidos
              </option>
              <option value="Ilhas Salomão">Ilhas Salomão</option>
              <option value="Ilhas Virgens Americanas">
                Ilhas Virgens Americanas
              </option>
              <option value="Ilhas Virgens Britânicas">
                Ilhas Virgens Britânicas
              </option>
              <option value="Ilhas Åland">Ilhas Åland</option>
              <option value="Indonésia">Indonésia</option>
              <option value="Inglaterra">Inglaterra</option>
              <option value="Índia">Índia</option>
              <option value="Iraque">Iraque</option>
              <option value="Irlanda do Norte">Irlanda do Norte</option>
              <option value="Irlanda">Irlanda</option>
              <option value="Irã">Irã</option>
              <option value="Islândia">Islândia</option>
              <option value="Israel">Israel</option>
              <option value="Itália">Itália</option>
              <option value="Iêmen">Iêmen</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japão">Japão</option>
              <option value="Jersey">Jersey</option>
              <option value="Jordânia">Jordânia</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Laos">Laos</option>
              <option value="Lesoto">Lesoto</option>
              <option value="Letônia">Letônia</option>
              <option value="Libéria">Libéria</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lituânia">Lituânia</option>
              <option value="Luxemburgo">Luxemburgo</option>
              <option value="Líbano">Líbano</option>
              <option value="Líbia">Líbia</option>
              <option value="Macau">Macau</option>
              <option value="Macedônia">Macedônia</option>
              <option value="Madagáscar">Madagáscar</option>
              <option value="Malawi">Malawi</option>
              <option value="Maldivas">Maldivas</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Malásia">Malásia</option>
              <option value="Marianas Setentrionais">
                Marianas Setentrionais
              </option>
              <option value="Marrocos">Marrocos</option>
              <option value="Martinica">Martinica</option>
              <option value="Mauritânia">Mauritânia</option>
              <option value="Maurícia">Maurícia</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Moldávia">Moldávia</option>
              <option value="Mongólia">Mongólia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Moçambique">Moçambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="México">México</option>
              <option value="Mônaco">Mônaco</option>
              <option value="Namíbia">Namíbia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Nicarágua">Nicarágua</option>
              <option value="Nigéria">Nigéria</option>
              <option value="Niue">Niue</option>
              <option value="Noruega">Noruega</option>
              <option value="Nova Caledônia">Nova Caledônia</option>
              <option value="Nova Zelândia">Nova Zelândia</option>
              <option value="Níger">Níger</option>
              <option value="Omã">Omã</option>
              <option value="Palau">Palau</option>
              <option value="Palestina">Palestina</option>
              <option value="Panamá">Panamá</option>
              <option value="Papua-Nova Guiné">Papua-Nova Guiné</option>
              <option value="Paquistão">Paquistão</option>
              <option value="Paraguai">Paraguai</option>
              <option value="País de Gales">País de Gales</option>
              <option value="Países Baixos">Países Baixos</option>
              <option value="Peru">Peru</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="Polinésia Francesa">Polinésia Francesa</option>
              <option value="Polônia">Polônia</option>
              <option value="Porto Rico">Porto Rico</option>
              <option value="Portugal">Portugal</option>
              <option value="Quirguistão">Quirguistão</option>
              <option value="Quênia">Quênia</option>
              <option value="Reino Unido">Reino Unido</option>
              <option value="República Centro-Africana">
                República Centro-Africana
              </option>
              <option value="República Checa">República Checa</option>
              <option value="República Democrática do Congo">
                República Democrática do Congo
              </option>
              <option value="República do Congo">República do Congo</option>
              <option value="República Dominicana">República Dominicana</option>
              <option value="Reunião">Reunião</option>
              <option value="Romênia">Romênia</option>
              <option value="Ruanda">Ruanda</option>
              <option value="Rússia">Rússia</option>
              <option value="Saara Ocidental">Saara Ocidental</option>
              <option value="Saint Martin">Saint Martin</option>
              <option value="Saint-Barthélemy">Saint-Barthélemy</option>
              <option value="Saint-Pierre e Miquelon">
                Saint-Pierre e Miquelon
              </option>
              <option value="Samoa Americana">Samoa Americana</option>
              <option value="Samoa">Samoa</option>
              <option value="Santa Helena, Ascensão e Tristão da Cunha">
                Santa Helena, Ascensão e Tristão da Cunha
              </option>
              <option value="Santa Lúcia">Santa Lúcia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serra Leoa">Serra Leoa</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Singapura">Singapura</option>
              <option value="Somália">Somália</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Suazilândia">Suazilândia</option>
              <option value="Sudão">Sudão</option>
              <option value="Suriname">Suriname</option>
              <option value="Suécia">Suécia</option>
              <option value="Suíça">Suíça</option>
              <option value="Svalbard e Jan Mayen">Svalbard e Jan Mayen</option>
              <option value="São Cristóvão e Nevis">
                São Cristóvão e Nevis
              </option>
              <option value="São Marino">São Marino</option>
              <option value="São Tomé e Príncipe">São Tomé e Príncipe</option>
              <option value="São Vicente e Granadinas">
                São Vicente e Granadinas
              </option>
              <option value="Sérvia">Sérvia</option>
              <option value="Síria">Síria</option>
              <option value="Tadjiquistão">Tadjiquistão</option>
              <option value="Tailândia">Tailândia</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tanzânia">Tanzânia</option>
              <option value="Terras Austrais e Antárticas Francesas">
                Terras Austrais e Antárticas Francesas
              </option>
              <option value="Território Britânico do Oceano Índico">
                Território Britânico do Oceano Índico
              </option>
              <option value="Timor-Leste">Timor-Leste</option>
              <option value="Togo">Togo</option>
              <option value="Tonga">Tonga</option>
              <option value="Toquelau">Toquelau</option>
              <option value="Trinidad e Tobago">Trinidad e Tobago</option>
              <option value="Tunísia">Tunísia</option>
              <option value="Turcas e Caicos">Turcas e Caicos</option>
              <option value="Turquemenistão">Turquemenistão</option>
              <option value="Turquia">Turquia</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Ucrânia">Ucrânia</option>
              <option value="Uganda">Uganda</option>
              <option value="Uruguai">Uruguai</option>
              <option value="Uzbequistão">Uzbequistão</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vaticano">Vaticano</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietname">Vietname</option>
              <option value="Wallis e Futuna">Wallis e Futuna</option>
              <option value="Zimbabwe">Zimbabwe</option>
              <option value="Zâmbia">Zâmbia</option>>
            </Select>
            <br />
            <Button variant="outlined" onClick={applyToTrip}>
              Inscrever-se
            </Button>
            <Button variant="outlined" onClick={() => goToHome(navigate)}>
              Home
            </Button>
            <Button variant="outlined" onClick={() => goToListTrip(navigate)}>
              Voltar
            </Button>
          </FormControl>
        </Box>
      </Container>
    </Div>
  )
}
