import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import { Typography } from '@mui/material'

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
        backgroundColor: 'rgba(32,38,57,0.6)',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingBottom: '50px',
        paddingTop: '50px', 
        borderRadius: '25px', 
        marginTop: '10px',
      }}>
  
      <Grid container spacing={1}>
  
        <Grid xs={12}>
          <h1 className='create-recipe-h1'>{recipeIn.title ? recipeIn.title : 'Aeropress Magic'}</h1>
          <p className='create-recipe-h1'>
            <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
                Aeropress | Standard
            </Typography>
          </p>
        </Grid>
  
        <Grid xs={6}>
        <h3 className='create-recipe-h1'>Coffee In:</h3>
        <p className='create-recipe-h1'>
            <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
                20g
            </Typography>
          </p>
        </Grid>
        
        <Grid xs={6}>
        <h3 className='create-recipe-h1'>Water Weight:</h3>
        <p className='create-recipe-h1'>
            <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
                250g
            </Typography>
          </p>
        </Grid>
  
        <Grid xs={6}>
        <h3 className='create-recipe-h1'>Grinder:</h3>
        <p className='create-recipe-h1'>
            <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
                1Zpresso JX Pro
            </Typography>
          </p>
        </Grid>
  
        <Grid xs={6}>
        <h3 className='create-recipe-h1'>Grind Size:</h3>
        <p className='create-recipe-h1'>
            <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
                25
            </Typography>
          </p>
        </Grid>
  
        <Grid xs={6}>
        <h3 className='create-recipe-h1'>Coffee Origin:</h3>
        <p className='create-recipe-h1'>
            <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
                Ethiopia
            </Typography>
          </p>
        </Grid>
  
        <Grid xs={6}>
        <h3 className='create-recipe-h1'>Total Time (Minutes):</h3>
        <p className='create-recipe-h1'>
            <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
                4
            </Typography>
          </p>
        </Grid>
  
        <Grid xs={12}>
        <p className='create-recipe-h1'>
          <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
            Adipisicing exercitation tempor magna magna enim ipsum nulla velit velit est. Fugiat non amet consectetur culpa magna ea laboris magna nulla sint adipisicing sunt sunt. Sint velit commodo ea fugiat irure amet ea Lorem reprehenderit magna.
          </Typography>
        </p>
        </Grid>
  
      </Grid>
    </Box>
  )
}

export default AeropressDetails