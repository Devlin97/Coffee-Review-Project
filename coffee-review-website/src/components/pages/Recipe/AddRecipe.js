import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'

const textColor = '#CBCCCD';

async function recipeAdd(creds) {
    fetch('/addRecipe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds),
    })
}

const AddRecipe = () => {
  const [title, setTitle] = useState('');
  const [brewMethod, setBrewMethod] = useState('');
  const [coffeeWeight, setCoffeeWeight] = useState('');
  const [waterWeight, setWaterWeight] = useState('');
  const [brewer, setBrewer] = useState('');
  const [grinder, setGrinder] = useState('');
  const [grindSize, setGrindSize] = useState('');
  const [description, setDescription] = useState('');
  const [totalTime, setTotalTime] = useState('');
  const [origin, setOrigin] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const recipe = {
        title,
        brewMethod,
        coffeeWeight,
        waterWeight,
        brewer,
        grinder,
        grindSize,
        description,
        totalTime,
        coffeeOrigin: origin,
        userId: JSON.parse(localStorage.getItem('loginID'))
    }

    await recipeAdd(recipe);

    setTitle('');
    setBrewMethod('');
    setCoffeeWeight('');
    setWaterWeight('');
    setBrewer('');
    setGrinder('');
    setGrindSize('');
    setDescription('');
    setTotalTime('');
    setOrigin('');
    alert('Thank you for submitting your recipe!');
  }
  
  
    return (
    <form onSubmit={handleSubmit}>

        <Box sx={{ width: '100%', maxWidth: 500, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh', margin: '0 auto' }}>

        <Stack 
            spacing={2}
            direction='column'
            alignItems='stretch'
            width='100%'
            sx={{ 
                background: 'linear-gradient( 112.1deg,  rgba(32,38,57,0.6) 11.4%, rgba(63,76,119,0.6) 70.2% )', 
                paddingLeft: '15px',
                paddingRight: '15px',
                paddingBottom: '50px',
                paddingTop: '50px', 
                borderRadius: '25px',
                marginTop: '15px' 
            }}>

        <h1 className='create-recipe-h1'>Create a Recipe</h1>

        <TextField 
        id='title-text' 
        label='Title' 
        variant='outlined' 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        color='primary'
        sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
        InputLabelProps= {{ style: { color: textColor } }}
        />

        <FormControl sx={{ m:1, minWidth: 200 }}>
            <InputLabel id='select-label-brew-method' style={{ color: textColor }}>Brew Method</InputLabel>
            <Select
                labelId='select-label-brew-method'
                id='select-brew-method'
                value={brewMethod}
                label='Brew Method'
                onChange={(e) => setBrewMethod(e.target.value)}
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
                    },
                    getContentAnchorEl: null
                }}>
            
                <MenuItem value={'Immersion'}>Immersion</MenuItem>
                <MenuItem value={'Pourover'}>Pourover</MenuItem>
                <MenuItem value={'Aeropress'}>Aeropress</MenuItem>
            </Select>
        </FormControl>

        <FormControl sx={{ m:1, minWidth: 150 }}>
            <InputLabel id='select-label-brewer' style={{ color: textColor }}>Brewer</InputLabel>
            <Select
                labelId='select-label-brewer'
                id='select-brewer'
                value={brewer}
                label='Brewer'
                onChange={(e) => setBrewer(e.target.value)}
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
                    },
                    getContentAnchorEl: null
                }}>
            
                <MenuItem value={'Aeropress'}>Aeropress</MenuItem>
                <MenuItem value={'V60'}>V60</MenuItem>
                <MenuItem value={'Kalita Wave'}>Kalita Wave</MenuItem>
                <MenuItem value={'Clever Dripper'}>Clever Dripper</MenuItem>
                <MenuItem value={'Drip'}>Drip</MenuItem>
            </Select>
        </FormControl>

        <TextField
            id='coffee-weight-text' 
            label='Coffee Weight (g)'  
            type='number' 
            onChange={(e) => setCoffeeWeight(parseFloat(e.target.value))}
            value={coffeeWeight} 
            InputProps={{ inputProps: { step: '.1' } }}
            InputLabelProps= {{ style: { color: textColor } }}
            sx={{ fieldset: { borderColor: textColor }, input: { color: textColor } }}
        />
        
        <TextField
            id='water-weight-text' 
            label='Water Weight (g)'  
            type='number' 
            onChange={(e) => setWaterWeight(parseFloat(e.target.value))}
            value={waterWeight}
            InputProps={{ inputProps: { step: 'any' } }}
            InputLabelProps= {{ style: { color: textColor } }}
            sx={{ fieldset: { borderColor: textColor }, input: { color: textColor } }} 
        />

        <FormControl sx={{ m:1, minWidth: 150 }}>
            <InputLabel id='select-label-grinder' style={{ color: textColor }}>Grinder</InputLabel>
            <Select
                labelId='select-grinder'
                id='select-grinder'
                value={grinder}
                label='Grinder'
                onChange={(e) => setGrinder(e.target.value)}
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
                    },
                    getContentAnchorEl: null
                }}>
            
                <MenuItem value={'Commandante C40'}>Commandante C40</MenuItem>
                <MenuItem value={'Timemore C2'}>Timemore C2</MenuItem>
                <MenuItem value={'Kinu M47'}>Kinu M47</MenuItem>
                <MenuItem value={'1Zpresso JX'}>1Zpresso JX</MenuItem>
                <MenuItem value={'1Zpresso JX Pro'}>1Zpresso JX Pro</MenuItem>
                <MenuItem value={'Timemore Chestnut G1'}>Timemore Chestnut G1</MenuItem>
                <MenuItem value={'Timemore Chestnut X'}>Timemore Chestnut X</MenuItem>
                <MenuItem value={'1Zpresso K-Max'}>1Zpresso K-Max</MenuItem>
                <MenuItem value={'1Zpresso K-Plus'}>1Zpresso K-Plus</MenuItem>
            </Select>
        </FormControl>

        <TextField
            id='grind-size-text' 
            label='Grind Size (clicks)'  
            type='number' 
            onChange={(e) => setGrindSize(parseInt(e.target.value))}
            value={grindSize}
            InputLabelProps= {{ style: { color: textColor } }}
            sx={{ fieldset: { borderColor: textColor }, input: { color: textColor } }} 
        />

        <FormControl sx={{ m:1, minWidth: 150 }}>
            <InputLabel id='select-label-origin' style={{ color: textColor }}>Coffee Origin</InputLabel>
            <Select
                labelId='select-origin'
                id='select-origin'
                value={origin}
                label='Coffee Origin'
                onChange={(e) => setOrigin(e.target.value)}
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
                    },
                    getContentAnchorEl: null
                }}>
            
                <MenuItem value={'Ethiopia'}>Ethiopia</MenuItem>
                <MenuItem value={'Brazil'}>Brazil</MenuItem>
                <MenuItem value={'Honduras'}>Honduras</MenuItem>
                <MenuItem value={'Kenya'}>Kenya</MenuItem>
                <MenuItem value={'Rwanda'}>Rwanda</MenuItem>
                <MenuItem value={'Burundi'}>Burundi</MenuItem>
                <MenuItem value={'El Salvador'}>El Salvador</MenuItem>
            </Select>
        </FormControl>

        <TextField
            id='total-time-text' 
            label='Total time (min)'  
            type='number' 
            onChange={(e) => setTotalTime(parseFloat(e.target.value))}
            value={totalTime}
            InputProps={{ inputProps: { step: 'any' } }}
            InputLabelProps= {{ style: { color: textColor } }}
            sx={{ fieldset: { borderColor: textColor }, input: { color: textColor } }} 
        />

        <TextField
            id='description-textarea'
            label='Description'
            multiline
            rows={4}
            placeholder='Description...'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            inputProps={{ style: { color: textColor } }}
            InputLabelProps= {{ style: { color: textColor } }}
            sx={{ fieldset: { borderColor: textColor } }}
        />

        <Button type='submit' variant='contained' color='success'>Submit</Button>

        </Stack>

        </Box>
    </form>
  )
}

export default AddRecipe