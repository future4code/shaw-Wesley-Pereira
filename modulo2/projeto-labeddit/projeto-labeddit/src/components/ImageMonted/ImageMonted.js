import React from 'react'
import img1 from '../../assets/img/Vector-1.png'
import img2 from '../../assets/img/Vector-2.png'
import img3 from '../../assets/img/Vector-3.png'
import img4 from '../../assets/img/Vector-4.png'
import { Imagem1 } from './styled'
import { Imagem2 } from './styled'
import { ImageContainer } from './styled'

function ImageMonted() {
  return (
    <ImageContainer>
        <Imagem2>
        <img src={img3} alt="img" />
        <img src={img4} alt="img" />
      </Imagem2>
      <Imagem1>
        <img src={img2} alt="img" />
        <img src={img1} alt="img" />
      </Imagem1>
      
    </ImageContainer>
  )
}

export default ImageMonted
