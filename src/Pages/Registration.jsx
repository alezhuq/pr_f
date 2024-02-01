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

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = () => {
    console.log('Register clicked')
    // Implement registration logic here
  }

  return (
    <StyledContainer component="main" maxWidth="xs">
      <StyledPaper elevation={3}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <StyledForm onSubmit={(e) => e.preventDefault()}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="First Name"
            autoFocus
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
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
            onClick={handleRegister}
          >
            Register
          </StyledButton>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  )
}

export default RegisterPage
