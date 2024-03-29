import React, { useState } from 'react'
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import AddRecipe from './AddRecipe';
import PouroverRecipe from './PouroverRecipe';
import AeropressRecipe from './AeropressRecipe';

const textColor = '#CBCCCD'

const CreateRecipe = () => {
    const [selectedMethod, setSelectedMethod] = useState('');
  
    return (
        <>
            <h1 className='sign-in-header' style={{ textAlign: 'center' }}>Choose Recipe Brew Method</h1>
            <Box sx={{ 
                width: '100%', 
                maxWidth: 300, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                minHeight: '10vh', 
                margin: '0 auto', 
                backgroundColor: 'rgba(63,76,119,0.6)',
                borderRadius: '25px',
                marginTop: '5px'
                }}>
                <FormControl sx={{ m:1, minWidth: 200 }}>
                    <InputLabel id='select-label-brew-method' style={{ color: textColor }}>Brew Method</InputLabel>
                    <Select
                        labelId='select-label-brew-method'
                        id='select-brew-method'
                        value={selectedMethod}
                        label='Brew Method'
                        onChange={(e) => setSelectedMethod(e.target.value)}
                        defaultValue=""
                        style={{ color: textColor }}
                        sx={{ fieldset: { borderColor: textColor } }}
                        MenuProps={{
                            anchorOrigin: {
                                vertical:'bottom',
                                horizontal: 'left'
                            },
                            transformOrigin: {
                                vertical: 'top',
                                horizontal: 'left'
                            }
                        }}>
                    
                        <MenuItem value={'Aeropress'}>Aeropress</MenuItem>
                        <MenuItem value={'Immersion'}>Immersion</MenuItem>
                        <MenuItem value={'Pourover'}>Pourover</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            {selectedMethod === 'Immersion' &&
                <AddRecipe />
            }
            {selectedMethod === 'Pourover' && 
                <PouroverRecipe />
            }
            {selectedMethod === 'Aeropress' &&
                <AeropressRecipe />
            }
        </>
  )
}

export default CreateRecipe