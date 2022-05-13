import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyled1, ButtonStyled2, linkStyle2, LinkStyled2, Hr } from './style';




function LoginButton() {


    function handleAdd() {
        console.log('Login realizado com sucesso!')
      }

    return (
        <div>
        
                
            <ButtonStyled1  onClick={handleAdd} >Login</ButtonStyled1>
            
            
            <Hr/>
            <ButtonStyled2>
            <LinkStyled2>
            <Link to="/signup" style={linkStyle2}>Crie uma conta!</Link>
            </LinkStyled2>
        </ButtonStyled2>
        </div>
    );
}

export default LoginButton;