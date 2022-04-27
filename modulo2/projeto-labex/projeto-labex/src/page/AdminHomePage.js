import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToHome, goToLogin, goToCreateTrip, goToDetailTrip } from '../routes/coordinator'

export default function App() {
  const navigate = useNavigate()
  const params = useParams()

  

  return (
    <div>
      <h1>Admin</h1>
      <button onClick={() => goToLogin(navigate)}>Voltar</button>
      <button onClick={() => goToHome(navigate)}>Home</button>
      <button onClick={() => goToCreateTrip(navigate)}>Criar viagem</button>
      <button onClick={() => goToDetailTrip(navigate)}>Detalhes viagem</button>
    </div>
  )
}
