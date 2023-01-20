import React from 'react';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Search from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment';

const RecipesSearch = ({recipesIn}) => {

  return (
    <>
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
          <ListItem>
            <ListItemButton>
              <ListItemText primary={rec.title} sx={{ color: '#CBCCCD' }} />
            </ListItemButton>
          </ListItem>
        ))}
        </List>
      </Box>
    </>
  )
}

export default RecipesSearch;