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
      <Box sx={{ bgcolor: '#6F4e37', color: 'whitesmoke', width: 400 }}>
        <TextField 
          id='recipe-search' 
          label='Search' 
          variant='standard'
          placeholder='Search by Title or Brew Device...'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Search />
              </InputAdornment>
            )
          }}
          sx={{ width: '100%' }}
        />
        <List>
        {recipesIn.map(rec => (
          <ListItem>
            <ListItemButton>
              <ListItemText primary={rec.title} />
            </ListItemButton>
          </ListItem>
        ))}
        </List>
      </Box>
    </>
  )
}

export default RecipesSearch;