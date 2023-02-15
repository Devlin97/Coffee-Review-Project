import React, { useState } from 'react'
import immersionIcon from '../../../images/immersion.svg'
import { Box, Paper, Stack, Collapse, Divider } from '@mui/material'

const ImmersionExplainer = () => {
    const [textBoo, setTextBoo] = useState(false);

  return (
    <Box onClick={() => setTextBoo(textBoo === true ? false : true)} sx={{ cursor: 'pointer', margin: '10px' }}>
        <Paper 
            elevation={3} 
            sx={{ 
                maxWidth: '450px', 
                width: '100%', 
                padding: '10px', 
                backgroundColor: 'rgba(63,76,119,0.6)',
                color: '#CBCCCD' 
            }}>
                <Stack direction='row' spacing={2}>
                    <img src={immersionIcon} alt='logo' style={{ display: 'block', margin: '0 auto', height: '50px', width: '50px' }} />
                    {!textBoo && 
                        <p style={{ color: '#CBCCCD', width: '100%' }}>Click to see Immersion explainer!</p>
                    }
                    <Collapse in={textBoo}>
                        {textBoo &&
                            <p style={{ color: '#CBCCCD' }}>Immersion is one of the most classic ways of brewing coffee. Most families will have a cafetiere or french press already in their homes! 
                            <Divider sx={{ backgroundColor: '#CBCCCD', marginTop: '8px', marginBottom: '4px' }}/>Immersion brews coffee by letting the coffee grounds sit immersed in the hot water for a specific amount of time before straining the coffee grounds out of the water. 
                            <Divider sx={{ backgroundColor: '#CBCCCD', marginTop: '8px', marginBottom: '4px' }}/>Many devices exist for this such as the aforementioned cafetiere, but devices such as the Hario Switch and Clever Dripper strain the coffee out the bottom of the brewer through a filter. 
                            <Divider sx={{ backgroundColor: '#CBCCCD', marginTop: '8px', marginBottom: '4px' }}/>Immersion is very verstaile as you could technically brew coffee this way with a bowl and a mesh strainer!</p>
                        }
                    </Collapse>
                </Stack>
        </Paper>
    </Box>
  )
}

export default ImmersionExplainer