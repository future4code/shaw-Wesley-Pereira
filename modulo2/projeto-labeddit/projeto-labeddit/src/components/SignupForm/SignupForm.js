import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useForm from '../../Hooks/useForm';
import SignupButton from '../SignupButton/SignupButton';
import { ButtonContainer } from '../../pages/LoginPage/style';
import { signup } from '../../services/users';
import { useNavigate } from 'react-router-dom';


function SignupForm() {

  const [form, onChange, clear] = useForm({ username: "", email: "", password: "" });

  const navigate = useNavigate();


  const onSubmitForm = (e) => {
    e.preventDefault();
    signup(form, clear, navigate);
  }

    return (
      
        <Box onSubmit={onSubmitForm}
        component="form"
        sx={{
          '& > :not(style)': { m: 0.5, width: '363px', },
        }}
        noValidate
        autoComplete="on"
      >
        
        <TextField required name={"username"} value={form.username} onChange={onChange}  label="Nome de usuário" variant="outlined" /> <br />
        <TextField required type="email" name={"email"} value={form.email} onChange={onChange}  label="E-mail" variant="outlined" /> <br />
        <TextField required type="password" name={"password"} value={form.password} onChange={onChange}  label="Senha" variant="outlined" />
        <ButtonContainer>
        <SignupButton type="submit" />
        </ButtonContainer>
       
      </Box>
      
    );
}

export default SignupForm;