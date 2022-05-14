import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToPost } from '../../routes/coordinator';
import { ButtonXStyled } from './style';


function ButtonX() {
    const navigate = useNavigate();
    return (
        <div>
            <ButtonXStyled onClick={() => goToPost(navigate)} >
                X
            </ButtonXStyled>
        </div>
    );
}

export default ButtonX;