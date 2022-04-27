import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToHome, goToApplicationForm } from '../routes/coordinator'

export default function App() {
  const navigate = useNavigate()
  const params = useParams()

  return (
    <div>
      <h1>Lista de Viagens</h1>
      <button onClick={() => goToHome(navigate)}>Voltar</button>
      <button onClick={() => goToApplicationForm(navigate)}>Cadastrar</button>
    </div>
  )
}
