import React, { useState, useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Alert, Collapse } from '@mui/material'
import Box from '@mui/material/Box'

const textColor = '#CBCCCD';

async function recipeAdd(creds) {
    fetch('/addPourover', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds),
    })
}

const PouroverRecipe = () => {
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
    const [pours, setPours] = useState([]);
    const [bloomTime, setBloomTime] = useState('');
    const [bloomWeight, setBloomWeight] = useState('');

    const [poursListWater, setPoursListWater] = useState([]);
    const [poursListTime, setPoursListTime] = useState([]);

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
            pours,
            bloomTime,
            bloomWeight,
            poursListTime,
            poursListWater,
            coffeeOrigin: origin,
            userId: JSON.parse(localStorage.getItem('loginID'))
        }
    
        await recipeAdd(recipe);

        console.log(recipe);
    
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
        setPours([]);
        setBloomTime('');
        setBloomWeight('');
        setPoursListWater([]);
        setPoursListTime([]);
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
            id='pours-text' 
            label='Total Pours'  
            type='number' 
            onChange={(e) => setPours(new Array(parseInt(e.target.value)).fill(1))}
            value={pours.length}
            InputLabelProps= {{ style: { color: textColor } }}
            sx={{ fieldset: { borderColor: textColor }, input: { color: textColor } }} 
        />

        {pours.map((el, index) => (
            <>

                <TextField
                    id={`pour${index + 1}-time-text`} 
                    label={`Pour ${index + 1}: Time to Start Pour`}
                    placeholder='In the format X:XX....' 
                    onChange={(e) => setPoursListTime(() => {
                        const listCopy = poursListTime.slice();
                        listCopy[index] = e.target.value;
                        return listCopy;
                    })}
                    value={poursListTime[index]}
                    inputProps={{ pattern:'[0-9]:[0-5][0-5]' }}
                    InputLabelProps= {{ style: { color: textColor } }}
                    sx={{ fieldset: { borderColor: textColor }, input: { color: textColor } }} 
                />
                
                <TextField
                    id={`pour${index + 1}-water-text`} 
                    label={`Pour ${index + 1}: Total Water Weight at End of Pour`} 
                    type='number' 
                    onChange={(e) => setPoursListWater(() => {
                        const listCopy = poursListWater.slice();
                        listCopy[index] = parseInt(e.target.value);
                        return listCopy;
                    })}
                    value={poursListWater[index]}
                    InputLabelProps= {{ style: { color: textColor } }}
                    sx={{ fieldset: { borderColor: textColor }, input: { color: textColor } }} 
                />
            </>
        ))}

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

        <Collapse in={alertBoo}>
            <Alert onClose={() => setAlertBoo(false)}>Successfully added!</Alert>
        </Collapse>

        </Stack>

        </Box>
    </form>
  )
}

export default PouroverRecipe