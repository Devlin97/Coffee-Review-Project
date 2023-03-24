import React, { useState } from 'react'
import { Box, Stack, TextField } from '@mui/material'

const textColor = '#CBCCCD'

const RatioCalculator = () => {
    const [coffeNo, setCoffeeNo] = useState(0);
    const [ratioNo, setRatioNo] = useState(0);
    const [waterNo, setWaterNo] = useState(0);

    const [coffeNo1, setCoffeeNo1] = useState(0);
    const [ratioNo1, setRatioNo1] = useState(0);
    const [waterNo1, setWaterNo1] = useState(0);




  return (
    <>
    <Box sx={{ width: '100%', height: 600 , justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
    
        <Stack
            spacing={4}
            direction='column'
            alignItems='center'
            sx={{ 
                background: 'linear-gradient( 112.1deg,  rgba(32,38,57,0.6) 11.4%, rgba(63,76,119,0.6) 70.2% )', 
                paddingLeft: '100px',
                paddingRight: '100px',
                paddingBottom: '50px',
                paddingTop: '50px', 
                borderRadius: '25px' 
            }}
        >

            <h2 className='sign-in-header'>Calculate Water Weight</h2>

            <TextField 
                id='coffee-no-text' 
                label='Desired Coffee Weight' 
                variant='standard'
                type='number' 
                onChange={(e) => {
                    setCoffeeNo(e.target.value)
                    setWaterNo(e.target.value * ratioNo)
                }} 
                value={coffeNo}
                color='primary'
                sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
                InputLabelProps= {{ style: { color: textColor } }}
            />

            <TextField
                id='ratio-no-text' 
                label='Desired Ratio' 
                variant='standard'
                type='number' 
                onChange={async(e) => {
                    setRatioNo(e.target.value)
                    setWaterNo(e.target.value * coffeNo)
                }} 
                value={ratioNo}
                color='primary'
                sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
                InputLabelProps= {{ style: { color: textColor } }}
            />

            <TextField
                id='water-no-text' 
                label='Needed Water Weight (g)' 
                variant='standard'
                value={waterNo}
                color='primary'
                sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
                InputLabelProps= {{ style: { color: textColor } }}
                InputProps= {{ readOnly: true }}
            />

        </Stack>
    </Box>
    
    <Box sx={{ width: '100%', height: 600 , justifyContent: 'center', display: 'flex', alignItems: 'center' }}>

        <Stack
            spacing={4}
            direction='column'
            alignItems='center'
            sx={{ 
                background: 'linear-gradient( 112.1deg,  rgba(32,38,57,0.6) 11.4%, rgba(63,76,119,0.6) 70.2% )', 
                paddingLeft: '100px',
                paddingRight: '100px',
                paddingBottom: '50px',
                paddingTop: '50px', 
                borderRadius: '25px' 
            }}
        >

            <h2 className='sign-in-header'>Calculate Coffee Weight</h2>

            <TextField 
                id='water-no-1-text' 
                label='Desired Water Weight (g)' 
                variant='standard'
                type='number' 
                onChange={(e) => {
                    setWaterNo1(e.target.value)
                    setCoffeeNo1(e.target.value / ratioNo1)
                }} 
                value={waterNo1}
                color='primary'
                sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
                InputLabelProps= {{ style: { color: textColor } }}
            />

            <TextField
                id='brewer-add-text' 
                label='Desired Ratio' 
                variant='standard'
                type='number' 
                onChange={async(e) => {
                    setRatioNo1(e.target.value)
                    setCoffeeNo1(e.target.value / waterNo1)
                }} 
                value={ratioNo1}
                color='primary'
                sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
                InputLabelProps= {{ style: { color: textColor } }}
            />

            <TextField
                id='brewer-add-text' 
                label='Needed Coffee Weight (g)' 
                variant='standard'
                value={coffeNo1}
                color='primary'
                sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
                InputLabelProps= {{ style: { color: textColor } }}
                InputProps= {{ readOnly: true }}
            />

        </Stack>
    
    </Box>
    </>
  )
}

export default RatioCalculator