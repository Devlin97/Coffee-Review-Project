import React from 'react';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const RecipesSearch = ({recipesIn}) => {

  return (
    <>
      <input type='text' placeholder='Search by Recipe Name or Brew Device...'/>
      <List>
      {recipesIn.map(rec => (
        <ListItem>
          <ListItemButton>
            <ListItemText primary={rec.title} />
          </ListItemButton>
        </ListItem>
      ))}
      </List>
        
    </>
  )
}

export default RecipesSearch;