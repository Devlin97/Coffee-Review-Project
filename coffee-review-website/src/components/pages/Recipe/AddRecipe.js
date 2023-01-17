import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
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
  const [title, setTitle] = useState();
  const [brewMethod, setBrewMethod] = useState();
  const [coffeeWeight, setCoffeeWeight] = useState();
  const [waterWeight, setWaterWeight] = useState();
  const [brewer, setBrewer] = useState();
  const [grinder, setGrinder] = useState();
  const [grindSize, setGrindSize] = useState();
  const [description, setDescription] = useState();
  const [totalTime, setTotalTime] = useState();

  const handleSubmit = async(e) => {
    e.preventDefault();
  }
  
    return (
    <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type='text' placeholder='Enter Title...' onChange={(e) => setTitle(e.target.value)} />
        <FormControl sx={{ m:1, minWidth: 150 }}>
            <InputLabel id='select-label-brew-method'>Brew Method</InputLabel>
            <Select
                labelId='select-label-brew-method'
                id='select-brew-method'
                value={brewMethod}
                label='Brew Method'
                onChange={(e) => setBrewMethod(e.target.value)}
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


        <label>Title</label>
        <input type='text' placeholder='Enter Title...' onChange={(e) => setTitle(e.target.value)} />  
        <label>Title</label>
        <input type='text' placeholder='Enter Title...' onChange={(e) => setTitle(e.target.value)} />  
        <label>Title</label>
        <input type='text' placeholder='Enter Title...' onChange={(e) => setTitle(e.target.value)} />  
        <label>Title</label>
        <input type='text' placeholder='Enter Title...' onChange={(e) => setTitle(e.target.value)} />  
        <label>Title</label>
        <input type='text' placeholder='Enter Title...' onChange={(e) => setTitle(e.target.value)} />  
        <label>Title</label>
        <input type='text' placeholder='Enter Title...' onChange={(e) => setTitle(e.target.value)} />  
        <label>Title</label>
        <input type='text' placeholder='Enter Title...' onChange={(e) => setTitle(e.target.value)} />    
    </form>
  )
}

export default AddRecipe