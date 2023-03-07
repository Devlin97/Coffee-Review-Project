import React, { useEffect, useState } from 'react'
import { json, Link } from 'react-router-dom'
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
import { Skeleton, Stack, TextField, Collapse, Alert } from '@mui/material'
import Box from '@mui/material/Box'

const textColor = '#CBCCCD'

const PostHistory = () => {
    //================================= Recipes Table =================================
    const [recipes, setRecipes] = useState([]);
    const [recipeOut, setRecipeOut] = useState();

    const [name, setName] = useState('');

    const [favBrewer, setFavBrewer] = useState('');
    const [favOrigin, setFavOrigin] = useState('');
    const [bio, setBio] = useState('');

    const [alertBool, setAlertBool] = useState(false);

    const fetchRecipes = async() => {
        // const creds = { userId: JSON.parse(localStorage.getItem('loginID')) };
        const token = localStorage.getItem('token')

        console.log('The token: ', token)
        const data = await fetch('/getUserRecipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token' : token
            },
            // body: JSON.stringify(creds),
        });

        const jsonData = await data.json();

        setRecipes(jsonData.recipes);
        setName(jsonData.name);
        setBio(jsonData.bio);
        setFavBrewer(jsonData.favBrew);
        setFavOrigin(jsonData.favOrigin);
    }
    
    useEffect(() => {
        fetchRecipes();
    }, []);

    const handlePostDelete = async (idIn, methodIn) => {
        const token = localStorage.getItem('token')

        const creds = { 
            postId: idIn,
            brewMethod: methodIn 
        };

        const data = await fetch('/deleteRecipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token' : token
            },
            body: JSON.stringify(creds),
        });

        const jsonData = await data.json();

        setRecipes(jsonData);
    }

    const handleBiosUpdate = async () => {
        const token = localStorage.getItem('token')

        const creds = { 
            bio,
            favBrewer,
            favOrigin
        };

        const data = await fetch('/updateUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token' : token
            },
            body: JSON.stringify(creds),
        });

        const jsonData = await data.json();

        if(jsonData.success === true){
            setAlertBool(true)
        }
    }

    //================================= Recipes Table =================================
    //================================= Edit Recipe =================================
    
    //================================= Edit Recipe =================================
  
    return (
        <>
            <h1 style={{ textAlign: 'center', color: '#CBCCCD' }}>
                {`${name}'s Post History`}
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
                    paddingBottom: '50px',
                    paddingTop: '50px', 
                    borderRadius: '25px',
                    marginTop: '15px' 
                }}>

                    <TextField 
                        id='fav-brewer-text' 
                        label='Favourite Brewer' 
                        variant='outlined' 
                        onChange={(e) => setFavBrewer(e.target.value)} 
                        value={favBrewer ? favBrewer : ''}
                        color='primary'
                        sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
                        InputLabelProps= {{ style: { color: textColor } }}
                    />

                    <TextField 
                        id='fav-origin-text' 
                        label='Favourite Coffee Origin' 
                        variant='outlined' 
                        onChange={(e) => setFavOrigin(e.target.value)} 
                        value={favOrigin ? favOrigin : ''}
                        color='primary'
                        sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
                        InputLabelProps= {{ style: { color: textColor } }}
                    />

                    <TextField
                        id='bio-textarea'
                        label='Bio'
                        multiline
                        rows={4}
                        placeholder='Write short bio about yourself...'
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        inputProps={{ style: { color: textColor } }}
                        InputLabelProps= {{ style: { color: textColor } }}
                        sx={{ fieldset: { borderColor: textColor } }}
                    />

                    <Button onClick={() => handleBiosUpdate()} variant='contained' color='success'>Submit</Button>

                    <Collapse in={alertBool}>
                        <Alert onClose={() => setAlertBool(false)}>Successfully updated!</Alert>
                    </Collapse>

                </Stack>
            </Box>

            <TableContainer sx={{ maxWidth: '700px', display: 'flex', margin: '0 auto' }}>
                {recipes?.length > 0 ? (
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
                        {recipes.map((rec, i) => (
                            <TableRow key={i}>
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