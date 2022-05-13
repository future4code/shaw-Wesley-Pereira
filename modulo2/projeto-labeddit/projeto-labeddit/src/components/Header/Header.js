import React, { useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import { goToLogin } from '../../routes/coordinator'
import ImageMonted from './ImageMonted/ImageMonted'
import { BottonContainer, HeaderContainer, ImageContainer } from './style'

function Header() {
  
  const navigate = useNavigate()
  const token = localStorage.getItem('token') 
  const [rightButton, setRightButton] = useState(token ? "Logout" : "Login")

  const logout = () => {
    localStorage.removeItem('token')
    
  }

  const rightButtonAction = () => {
    if (token) {
      logout()
      setRightButton("Login")
      goToLogin(navigate)
    } else {
      goToLogin(navigate)
    }
  }

  return (
    <HeaderContainer>
      <ImageContainer>
        <ImageMonted />
      </ImageContainer>
      <BottonContainer onClick={rightButtonAction} >
        {rightButton}
      </BottonContainer>
    </HeaderContainer>
  )
}

export default Header
