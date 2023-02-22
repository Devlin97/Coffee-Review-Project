import React from 'react'
import { Box,  } from '@mui/material'

const ThirdWaveCoffeeCard = () => {
  return (
    <Box sx={{
        padding: '1rem 1.2rem',
        borderRadius: '12px',
        color: '#CBCCCD',
        maxWidth: '275px',
        backgroundColor: 'rgba(63,76,119,0.2)',
        width: '100%',
        '&:hover': {
            backgroundColor: 'rgba(63,76,119,0.3)',
            transition: 'background-color .2s, box-shadow .2s',
            transitionTimingFunction: 'ease-in-out',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
        },
        cursor: 'pointer',
        height: '150px'
    }}>
        <h2>
            About 
        </h2>
        <p>
            Learn about Third Wave Coffee and the different terminology used on this site.
        </p>
    </Box>
  )
}

export default ThirdWaveCoffeeCard