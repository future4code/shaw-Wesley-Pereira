import React from 'react';
import './ImagemButton.css'
import Styled from 'styled-components'

const ImagemButtonDiv = Styled.div`

display: flex;
align-items: center;
border: 1px solid black;
border-radius: 50px;
width: 200px;
padding: 15px 30px;
margin: 10px auto;


`

const ImagemButtonImg = Styled.img`
width: 30px;
margin-right: 10px;

`



function ImagemButton(props) {
    return (
        <ImagemButtonDiv>
            <ImagemButtonImg src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImagemButtonDiv>

    )
}

export default ImagemButton;