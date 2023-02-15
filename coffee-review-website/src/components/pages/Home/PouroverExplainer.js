import React, { useState } from 'react'
import pouroverIcon from '../../../images/v60.svg'
import { Box, Paper, Stack, Collapse } from '@mui/material'

const PouroverExplainer = () => {
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
                        <img src={pouroverIcon} alt='logo' style={{ display: 'block', margin: '0 auto', height: '56px', width: '56px' }} />
                        {!textBoo && 
                            <p style={{ color: '#CBCCCD', width: '100%' }}>Click to see Pourover explainer!</p>
                        }
                        <Collapse in={textBoo}>
                            {textBoo &&
                                <p style={{ color: '#CBCCCD' }}>Pourover is one of the most popular ways to brew third wave coffee! Pourover uses a brewer which extracts the coffee from the beans by using gravity to pull the hot water through the beans. Pourovers are probably the most tricky way to brew coffee. It is done through various pours and even changing the most minute of factors can drastically affect the final cup!</p>
                            }
                        </Collapse>
                    </Stack>
            </Paper>
        </Box>
    )
}

export default PouroverExplainer