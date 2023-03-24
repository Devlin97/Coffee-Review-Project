import React, { useEffect, useState } from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, Typography, Paper } from '@mui/material'
import { TextField, Stack, Box, Alert, Collapse, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const textColor = '#CBCCCD';

const BrewerTable = () => {
    //Table
    const [brewers, setBrewers] = useState([]);

    //Add
    const [brewer, setBrewer] = useState('')
    const [method, setMethod] = useState('')
    const [alertBoo, setAlertBoo] = useState(false)
    const [alertBooErr, setAlertBooErr] = useState(false)

    //Table
    const fetchBrewers = async() => {
        const data = await fetch('/getBrewers');

        const jsonData = await data.json();

        setBrewers(jsonData);
    }

    useEffect(() => {
        fetchBrewers();
    }, []);

    const handleBrewerDelete = async (idIn) => {
        const creds = {
            brewerId: idIn
        };

        const data = await fetch('/deleteBrewer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds),
        });

        const jsonData = await data.json();

        setBrewers(jsonData);
    }

    //Add

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(method);

        if(method === 'Immersion' || method === 'Pourover') {
            await uploadBrewer({
                name: brewer,
                brewMethod: method
            });
        }
        else {
            setAlertBooErr(true)
        }
    }

    async function uploadBrewer(creds) {
        const data = await fetch('/addBrewer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds),
        })
        
        const jsonData = await data.json();

        setBrewers(jsonData);

        setBrewer('')
        setAlertBoo(false)
    }



    return (
    <>
        <TableContainer sx={{ 
            maxWidth: '800px', 
            display: 'flex', 
            margin: '0 auto', 
            height: '400px', 
            overflowY: 'auto'
            }}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography sx={{ fontSize: 18 }} gutterBottom>
                                Brewer Name
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography sx={{ fontSize: 18 }} gutterBottom>
                                Brew Method
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
                    {brewers.map(brewer => (
                        <TableRow key={brewer.id}>
                            <TableCell>{brewer.name}</TableCell>
                            <TableCell>{brewer.brewMethod}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleBrewerDelete(brewer.id)}>
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
                    id='brewer-add-text' 
                    label='Add Brewer' 
                    variant='standard' 
                    onChange={(e) => setBrewer(e.target.value)} 
                    value={brewer}
                    color='primary'
                    sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
                    InputLabelProps= {{ style: { color: textColor } }}
                    />

                    <FormControl sx={{ m:1, minWidth: 200 }}>
                        <InputLabel id='select-label-brew-method' style={{ color: textColor }}>Brew Method</InputLabel>
                        <Select
                            labelId='select-label-brew-method'
                            id='select-brew-method'
                            value={method}
                            label='Brew Method'
                            onChange={(e) => setMethod(e.target.value)}
                            defaultValue=""
                            style={{ color: textColor }}
                            sx={{ fieldset: { borderColor: textColor } }}
                            MenuProps={{
                                anchorOrigin: {
                                    vertical:'bottom',
                                    horizontal: 'left'
                                },
                                transformOrigin: {
                                    vertical: 'top',
                                    horizontal: 'left'
                                }
                            }}>
                        
                            <MenuItem value={'Immersion'}>Immersion</MenuItem>
                            <MenuItem value={'Pourover'}>Pourover</MenuItem>
                        </Select>
                    </FormControl>
        
                    <Button type='submit' variant='contained' style={{ color: textColor }} color='success'>ADD</Button>

                    <Collapse in={alertBoo}>
                        <Alert onClose={() => setAlertBoo(false)}>Successfully added!</Alert>
                    </Collapse>

                    <Collapse in={alertBooErr}>
                        <Alert severity='error' onClose={() => setAlertBooErr(false)}>Please select a brew method.</Alert>
                    </Collapse>
        
                </Stack>
    
            </Box>
  
        </form>
    </>
  )
}

export default BrewerTable