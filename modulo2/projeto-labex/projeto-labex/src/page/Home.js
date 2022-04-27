import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToListTrip, goToLogin } from '../routes/coordinator'

export default function App() {
  const navigate = useNavigate()
  const params = useParams()

  return (
    <div>
      <h1>LabeX</h1>
      <button onClick={() => goToListTrip(navigate)}>Ver viagens</button>
      <button onClick={() => goToLogin(navigate)}>Login</button>
    </div>
  )
}
