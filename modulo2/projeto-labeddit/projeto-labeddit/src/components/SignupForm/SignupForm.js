import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function SignupForm() {
    return (
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 0.5, width: '363px', },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Nome de usuário" variant="outlined" /> <br />
        <TextField id="outlined-basic" label="E-mail" variant="outlined" /> <br />
        <TextField id="outlined-basic" label="Senha" variant="outlined" />
       
      </Box>
    );
}

export default SignupForm;