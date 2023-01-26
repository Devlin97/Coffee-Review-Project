import React, { useEffect, useState } from 'react'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const PostHistory = () => {
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = async() => {
        const creds = { userId: JSON.parse(localStorage.getItem('loginID')) };

        const data = await fetch('/getUserRecipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds),
        });

        const jsonData = await data.json();

        setRecipes(jsonData);
    }
    
    useEffect(() => {
        fetchRecipes();
    }, []);
  
    return (
        <TableContainer component={Paper} sx={{ maxWidth: '800px', display: 'flex', margin: '0 auto' }}>
            <Table aria-label='recipes-table'>
                <TableHead>
                    <TableRow sx={{ background: 'linear-gradient( 112.1deg,  rgba(32,38,57,0.6) 11.4%, rgba(63,76,119,0.6) 70.2% )' }}>
                        <TableCell>
                            <Typography sx={{ fontSize: 18 }} color='#CBCCCD' gutterBottom>
                                Recipe Name
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography sx={{ fontSize: 18 }} color='#CBCCCD' gutterBottom>
                                Created
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography sx={{ fontSize: 18 }} color='#CBCCCD' gutterBottom>
                                Edit
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography sx={{ fontSize: 18 }} color='#CBCCCD' gutterBottom>
                                Delete
                            </Typography>    
                        </TableCell>    
                    </TableRow>    
                </TableHead>
                <TableBody sx={{ backgroundColor: 'whitesmoke' }}>
                    {recipes.map(rec => (
                        <TableRow key={rec.id}>
                            <TableCell>{rec.title}</TableCell>
                            <TableCell>{(rec.createdAt).substring(0, 10)}</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    ))}
                </TableBody>    
            </Table> 
        </TableContainer>
  )
}

export default PostHistory