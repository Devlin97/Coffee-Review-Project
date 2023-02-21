import React, { useState } from 'react'
import pouroverIcon from '../../../images/v60.svg'
import { Box, Paper, Stack, Collapse, Divider } from '@mui/material'

const PouroverExplainer2 = () => {
    return (
        <Box sx={{ cursor: 'pointer', margin: '10px' }}>
            <Paper 
                elevation={3} 
                sx={{ 
                    maxWidth: '450px', 
                    width: '100%', 
                    padding: '10px', 
                    backgroundColor: 'rgba(63,76,119,0.6)',
                    color: '#CBCCCD',
                    minHeight: '60px' 
                }}>
                    <Stack direction='row' spacing={2}>
                        <img src={pouroverIcon} alt='logo' style={{ display: 'block', margin: '0 auto', height: '56px', width: '56px' }} />
                        <p style={{ color: '#CBCCCD' }}>Pourover is one of the most popular ways to brew third wave coffee! 
                        <Divider sx={{ backgroundColor: '#CBCCCD', marginTop: '8px', marginBottom: '4px' }}/>Pourover uses a brewer which extracts the coffee from the beans by using gravity to pull the hot water through the beans. 
                        <Divider sx={{ backgroundColor: '#CBCCCD', marginTop: '8px', marginBottom: '4px' }}/>Pourovers are probably the most tricky way to brew coffee. It is done through various pours and even changing the most minute of factors can drastically affect the final cup!</p>
                    </Stack>
            </Paper>
        </Box>
    )
}

export default PouroverExplainer2