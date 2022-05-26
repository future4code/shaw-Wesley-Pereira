import React, { useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import { goToLogin } from '../../routes/coordinator'
import ButtonX from './ButtonX'
import ImageMonted from './ImageMonted/ImageMonted'
import { BottonContainer, HeaderContainer, ImageContainer, ImageContainer2 } from './style'

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
      <ButtonX />
      <ImageContainer2>
        <ImageMonted />
      </ImageContainer2>
      <BottonContainer onClick={rightButtonAction} >
        {rightButton}
      </BottonContainer>
    </HeaderContainer>
  )
}

export default Header
