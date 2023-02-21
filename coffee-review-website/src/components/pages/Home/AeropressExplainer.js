import React, { useState } from 'react'
import aeropressIcon from '../../../images/aeropress.svg'
import { Box, Paper, Stack, Typography, Divider } from '@mui/material'

const AeropressExplainer = () => {
    const [textBoo, setTextBoo] = useState(false);

  return (
    <Box sx={{ cursor: 'pointer', margin: '10px' }}>
        <Paper 
            elevation={3} 
            sx={{ 
                maxWidth: '450px', 
                width: '100%', 
                padding: '5px', 
                backgroundColor: 'rgba(63,76,119,0.6)',
                color: '#CBCCCD',
                minHeight: '60px'
            }}>
                <Typography variant='h3' style={{ textAlign: 'center', fontSize: '1.8em', marginTop: '10px' }}>Aeropress</Typography>
                <Stack direction='row' spacing={2} sx={{ padding: '1rem 3rem 3rem' }}>
                    <img src={aeropressIcon} alt='logo' style={{ display: 'block', margin: '0 auto', height: '62px', width: '62px' }} />
                    <p style={{ color: '#CBCCCD' }}>Aeropress is one the most versatile and fun ways to brew coffee. It is technically an immersion brewer, but different enough to warrant its own category. 
                    <Divider sx={{ backgroundColor: '#CBCCCD', marginTop: '8px', marginBottom: '4px' }}/>The coffee brews the same way was an immersion brewer but at the end you need to push the plunger through the brew chamber which seperates the coffee from the grounds and leaves a puck of grounds which can be easily disposed of! 
                    <Divider sx={{ backgroundColor: '#CBCCCD', marginTop: '8px', marginBottom: '4px' }}/>The aeropress has two different variations in which to brew the coffee. This is the standard way of brewing and the inverted way of brewing. 
                    <Divider sx={{ backgroundColor: '#CBCCCD', marginTop: '8px', marginBottom: '4px' }}/>In the standard way the aeropress sits on top of the mug and just needs plunged when the coffee is done. With this method a small amount of coffee can drip out before the brew is done. 
                    <Divider sx={{ backgroundColor: '#CBCCCD', marginTop: '8px', marginBottom: '4px' }}/>With the inverted method the brewer is set up upside down and has to be flipped onto the mug before the coffee can be plunged.</p>
                </Stack>
        </Paper>
    </Box>
  )
}

export default AeropressExplainer