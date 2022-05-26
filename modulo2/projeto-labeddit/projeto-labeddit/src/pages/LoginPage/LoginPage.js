import React from 'react';
import ImageMonted from '../../components/ImageMonted/ImageMonted';

import LoginForm from '../../components/LoginForm/LoginForm';
import useUnprotectedPage from '../../Hooks/useUnprotectedPage';
import { ButtonContainer, FormContainer, LogoContainer, Span } from './style';
import { H1 } from './style';

function LoginPage() {
    useUnprotectedPage();
    return (
        <div>
            <LogoContainer>
                <ImageMonted /> 
                <H1>LabEddit</H1> 
                <Span>O projeto de rede social da Labenu</Span>
                </LogoContainer>
            
            <FormContainer>
            <LoginForm />
            </FormContainer>

            <ButtonContainer>
            {/* <LoginButton /> */}
            </ButtonContainer>
        </div>
    );
}

export default LoginPage;