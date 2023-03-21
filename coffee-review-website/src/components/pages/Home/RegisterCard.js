import React from 'react'
import { Box,  } from '@mui/material'
import { Link } from 'react-router-dom'

const RegisterCard = () => {
  return (
    <Link to="/register" style={{ textDecoration: 'none' }}>
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
            height: '150px',
            marginBottom: '8px'
        }}>
            <h2>
                Register
            </h2>
            <p>
                Create an account to become involved in the community.
            </p>
        </Box>
    </Link>
  )
}

export default RegisterCard