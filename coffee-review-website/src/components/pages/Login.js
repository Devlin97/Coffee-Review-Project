import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';

const textColor = '#CBCCCD';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        if(localStorage.getItem('token') === null) {
            return false;
        }
        else {
            return true;
        }
    })
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isModerator, setIsModerator] = useState(false);

    useEffect(() => {
        if(isLoggedIn){
            findModerator();
        }
    }, []);

    const findModerator = async () => {
        const token = localStorage.getItem('token');

        const data = await fetch('/findMod', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        });

        const jsonData = await data.json();

        setIsModerator(jsonData);
    }

    const handleLogOut = () => {
        localStorage.removeItem('token');
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
    
        if(jsonSuccess.auth) {
            localStorage.setItem('token', jsonSuccess.token);
            setIsLoggedIn(true);

            if(jsonSuccess.result.moderator) {
                setIsModerator(true);
            }

            setUsername('');
            setPassword('');
        }
    
        if(!jsonSuccess.auth) {
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
            

                <Button variant='contained' style={{ color: textColor }} color='success' onClick={() => handleLogOut()} >Log Out</Button>

                {isModerator &&
                    <Link to="/mod" style={{ textDecoration: 'none' }}>
                        <Button variant='contained' style={{ color: textColor }} color='success'>Moderator Hub</Button>
                    </Link>
                }

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

                    <Button type='submit' variant='contained' style={{ color: textColor }} color='success'>Log In</Button>

                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        <Button variant='contained' style={{ color: textColor }} color='success'>Register</Button>
                    </Link>

                </Stack>

            </Box>
        </form>
    )}
}

export default Login;