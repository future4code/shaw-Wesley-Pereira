import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToHome } from '../routes/coordinator'

export default function App() {
  const navigate = useNavigate()
  const params = useParams()

  return (
    <div>
      <h1>Application</h1>

      <button onClick={() => goToHome(navigate)}>Home</button>
    </div>
  )
}
