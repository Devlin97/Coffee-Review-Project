import React, { useEffect, useState } from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, Typography, Paper } from '@mui/material'
import { TextField, Stack, Box, Alert, Collapse } from '@mui/material';

const textColor = '#CBCCCD';

const CountryTable = () => {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('');
    const [alertBoo, setAlertBoo] = useState(false);
  
    const fetchCountries = async() => {
        const data = await fetch('/getCountries');

        const jsonData = await data.json();

        setCountries(jsonData);
    }

    useEffect(() => {
        fetchCountries();
    }, []);

    const handleCountryDelete = async (idIn) => {
        const creds = {
            countryId: idIn
        };

        const data = await fetch('/deleteCountry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds),
        });

        const jsonData = await data.json();

        setCountries(jsonData);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
  
        await uploadCountry({
            country
        });
    }

    async function uploadCountry(creds) {
        const data = await fetch('/addCountry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds),
        });

        const jsonData = await data.json();

        setCountries(jsonData);

        setCountry('');
        setAlertBoo(true);
    }

    return (
    <>
        <TableContainer sx={{ maxWidth: '800px', display: 'flex', margin: '0 auto', height: '400px', overflowY: 'auto'  }}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography sx={{ fontSize: 18 }} gutterBottom>
                                Country Name
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography sx={{ fontSize: 18 }} gutterBottom>
                                Delete
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{ backgroundColor: 'whitesmoke' }}>
                    {countries.map(country => (
                        <TableRow key={country.id}>
                            <TableCell>{country.name}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleCountryDelete(country.id)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

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
    </>
  )
}

export default CountryTable