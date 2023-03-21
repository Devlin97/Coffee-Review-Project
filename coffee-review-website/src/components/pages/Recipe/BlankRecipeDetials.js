import React from 'react'
import Box from '@mui/material/Box'

const BlankRecipeDetials = () => {
  return (
    <Box sx={{ 
        width: '100%', 
        maxWidth: 500, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '10vh', 
        height: '300px',
        margin: '0 auto',
        /* background: 'linear-gradient( 112.1deg,  rgba(32,38,57,0.6) 11.4%, rgba(63,76,119,0.6) 70.2% )', */
        backgroundColor: 'rgba(63,76,119,0.6)',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingBottom: '50px',
        paddingTop: '50px', 
        borderRadius: '25px', 
        marginTop: '10px',
      }}>
        <h1 className='create-recipe-h1'>Click on a recipe to see it's details here!</h1>
    </Box>
  )
}

export default BlankRecipeDetials