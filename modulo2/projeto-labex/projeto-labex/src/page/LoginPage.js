import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToHome, goToAdminHome } from '../routes/coordinator'

export default function App() {
  const navigate = useNavigate()
  const params = useParams()

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => goToHome(navigate)}>Home</button>
      <button onClick={() => goToAdminHome(navigate)}>Admin</button>
    </div>
  )
}
