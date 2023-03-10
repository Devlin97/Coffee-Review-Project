import React, { useState } from 'react';
import { TextField, Stack, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const textColor = '#CBCCCD';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('')

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
      if(localStorage.getItem('token') === null) {
          return false;
      }
      else {
          return true;
      }
    })

    const handleSubmit = async (e) => {
      e.preventDefault();

      if(passwordCheck !== password) {
        alert("You're passwords do not match. Please try again.");
        setPassword('');
        setPasswordCheck('');
      }
      else if (passwordCheck === password) {
        await registerUser({
            username,
            password,
            email
        });
      }
      console.log('done');
    }

    async function registerUser(creds) {
      const successRegister = await fetch('/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(creds),
      })
    
      const jsonRegister = await successRegister.json();
    
      console.log('Register Success: ', jsonRegister);
    
      if(jsonRegister.success) {
        alert('Thank you for registering!');

        setUsername('');
        setEmail('');
        setPassword('');
        setIsLoggedIn(true);
      }
      else if(!jsonRegister.success) {
        alert('Username Taken');
      }
    
    }

    if(!isLoggedIn) {
  return (
    <form onSubmit={handleSubmit}>

      <Box sx={{ width: '100%', height: 600 , justifyContent: 'center', display: 'flex', alignItems: 'center' }}>

        <Stack
          spacing={4}
          direction='column'
          alignItems='center'
          sx={{ 
              background: 'linear-gradient( 112.1deg,  rgba(32,38,57,0.6) 11.4%, rgba(63,76,119,0.6) 70.2% )', 
              paddingLeft: '100px',
              paddingRight: '100px',
              paddingBottom: '50px',
              paddingTop: '50px', 
              borderRadius: '25px' 
          }}>

          <h2 className='sign-in-header'>REGISTER</h2>

          <TextField 
            id='username-text' 
            label='Username' 
            variant='standard' 
            onChange={(e) => setUsername(e.target.value)} 
            value={username}
            color='primary'
            sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
            InputLabelProps= {{ style: { color: textColor } }}
          />

          <TextField 
            id='email-text' 
            label='Email' 
            variant='standard' 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            color='primary'
            sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
            InputLabelProps= {{ style: { color: textColor } }}
          />

          <TextField 
            id='password-text' 
            label='Password' 
            variant='standard' 
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
            color='primary'
            type='password'
            sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
            InputLabelProps= {{ style: { color: textColor } }}
          />

          <TextField 
            id='password-check-text' 
            label='Password Checker' 
            variant='standard' 
            onChange={(e) => setPasswordCheck(e.target.value)} 
            value={passwordCheck}
            color='primary'
            type='password'
            sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
            InputLabelProps= {{ style: { color: textColor } }}
          />

          <Button type='submit' variant='contained' style={{ color: textColor }} color='success'>Register</Button>

        </Stack>

      </Box>

    </form>
  )
    }
    else {
      return (
        <Box sx={{ width: '100%', height: 600 , justifyContent: 'center', display: 'flex', alignItems: 'center' }}>

            <Stack
                spacing={4}
                direction='column'
                alignItems='center'
                sx={{ 
                    background: 'linear-gradient( 112.1deg,  rgba(32,38,57,0.6) 11.4%, rgba(63,76,119,0.6) 70.2% )', 
                    paddingLeft: '100px',
                    paddingRight: '100px',
                    paddingBottom: '50px',
                    paddingTop: '50px', 
                    borderRadius: '25px' 
                }}>

                <h2 className='sign-in-header'>YOU ARE ALREADY LOGGED IN</h2>

                <h2 className='sign-in-header'>THANK YOU FOR REGISTERING</h2>

                <Link to="/">
                  <Button variant='contained' style={{ color: textColor }} color='success'>Home</Button>
                </Link>

                <Link to="/signIn">
                  <Button variant='contained' style={{ color: textColor }} color='success'>Login</Button>
                </Link>

            </Stack>

        </Box>
      )
    }
}

export default Register;