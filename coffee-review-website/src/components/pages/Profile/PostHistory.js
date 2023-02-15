import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
import Grid2 from '@mui/material/Unstable_Grid2'
import { Skeleton } from '@mui/material'
import Box from '@mui/material/Box'

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
  
    return (
        <>
            <TableContainer sx={{ maxWidth: '700px', display: 'flex', margin: '0 auto' }}>
                {recipes.length > 0 ? (
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
                                    Method
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
                                <TableCell>{rec.brewMethod}</TableCell>
                                <TableCell>{(rec.createdAt).substring(0, 10)}</TableCell>
                                <TableCell>
                                    <Button onClick={() => setRecipeOut(rec)}>
                                        {rec.brewMethod === 'Immersion' &&
                                            <Link to={'/editImmersion/' + rec.id}>
                                                Edit
                                            </Link>
                                        }
                                        {rec.brewMethod === 'Pourover' &&
                                            <Link to={'/editPourover/' + rec.id}>
                                                Edit
                                            </Link>
                                        }
                                        {rec.brewMethod === 'Aeropress' &&
                                            <Link to={'/editAeropress/' + rec.id}>
                                                Edit
                                            </Link>
                                        }
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
                ) : (
                    <Skeleton variant='rectangular' width={'100%'} height={'400px'} sx={{ bgcolor: 'grey' }} />
                )
                }
            </TableContainer>
        </>
  )
}

export default PostHistory