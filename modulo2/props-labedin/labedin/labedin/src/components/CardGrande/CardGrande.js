import React from 'react';
import './CardGrande.css'
import Styled from 'styled-components'


const CardGrandDiv = Styled.div`

    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;

    

`

const CardGrandImg = Styled.img`

width: 70px;
margin-right: 10px;
border-radius: 50%;

`

const CardGrandH4 = Styled.h4`

margin-bottom: 15px;

`




function CardGrande(props) {
    return (
        <CardGrandDiv >
            <CardGrandImg  src={ props.imagem } />
            <div>
                <CardGrandH4>{ props.nome }</CardGrandH4>
                <p>{ props.descricao }</p>
            </div>
        </CardGrandDiv>
    )
}

export default CardGrande;