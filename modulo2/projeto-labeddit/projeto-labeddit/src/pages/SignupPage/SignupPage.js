import React from 'react'
import Header from '../../components/Header/Header'
import SignupForm from '../../components/SignupForm/SignupForm'
import { Eslogan, FormContainer, SpanBlue, SpanContainer } from './style'
import Checkbox from '@mui/material/Checkbox'

import { ButtonContainer } from '../LoginPage/style'
import useUnprotectedPage from '../../Hooks/useUnprotectedPage'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

function SignupPage() {
  useUnprotectedPage();
  return (
    <div>
      <Header />
      <Eslogan>Olá, boas vindas ao LabEddit ;)</Eslogan>
      <FormContainer>
      <SignupForm />
      </FormContainer>
      <SpanContainer>
        <span>Ao continuar, você concorda com o nosso </span>
        <SpanBlue>Contraro de usuário </SpanBlue>
        <span>e nossa </span>
        <SpanBlue>Política de Privacidade.</SpanBlue>
      </SpanContainer>
      <SpanContainer>
        <Checkbox {...label} defaultChecked color="default" />
        <span>
          Eu concordo em receber emails sobre coisas legais no Labeddit
        </span>
      </SpanContainer>
      <ButtonContainer>
      {/* <SignupButton /> */}
      </ButtonContainer>
    </div>
  );
}

export default SignupPage
