import React, { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Alert, Collapse, InputAdornment, Autocomplete } from '@mui/material'
import Box from '@mui/material/Box'
import { color } from '@mui/system'

const textColor = '#CBCCCD';

async function recipeAdd(creds) {

    const token = localStorage.getItem('token');

    fetch('/addRecipe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
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

  const [grindersList, setGrindersList] = useState([]);
  const [countriesList, setCountriesList] = useState([]);

  const [alertBoo, setAlertBoo] = useState(false);

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
        coffeeOrigin: origin
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
    setAlertBoo(true);
  }

  const fetchGrinders = async () => {
    const data = await fetch('/getGrinders');

    const jsonData = await data.json();

    const tempList = await jsonData.map(el => (
        el.name
    ));

    setGrindersList(tempList);
  }

  const fetchCountries = async () => {
    const data = await fetch('/getCountries');

    const jsonData = await data.json();

    const tempList = await jsonData.map(el => (
        el.name
    ));

    setCountriesList(tempList);
  }

  useEffect(() => {
    fetchGrinders();
    fetchCountries();
  }, []);
  
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

        <h1 className='create-recipe-h1'>Create an Immersion Recipe</h1>

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

        {/* <Autocomplete
            disablePortal
            id='auto-box-brewer'
            options={grindersList}
            value={grinder}
            onChange={(event, newValue) => {
                console.log('newvalue ', '');
                newValue === null ? setGrinder('') : setGrinder(newValue)
            }}
            sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
            renderInput={(params) => <TextField {...params} label='Grinder' InputLabelProps={{ style: { color: textColor } }} />}
        /> */}

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
            
                <MenuItem value={'Clever Dripper'}>Clever Dripper</MenuItem>
                <MenuItem value={'Hario Switch'}>Hario Switch</MenuItem>
                <MenuItem value={'Cafetiere'}>Cafetiere</MenuItem>
            </Select>
        </FormControl>

        <TextField
            id='coffee-weight-text' 
            label='Coffee Weight (g)'  
            type='number' 
            onChange={(e) => setCoffeeWeight(parseFloat(e.target.value))}
            value={coffeeWeight} 
            InputProps={{ inputProps: { step: '.1', min: 0 } }}
            InputLabelProps= {{ style: { color: textColor } }}
            sx={{ fieldset: { borderColor: textColor }, input: { color: textColor } }}
        />
        
        <TextField
            id='water-weight-text' 
            label='Water Weight (g)'  
            type='number' 
            onChange={(e) => setWaterWeight(parseFloat(e.target.value))}
            value={waterWeight}
            InputProps={{ inputProps: { step: 'any', min: 0 } }}
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
            
                {grindersList.map(el => (
                    <MenuItem value={el}>{el}</MenuItem>
                ))}
            </Select>
        </FormControl>

        <TextField
            id='grind-size-text' 
            label='Grind Size (clicks)'  
            type='number' 
            onChange={(e) => setGrindSize(parseInt(e.target.value))}
            value={grindSize}
            InputProps= {{ inputProps: { min: 0 } }}
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
            
                {countriesList.map(el => (
                    <MenuItem value={el}>{el}</MenuItem>
                ))}
            </Select>
        </FormControl>

        <TextField
            id='total-time-text' 
            label='Total time (min)'  
            type='number' 
            onChange={(e) => setTotalTime(parseFloat(e.target.value))}
            value={totalTime}
            InputProps={{ inputProps: { step: 'any', min: 0 } }}
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

        <Collapse in={alertBoo}>
            <Alert onClose={() => setAlertBoo(false)}>Successfully added!</Alert>
        </Collapse>

        </Stack>

        </Box>
    </form>
  )
}

export default AddRecipe