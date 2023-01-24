import React, { useState } from 'react';
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const textColor = '#CBCCCD';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        if(localStorage.getItem('loginID') === null) {
            return false;
        }
        else {
            return true;
        }
    })
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogOut = () => {
        localStorage.removeItem('loginID');
        setIsLoggedIn(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(username, password);
        await loginUser({
            username,
            password
        });
        console.log('done');
    }

    async function loginUser(creds) {
        const loginSuccess = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds),
        })
    
        const jsonSuccess = await loginSuccess.json();
    
        console.log('Login Success: ', jsonSuccess);
    
        if(jsonSuccess.success) {
            localStorage.setItem('loginID', jsonSuccess.theId);
            setIsLoggedIn(true);

            setUsername('');
            setPassword('');
    
            alert('Login Successful!');
        }
    
        if(!jsonSuccess.success) {
            alert('Invalid Username / Password Combination.');
        }
    }
  
    if(isLoggedIn) {
        return(
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

                <h2 className='sign-in-header'>SIGN IN</h2>

                <h2 className='sign-in-header'>SUCCESSFUL</h2>
            

                <Button variant='outlined' style={{ color: textColor }} color='success' onClick={() => handleLogOut()} >Log Out</Button>

            </Stack>

        </Box>
        )
    }
    else {
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

                    <h2 className='sign-in-header'>SIGN IN</h2>
                

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

                    <Button type='submit' variant='outlined' style={{ color: textColor }} color='success'>Log In</Button>

                </Stack>

            </Box>
        </form>
    )}
}

export default Login;