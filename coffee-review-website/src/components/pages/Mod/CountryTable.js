import React, { useEffect, useState } from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, Typography, Paper } from '@mui/material'

const CountryTable = () => {
    const [countries, setCountries] = useState([]);
  
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

    return (
    <>
        <TableContainer component={Paper} sx={{ maxWidth: '800px', display: 'flex', margin: '0 auto', height: '400px', overflowY: 'auto'  }}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow sx={{ background: 'linear-gradient( 112.1deg,  rgba(32,38,57,0.6) 11.4%, rgba(63,76,119,0.6) 70.2% )' }}>
                        <TableCell>
                            <Typography sx={{ fontSize: 18 }} color='#CBCCCD' gutterBottom>
                                Country Name
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography sx={{ fontSize: 18 }} color='#CBCCCD' gutterBottom>
                                Delete
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
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
    </>
  )
}

export default CountryTable