import React, { useState } from 'react'
import { TextField, Stack, Box, Button, Alert, Collapse } from '@mui/material';

const textColor = '#CBCCCD'

const CountryAdd = () => {
    const [country, setCountry] = useState('');
    const [alertBoo, setAlertBoo] = useState(false);
  
    const handleSubmit = async (e) => {
        e.preventDefault();
  
        console.log(country);
        await uploadCountry({
            country
        });
        console.log('done');
    }

    async function uploadCountry(creds) {
        fetch('/addCountry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds),
        })
        .then(setCountry(''))
        .then(setAlertBoo(true))
    }
    
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
  
            <h2 className='sign-in-header'>Add Country</h2>
  
            <TextField 
              id='country-add-text' 
              label='Add Country' 
              variant='standard' 
              onChange={(e) => setCountry(e.target.value)} 
              value={country}
              color='primary'
              sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
              InputLabelProps= {{ style: { color: textColor } }}
            />
  
            <Button type='submit' variant='contained' style={{ color: textColor }} color='success'>ADD</Button>

            <Collapse in={alertBoo}>
                <Alert onClose={() => setAlertBoo(false)}>Successfully added!</Alert>
            </Collapse>
  
          </Stack>
  
        </Box>
  
      </form>
  )
}

export default CountryAdd