import React, { useState } from 'react'
import immersionIcon from '../../../images/immersion.svg'
import { Box, Paper, Stack, Typography, Divider } from '@mui/material'

const ImmersionExplainer = () => {
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
                minHeight: '60px', 
            }}>
                <Typography variant='h3' style={{ textAlign: 'center', fontSize: '1.8em', marginTop: '10px' }}>Immersion</Typography>
                <Stack direction='row' spacing={2} sx={{ padding: '1rem 3rem 3rem' }}>
                    <img src={immersionIcon} alt='logo' style={{ display: 'block', margin: '0 auto', height: '50px', width: '50px' }} />
                    <p style={{ color: '#CBCCCD' }}>Immersion is one of the most classic ways of brewing coffee. Most families will have a cafetiere or french press already in their homes! 
                    <Divider sx={{ backgroundColor: '#CBCCCD', marginTop: '8px', marginBottom: '4px' }}/>Immersion brews coffee by letting the coffee grounds sit immersed in the hot water for a specific amount of time before straining the coffee grounds out of the water. 
                    <Divider sx={{ backgroundColor: '#CBCCCD', marginTop: '8px', marginBottom: '4px' }}/>Many devices exist for this such as the aforementioned cafetiere, but devices such as the Hario Switch and Clever Dripper strain the coffee out the bottom of the brewer through a filter. 
                    <Divider sx={{ backgroundColor: '#CBCCCD', marginTop: '8px', marginBottom: '4px' }}/>Immersion is very verstaile as you could technically brew coffee this way with a bowl and a mesh strainer!</p>
                </Stack>
        </Paper>
    </Box>
  )
}

export default ImmersionExplainer