import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const AeropressDetails = ({ recipeIn = {} }) => {
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
        //backgroundColor: 'rgba(63,76,119,0.6)',
        backgroundColor: 'rgba(38,44,65,0.8)',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingBottom: '50px',
        paddingTop: '50px', 
        borderRadius: '25px', 
        marginTop: '10px',
      }}>
  
      <Grid container spacing={1}>
  
        <Grid xs={12}>
          <h1 className='create-recipe-h1'>{recipeIn.title}</h1>
          <Link to={ '/user/' + recipeIn.UserId } style={{ textDecoration: 'none' }}>
            <p className='create-recipe-h1'>
              <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
                  {`By: ${recipeIn.username}`}
              </Typography>
            </p>
          </Link>
          <p className='create-recipe-h1'>
            <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
                {`${recipeIn.brewer} | ${recipeIn.inverted === true ? 'Inverted' : 'Standard'} | Ratio: ${(recipeIn.waterWeight / recipeIn.coffeeWeight).toFixed(2)}`}
            </Typography>
          </p>
        </Grid>

        <Grid xs={12}>
          <hr/>
        </Grid>
  
        <Grid xs={6}>
        <h3 className='create-recipe-h1'>Coffee In:</h3>
          <p className='create-recipe-h1'>
              <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
              {`${recipeIn.coffeeWeight}g`}
              </Typography>
          </p>
        </Grid>
        
        <Grid xs={6}>
        <h3 className='create-recipe-h1'>Water Weight:</h3>
          <p className='create-recipe-h1'>
            <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
              {`${recipeIn.waterWeight}g`}
            </Typography>
          </p>
        </Grid>

        <Grid xs={12}>
          <hr/>
        </Grid>
  
        <Grid xs={6}>
        <h3 className='create-recipe-h1'>Grinder:</h3>
          <p className='create-recipe-h1'>
            <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
              {recipeIn.grinder}
            </Typography>
          </p>
        </Grid>
  
        <Grid xs={6}>
        <h3 className='create-recipe-h1'>Grind Size:</h3>
          <p className='create-recipe-h1'>
            <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
              {`Clicks: ${recipeIn.grindSize} | Coarse: ${recipeIn.grindCoarseness}`}
            </Typography>
          </p>
        </Grid>

        <Grid xs={12}>
          <hr/>
        </Grid>
  
        <Grid xs={6}>
        <h3 className='create-recipe-h1'>Coffee Origin:</h3>
          <p className='create-recipe-h1'>
            <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
              {recipeIn.coffeeOrigin}
            </Typography>
          </p>
        </Grid>
  
        <Grid xs={6}>
        <h3 className='create-recipe-h1'>Total Time (Minutes):</h3>
          <p className='create-recipe-h1'>
            <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
              {recipeIn.totalTimeMinutes}
            </Typography>
          </p>
        </Grid>

        <Grid xs={12}>
          <hr/>
        </Grid>
  
        <Grid xs={12}>
          <p className='create-recipe-h1'>
            <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
              {recipeIn.description}
            </Typography>
          </p>
        </Grid>
  
      </Grid>
    </Box>
  )
}

export default AeropressDetails