import React, { useState } from 'react';
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const textColor = '#CBCCCD';

async function loginUser(creds) {
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds),
    })
}

const Login = () => {
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(username, password);
        await loginUser({
            username,
            password
        });
        console.log('done');
    }
  
    return (
    <form onSubmit={handleSubmit}>

        <Box sx={{ width: '100%', height: 600 , justifyContent: 'center', display: 'flex', alignItems: 'center' }}>

            <Stack
                spacing={4}
                direction='column'
                alignItems='center'
                sx={{ 
                    background: 'linear-gradient( 112.1deg,  rgba(32,38,57,1) 11.4%, rgba(63,76,119,1) 70.2% )', 
                    padding: '100px', 
                    borderRadius: '25px' 
                }}
            >

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
                    id='password-text' 
                    label='Password' 
                    variant='standard'
                    type='password' 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}
                    color='primary'
                    sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
                    InputLabelProps= {{ style: { color: textColor } }}
                />

                <Button type='submit' variant='outlined' style={{ color: textColor }} color='success'>Log in</Button>

            </Stack>

        </Box>
    </form>
  )
}

export default Login;