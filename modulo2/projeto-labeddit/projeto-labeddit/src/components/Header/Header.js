import React from 'react'
import ImageMonted from './ImageMonted/ImageMonted'
import { BottonContainer, HeaderContainer, ImageContainer } from './style'

function Header() {
  return (
    <HeaderContainer>
      <ImageContainer>
        <ImageMonted />
      </ImageContainer>
      <BottonContainer>
        <span>Entrar</span>
      </BottonContainer>
    </HeaderContainer>
  )
}

export default Header
