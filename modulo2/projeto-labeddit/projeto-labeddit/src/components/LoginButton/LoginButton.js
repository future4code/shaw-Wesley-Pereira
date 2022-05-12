import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyled1, ButtonStyled2, linkStyle1, LinkStyled1, linkStyle2, LinkStyled2, Hr } from './style';




function LoginButton() {
    return (
        <div>
        <ButtonStyled1>
                <LinkStyled1>
            <Link to="/login" style={linkStyle1}>Continuar</Link>
            </LinkStyled1>
            </ButtonStyled1>
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