import React, { useState } from 'react';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Search from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment';
import RecipeDetails from './RecipeDetails';
import Grid from '@mui/material/Unstable_Grid2'

const RecipesSearch = ({recipesIn}) => {
  const [theRecipe, setTheRecipe] = useState();


  return (
    <>
      <Grid container spacing={0}>
        <Grid xs={12} md={4}>
          <Box sx={{ 
            bgcolor: 'lightslategrey', 
            width: 400, 
            marginTop: '10px', 
            marginLeft: '5px', 
            background: 'linear-gradient( 112.1deg,  rgba(32,38,57,0.5) 11.4%, rgba(63,76,119,0.5) 70.2% )' 
            }}>

            <TextField 
              id='recipe-search' 
              label='Search' 
              variant='standard'
              placeholder='Search by Title or Brew Device...'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Search style={{ color: '#CBCCCD' }} />
                  </InputAdornment>
                )
              }}
              sx={{ width: '100%', input: { color: 'white' } }}
              InputLabelProps={{ style: { color: '#CBCCCD' } }}
            />

            <List>
            {recipesIn.map(rec => (
              <ListItem key={rec.id}>
                <ListItemButton onClick={() => setTheRecipe(rec)}>
                  <ListItemText primary={rec.title} sx={{ color: '#CBCCCD' }} />
                </ListItemButton>
              </ListItem>
            ))}
            </List>
          </Box>
        </Grid>
        <Grid xs={12} md={8}>
          <RecipeDetails recipeIn={theRecipe} />
        </Grid>
      </Grid>
    </>
  )
}

export default RecipesSearch;