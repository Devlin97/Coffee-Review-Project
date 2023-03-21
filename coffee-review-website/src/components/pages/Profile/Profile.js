import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css'
import PostHistory from './PostHistory';
import { Box, Stack, Button } from '@mui/material';

const textColor = '#CBCCCD'

function Profile() {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        if(localStorage.getItem('token') === null) {
            return false;
        }
        else {
            return true;
        }
    })

    if(isLoggedIn) {
        return (
            <>
                <PostHistory />
            </>
        )
    }
    else {
        return(
            <>
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

                        <h2 className='sign-in-header'>SIGN IN TO VIEW PROFILE</h2>

                        <h2 className='sign-in-header'>SIGN IN OR REGISTER BELOW</h2>

                        <Box sx={{ width: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                            <Link to="/signIn" style={{ width: '100%', marginBottom: '16px' }}>
                                <Button variant='contained' style={{ color: textColor, width: '100%' }} color='success'>Login</Button>
                            </Link>

                            <Link to="/register" style={{ width: '100%' }}>
                                <Button variant='contained' style={{ color: textColor, width: '100%' }} color='success'>Register</Button>
                            </Link>

                        </Box>

                    </Stack>

                </Box>
            </>
        )
    }
}

export default Profile;