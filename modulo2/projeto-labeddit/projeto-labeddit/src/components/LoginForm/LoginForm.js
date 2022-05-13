import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useForm from '../../Hooks/useForm';
import LoginButton from '../LoginButton/LoginButton';
import { ButtonContainer } from '../../pages/LoginPage/style';
import { login } from '../../services/users';




function LoginForm() {

  const [form, onChange, clear] = useForm({email: "", password: ""});
  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    e.preventDefault();
    login(form, clear, navigate);
  }


    return (
      
        <Box onSubmit={onSubmitForm}
        component="form"
        sx={{
          '& > :not(style)': { m: 0.5, width: '363px' },
        }}
        noValidate
        autoComplete="on"
      >
        
        <TextField required name={"email"} value={form.email} onChange={onChange} label="E-mail" variant="outlined" /> <br />
        <TextField required type="password" name={"password"} value={form.password} label="Senha" onChange={onChange} variant="outlined" />
        
        <ButtonContainer>
      <LoginButton type="submit" />
      </ButtonContainer>

      </Box>
      
      
    );
}

export default LoginForm;