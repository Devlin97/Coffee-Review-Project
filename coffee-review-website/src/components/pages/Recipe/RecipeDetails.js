import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

const textColor = '#CBCCCD';

const RecipeDetails = ({ recipeIn = {} }) => {
  
  return (
    <Box sx={{ width: '100%', maxWidth: 500, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh', margin: '0 auto' }}>

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

      <h1 className='create-recipe-h1'>Create a Recipe</h1>

      <TextField 
        id='title-read-only' 
        label='Title' 
        variant='outlined' 
        value={recipeIn.title ? recipeIn.title : ''}
        color='primary'
        sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
        InputLabelProps= {{ style: { color: textColor } }}
        InputProps= {{ readOnly: true }}
      />

      <TextField 
        id='brew-method-read-only' 
        label='Brew Method' 
        variant='outlined' 
        value={recipeIn.brewMethod ? recipeIn.brewMethod : ''}
        color='primary'
        sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
        InputLabelProps= {{ style: { color: textColor } }}
        InputProps= {{ readOnly: true }}
      />

      <TextField 
        id='brewer-read-only' 
        label='Brewer' 
        variant='outlined' 
        value={recipeIn.brewer ? recipeIn.brewer : ''}
        color='primary'
        sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
        InputLabelProps= {{ style: { color: textColor } }}
        InputProps= {{ readOnly: true }}
      />

      <TextField 
        id='coffee-weight-read-only' 
        label='Coffee Weight' 
        variant='outlined' 
        value={recipeIn.coffeeWeight ? recipeIn.coffeeWeight : ''}
        color='primary'
        sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
        InputLabelProps= {{ style: { color: textColor } }}
        InputProps= {{ readOnly: true }}
      />
      
      <TextField 
        id='water-weight-read-only' 
        label='Water Weight' 
        variant='outlined' 
        value={recipeIn.waterWeight ? recipeIn.waterWeight : ''}
        color='primary'
        sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
        InputLabelProps= {{ style: { color: textColor } }}
        InputProps= {{ readOnly: true }}
      />

      <TextField 
        id='grinder-read-only' 
        label='Grinder' 
        variant='outlined' 
        value={recipeIn.grinder ? recipeIn.grinder : ''}
        color='primary'
        sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
        InputLabelProps= {{ style: { color: textColor } }}
        InputProps= {{ readOnly: true }}
      />

      <TextField 
        id='grind-size-read-only' 
        label='Grind Size' 
        variant='outlined' 
        value={recipeIn.grindSize ? recipeIn.grindSize : ''}
        color='primary'
        sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
        InputLabelProps= {{ style: { color: textColor } }}
        InputProps= {{ readOnly: true }}
      />

      <TextField 
        id='total-time-read-only' 
        label='Total Time (Minutes)' 
        variant='outlined' 
        value={recipeIn.totalTimeMinutes ? recipeIn.totalTimeMinutes : ''}
        color='primary'
        sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
        InputLabelProps= {{ style: { color: textColor } }}
        InputProps= {{ readOnly: true }}
      />

      <TextField
        id='description-read-only'
        label='Description'
        multiline
        rows={4}
        value={recipeIn.description ? recipeIn.description : ''}
        inputProps={{ style: { color: textColor } }}
        InputLabelProps= {{ style: { color: textColor } }}
        sx={{ fieldset: { borderColor: textColor } }}
        InputProps= {{ readOnly: true }}
      />

      </Stack>

    </Box>
  )
}

export default RecipeDetails