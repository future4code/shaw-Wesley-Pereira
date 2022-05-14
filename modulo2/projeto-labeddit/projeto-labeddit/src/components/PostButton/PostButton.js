import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { goToFeed } from '../../routes/coordinator'
import { ButtonStyled1 } from './style'

function FeedButton() {

  const navigate = useNavigate()

  return (
    <div>
      <ButtonStyled1 onClick={() => goToFeed(navigate)}>
        
           
            Postar
       
      </ButtonStyled1>
    </div>
  )
}

export default FeedButton
