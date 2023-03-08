import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Stack, Box, TextField } from '@mui/material'

const textColor = '#CBCCCD'

const GuestProfile = () => {
    const { id } = useParams();

    const [theUser, setTheUser] = useState({})

    const fetchTheUser = async () => {
        const creds = { idOfUser: id };

        const token = localStorage.getItem('token');
        
        const data = await fetch('/findUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            },
            body: JSON.stringify(creds),
        });

        const jsonData = await data.json()

        setTheUser(jsonData)

        console.log(jsonData)
    }

    useEffect(() => {
        fetchTheUser();
    }, [])

  return (
    <>
        <h1 style={{ textAlign: 'center', color: '#CBCCCD' }}>
            {`${theUser.name}'s Profile`}
        </h1>

        <Box sx={{ width: '100%', maxWidth: 500, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh', margin: '0 auto', marginBottom: '20px' }}>

            <Stack 
            spacing={2}
            direction='column'
            alignItems='stretch'
            width='100%'
            sx={{ 
                background: 'linear-gradient( 112.1deg,  rgba(32,38,57,0.6) 11.4%, rgba(63,76,119,0.6) 70.2% )', 
                paddingLeft: '15px',
                paddingRight: '15px',
                paddingBottom: '30px',
                paddingTop: '50px', 
                borderRadius: '25px',
                marginTop: '15px' 
            }}>

                <TextField 
                    id='fav-brewer-text' 
                    label='Favourite Brewer' 
                    variant='outlined' 
                    value={theUser.favouriteOrigin ? theUser.favouriteOrigin : ''}
                    color='primary'
                    sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
                    InputLabelProps= {{ style: { color: textColor } }}
                    InputProps= {{ readOnly: true }}
                />

                <TextField 
                    id='fav-origin-text' 
                    label='Favourite Coffee Origin' 
                    variant='outlined' 
                    value={theUser.favouriteBrewer ? theUser.favouriteBrewer : ''}
                    color='primary'
                    sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
                    InputLabelProps= {{ style: { color: textColor } }}
                    InputProps= {{ readOnly: true }}
                />

                <TextField
                    id='bio-textarea'
                    label='Bio'
                    multiline
                    rows={4}
                    value={theUser.bio ? theUser.bio : ''}
                    inputProps={{ style: { color: textColor } }}
                    InputLabelProps= {{ style: { color: textColor } }}
                    sx={{ fieldset: { borderColor: textColor } }}
                    InputProps= {{ readOnly: true }}
                />

                </Stack>
            </Box>
    </>
  )
}

export default GuestProfile