import React from 'react'

import { ButtonStyled1 } from './style'

function SignupButton() {


 function handleAdd() {
        console.log('Cadastro realizado com sucesso!')
      }

  return (
    <div>
      <ButtonStyled1 onClick={handleAdd}>Cadastrar</ButtonStyled1>
    </div>
  )
}

export default SignupButton
