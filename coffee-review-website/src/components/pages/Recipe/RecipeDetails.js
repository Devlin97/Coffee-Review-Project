import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'

const textColor = '#CBCCCD';

const RecipeDetails = ({ recipeIn = {} }) => {
  
  return (
    <Box sx={{ 
      width: '100%', 
      maxWidth: 500, 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '10vh', 
      margin: '0',
      /* background: 'linear-gradient( 112.1deg,  rgba(32,38,57,0.6) 11.4%, rgba(63,76,119,0.6) 70.2% )', */
      backgroundColor: 'rgba(32,38,57,0.6)',
      paddingLeft: '15px',
      paddingRight: '15px',
      paddingBottom: '50px',
      paddingTop: '50px', 
      borderRadius: '25px', 
      marginTop: '10px',
    }}>

    <Grid container spacing={2}>

      <Grid xs={12}>
        <h1 className='create-recipe-h1'>{recipeIn.title}</h1>
      </Grid>

      <Grid xs={12}>
        <h2 className='create-recipe-h1'>{recipeIn.title}</h2>
        
        {/* <TextField 
          id='title-read-only' 
          label='Title' 
          variant='standard' 
          value={recipeIn.title ? recipeIn.title : ''}
          color='primary'
          sx={{ input: { color: textColor }, fieldset: { borderColor: textColor }, width: '100%' }}
          InputLabelProps= {{ style: { color: textColor } }}
          InputProps= {{ readOnly: true }}
        /> */}
      </Grid>

      <Grid xs={6}>
        <TextField 
          id='brew-method-read-only' 
          label='Brew Method' 
          variant='standard' 
          value={recipeIn.brewMethod ? recipeIn.brewMethod : ''}
          color='primary'
          sx={{ input: { color: textColor }, fieldset: { borderColor: textColor }, width: '100%'}}
          InputLabelProps= {{ style: { color: textColor } }}
          InputProps= {{ readOnly: true }}
        />
      </Grid>

      <Grid xs={6}>
        <TextField 
          id='brewer-read-only' 
          label='Brewer' 
          variant='standard' 
          value={recipeIn.brewer ? recipeIn.brewer : ''}
          color='primary'
          sx={{ input: { color: textColor }, fieldset: { borderColor: textColor }, width: '100%' }}
          InputLabelProps= {{ style: { color: textColor } }}
          InputProps= {{ readOnly: true }}
        />
      </Grid>

      <Grid xs={6}>
        <TextField 
          id='coffee-weight-read-only' 
          label='Coffee Weight' 
          variant='outlined' 
          value={recipeIn.coffeeWeight ? recipeIn.coffeeWeight : ''}
          color='primary'
          sx={{ input: { color: textColor }, fieldset: { borderColor: textColor }, width: '100%' }}
          InputLabelProps= {{ style: { color: textColor } }}
          InputProps= {{ readOnly: true }}
        />
      </Grid>
      
      <Grid xs={6}>
        <TextField 
          id='water-weight-read-only' 
          label='Water Weight' 
          variant='outlined' 
          value={recipeIn.waterWeight ? recipeIn.waterWeight : ''}
          color='primary'
          sx={{ input: { color: textColor }, fieldset: { borderColor: textColor }, width: '100%' }}
          InputLabelProps= {{ style: { color: textColor } }}
          InputProps= {{ readOnly: true }}
        />
      </Grid>

      <Grid xs={6}>
        <TextField 
          id='grinder-read-only' 
          label='Grinder' 
          variant='outlined' 
          value={recipeIn.grinder ? recipeIn.grinder : ''}
          color='primary'
          sx={{ input: { color: textColor }, fieldset: { borderColor: textColor }, width: '100%' }}
          InputLabelProps= {{ style: { color: textColor } }}
          InputProps= {{ readOnly: true }}
        />
      </Grid>

      <Grid xs={6}>
        <TextField 
          id='grind-size-read-only' 
          label='Grind Size' 
          variant='outlined' 
          value={recipeIn.grindSize ? recipeIn.grindSize : ''}
          color='primary'
          sx={{ input: { color: textColor }, fieldset: { borderColor: textColor }, width: '100%' }}
          InputLabelProps= {{ style: { color: textColor } }}
          InputProps= {{ readOnly: true }}
        />
      </Grid>

      <Grid xs={6}>
        <TextField 
          id='coffee-origin-read-only' 
          label='Coffee Origin' 
          variant='outlined' 
          value={recipeIn.coffeeOrigin ? recipeIn.coffeeOrigin : ''}
          color='primary'
          sx={{ input: { color: textColor }, fieldset: { borderColor: textColor }, width: '100%' }}
          InputLabelProps= {{ style: { color: textColor } }}
          InputProps= {{ readOnly: true }}
        />
      </Grid>

      <Grid xs={6}>
        <TextField 
          id='total-time-read-only' 
          label='Total Time (Minutes)' 
          variant='outlined' 
          value={recipeIn.totalTimeMinutes ? recipeIn.totalTimeMinutes : ''}
          color='primary'
          sx={{ input: { color: textColor }, fieldset: { borderColor: textColor }, width: '100%' }}
          InputLabelProps= {{ style: { color: textColor } }}
          InputProps= {{ readOnly: true }}
        />
      </Grid>

      <Grid xs={12}>
        <TextField
          id='description-read-only'
          label='Description'
          multiline
          rows={4}
          value={recipeIn.description ? recipeIn.description : ''}
          inputProps={{ style: { color: textColor } }}
          InputLabelProps= {{ style: { color: textColor } }}
          sx={{ fieldset: { borderColor: textColor }, width: '100%' }}
          InputProps= {{ readOnly: true }}
        />
      </Grid>

    </Grid>
  </Box>
  )
}

export default RecipeDetails