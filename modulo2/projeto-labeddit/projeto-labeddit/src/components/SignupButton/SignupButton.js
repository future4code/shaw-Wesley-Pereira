import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonStyled1, linkStyle1, LinkStyled1 } from './style'

function SignupButton() {
  return (
    <div>
      <ButtonStyled1>
        <LinkStyled1>
          <Link to="/login" style={linkStyle1}>
            Cadastrar
          </Link>
        </LinkStyled1>
      </ButtonStyled1>
    </div>
  )
}

export default SignupButton
