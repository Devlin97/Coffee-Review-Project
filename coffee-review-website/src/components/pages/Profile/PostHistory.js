import React, { useEffect, useState } from 'react'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import EditRecipe from './EditRecipe'

const PostHistory = () => {
    //================================= Recipes Table =================================
    const [recipes, setRecipes] = useState([]);
    const [recipeOut, setRecipeOut] = useState();

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

    const handlePostDelete = async (idIn, methodIn) => {
        const creds = { 
            userId: JSON.parse(localStorage.getItem('loginID')),
            postId: idIn,
            brewMethod: methodIn 
        };

        const data = await fetch('/deleteRecipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds),
        });

        const jsonData = await data.json();

        setRecipes(jsonData);
    }

    //================================= Recipes Table =================================
    //================================= Edit Recipe =================================
    
    //================================= Edit Recipe =================================
  
    if(recipes.length > 0) {
    return (
        <>
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
                                <TableCell>
                                    <Button onClick={() => setRecipeOut(rec)}>
                                        Edit
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => handlePostDelete(rec.id, rec.brewMethod)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>    
                </Table> 
            </TableContainer>
            <EditRecipe recipeIn={recipeOut} />
        </>
  )}
  else {
    return(
        <TableContainer component={Paper} sx={{ maxWidth: '800px', display: 'flex', margin: '0 auto' }}>
            <Table aria-label='recipes-table'>
                <TableHead>
                    <TableRow sx={{ background: 'linear-gradient( 112.1deg,  rgba(32,38,57,0.6) 11.4%, rgba(63,76,119,0.6) 70.2% )' }}>
                        <TableCell>
                            <Typography sx={{ fontSize: 18 }} color='#CBCCCD' gutterBottom>
                                Create recipes to see them here!
                            </Typography>
                        </TableCell>
                    </TableRow>    
                </TableHead>
            </Table>
        </TableContainer>
    )
  }
}

export default PostHistory