import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

async function RecipeApp(creds) {
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
    }
    console.log(recipe);
  }
  
  
    return (
    <form onSubmit={handleSubmit}>
        <TextField id='title-text' label='Title' variant='standard' onChange={(e) => setTitle(e.target.value)} />

        <FormControl sx={{ m:1, minWidth: 150 }}>
            <InputLabel id='select-label-brew-method'>Brew Method</InputLabel>
            <Select
                labelId='select-label-brew-method'
                id='select-brew-method'
                value={brewMethod}
                label='Brew Method'
                onChange={(e) => setBrewMethod(e.target.value)}
                defaultValue=""
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
                }}
            >
                <MenuItem value={'Immersion'}>Immersion</MenuItem>
                <MenuItem value={'Pourover'}>Pourover</MenuItem>
                <MenuItem value={'Drip'}>Drip</MenuItem>
            </Select>
        </FormControl>

        <FormControl sx={{ m:1, minWidth: 150 }}>
            <InputLabel id='select-label-brew-method'>Brewer</InputLabel>
            <Select
                labelId='select-label-brewer'
                id='select-brewer'
                value={brewer}
                label='Brewer'
                onChange={(e) => setBrewer(e.target.value)}
                defaultValue=""
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
                }}
            >
                <MenuItem value={'V60'}>V60</MenuItem>
                <MenuItem value={'Kalita Wave'}>Kalita Wave</MenuItem>
                <MenuItem value={'Clever Dripper'}>Drip</MenuItem>
            </Select>
        </FormControl>

        <TextField
            id='coffee-weight-text' 
            label='Coffee Weight (g)'  
            type='number' 
            onChange={(e) => setCoffeeWeight(e.target.value)} 
            InputProps={{ inputProps: { step: 'any' } }}
        />
        
        <TextField
            id='water-weight-text' 
            label='Water Weight (g)'  
            type='number' 
            onChange={(e) => setWaterWeight(e.target.value)}
            InputProps={{ inputProps: { step: 'any' } }} 
        />

        <FormControl sx={{ m:1, minWidth: 150 }}>
            <InputLabel id='select-label-brew-method'>Grinder</InputLabel>
            <Select
                labelId='select-grinder'
                id='select-grinder'
                value={grinder}
                label='Grinder'
                onChange={(e) => setGrinder(e.target.value)}
                defaultValue=""
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
                }}
        >
                <MenuItem value={'C40'}>Commandante C40</MenuItem>
                <MenuItem value={'C2'}>Timemore C2</MenuItem>
                <MenuItem value={'M47'}>Kinu M47</MenuItem>
                <MenuItem value={'JX'}>1Zpresso JX</MenuItem>
                <MenuItem value={'JX Pro'}>1Zpresso JX Pro</MenuItem>
                <MenuItem value={'G1'}>Timemore Chestnut G1</MenuItem>
                <MenuItem value={'Chestnut X'}>Timemore Chestnut X</MenuItem>
                <MenuItem value={'K-Max'}>1Zpresso K-Max</MenuItem>
                <MenuItem value={'K-Plus'}>1Zpresso K-Plus</MenuItem>
            </Select>
        </FormControl>

        <TextField
            id='grind-size-text' 
            label='Grind Size (clicks)'  
            type='number' 
            onChange={(e) => setGrindSize(e.target.value)}
            InputProps={{ inputProps: { step: 'any' } }} 
        />

        <TextField
            id='total-time-text' 
            label='Total time (min)'  
            type='number' 
            onChange={(e) => setTotalTime(e.target.value)}
            InputProps={{ inputProps: { step: 'any' } }} 
        />

        <TextField
            id='description-textarea'
            label='Description'
            multiline
            rows={4}
            placeholder='Description...'
            onChange={(e) => setDescription(e.target.value)}
        />


        <button type='submit' />
    </form>
  )
}

export default AddRecipe