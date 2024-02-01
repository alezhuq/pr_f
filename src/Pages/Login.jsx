import React, { useState } from 'react'
import { Container, Paper, Typography, TextField, Button } from '@mui/material'
import { styled } from '@mui/system'

const StyledContainer = styled(Container)({
  height: 'calc(100vh - 170px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const StyledPaper = styled(Paper)({
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const StyledForm = styled('form')({
  width: '100%',
  marginTop: '16px',
})

const StyledButton = styled(Button)({
  margin: '16px 0 8px',
})

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Login clicked')
  }

  return (
    <StyledContainer component="main" maxWidth="xs">
      <StyledPaper elevation={3}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <StyledForm onSubmit={(e) => e.preventDefault()}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            Login
          </StyledButton>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  )
}

export default LoginPage
