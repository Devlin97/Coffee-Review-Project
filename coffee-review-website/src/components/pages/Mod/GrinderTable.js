import React, { useEffect, useState } from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, Typography, Paper } from '@mui/material'

const GrinderTable = () => {
    const [grinders, setGrinders] = useState([]);

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
  
    return (
    <>
        <TableContainer component={Paper} sx={{ maxWidth: '800px', display: 'flex', margin: '0 auto', height: '400px', overflowY: 'auto' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography sx={{ fontSize: 18 }} color='#CBCCCD' gutterBottom>
                                Grinder Name
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
    </>
  )
}

export default GrinderTable