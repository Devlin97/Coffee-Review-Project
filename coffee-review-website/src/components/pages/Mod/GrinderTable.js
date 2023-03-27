import React, { useEffect, useState } from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, Typography } from '@mui/material'
import { TextField, Stack, Box, Alert, Collapse } from '@mui/material';

const textColor = '#CBCCCD'

const GrinderTable = () => {
    const [grinders, setGrinders] = useState([]);
    const [grinder, setGrinder] = useState('');
    const [alertBoo, setAlertBoo] = useState(false);

    const fetchGrinders = async() => {
        const data = await fetch('/getGrinders');

        const jsonData = await data.json();

        setGrinders(jsonData);
    }

    useEffect(() => {
        fetchGrinders();
    }, []);

    const handleGrinderDelete = async (idIn) => {
        const creds = {
            grinderId: idIn
        };

        const data = await fetch('/deleteGrinder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds),
        });

        const jsonData = await data.json();

        setGrinders(jsonData);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(grinder);
        await uploadGrinder({
            grinder
        });
      
    }

    async function uploadGrinder(creds) {
        const data = await fetch('/addGrinder', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds),
        })

        const jsonData = await data.json();

        setGrinders(jsonData);

        setGrinder('');
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
                                Grinder Name
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
                    {grinders.map(grinder => (
                        <TableRow key={grinder.id}>
                            <TableCell>{grinder.name}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleGrinderDelete(grinder.id)}>
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

                    <h2 className='sign-in-header'>Add Grinder</h2>

                    <TextField 
                        id='grinder-add-text' 
                        label='Add Grinder' 
                        variant='standard' 
                        onChange={(e) => setGrinder(e.target.value)} 
                        value={grinder}
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

export default GrinderTable