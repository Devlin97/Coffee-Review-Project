import React, { useState, useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Tooltip, Typography, Slider } from '@mui/material'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const textColor = '#CBCCCD';

const EditPourover = () => {
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [coffeeWeight, setCoffeeWeight] = useState('');
    const [brewer, setBrewer] = useState('');
    const [grinder, setGrinder] = useState('');
    const [grindSize, setGrindSize] = useState('');
    const [description, setDescription] = useState('');
    const [coarse, setCoarse] = useState(1);
    const [totalTime, setTotalTime] = useState('');
    const [origin, setOrigin] = useState('');
    const [pours, setPours] = useState([]);

    const [poursListWater, setPoursListWater] = useState([]);
    const [poursListTime, setPoursListTime] = useState([]);

    const [grindersList, setGrindersList] = useState([]);
    const [countriesList, setCountriesList] = useState([]);
    const [brewersList, setBrewersList] = useState([]);

    const [success, setSuccess] = useState(false);

    const fetchTheRecipe = async () => {
        const creds = { id }; 
        
        const data = await fetch('/findPourover', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(creds),
        });
    
        const jsonData = await data.json();

        const timeList = [];
        const waterList = [];

        await jsonData.pours.forEach(el => {
            timeList.push(el.time)
            waterList.push(el.water)
        })
    
        setTitle(jsonData.title);
        setCoffeeWeight(jsonData.coffeeWeight);
        setBrewer(jsonData.brewer);
        setGrinder(jsonData.grinder);
        setGrindSize(jsonData.grindSize);
        setDescription(jsonData.description);
        setCoarse(jsonData.grindCoarseness);
        setTotalTime(jsonData.totalTimeMinutes);
        setOrigin(jsonData.coffeeOrigin);
        setPoursListWater(waterList);
        setPoursListTime(timeList);
        setPours(jsonData.pours);
    }

    const fetchDropDowns = async () => {
        const data = await fetch('/getDropDowns');
    
        const jsonData = await data.json();
    
        const tempCountries = await jsonData.countries.map(el => (
            el.name
        ))
    
        const tempGrinders = await jsonData.grinders.map(el => (
            el.name
        ))
    
        const tempBrewers = await jsonData.brewers.filter(el => (
            el.brewMethod === 'Pourover'  
        ))
        .map(el => el.name)
    
        setGrindersList(tempGrinders)
        setCountriesList(tempCountries)
        setBrewersList(tempBrewers)
    }
    
    useEffect(() => {
        fetchDropDowns();
        fetchTheRecipe();
    }, []);

    const handleUpdate = async () => {
        const creds = {
            title,
            poursListTime,
            poursListWater,
            brewer,
            grinder,
            grindSize,
            description,
            coarse,
            totalTime,
            coffeeOrigin: origin,
            coffeeWeight,
            id
        };

        const data = await fetch('/updatePourover', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds),
        });

        const jsonData = await data.json();

        if(jsonData.success === true) {
            setSuccess(true);
        }
    }

    if(!success) {
  return (
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

        <h1 className='create-recipe-h1'>Edit Pourover</h1>

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
                    }
                }}>
            
                {brewersList.map((el, i) => (
                    <MenuItem key={i} value={el}>{el}</MenuItem>
                ))}
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

        <Box>
            <Tooltip title='1 for powder, 10 for whole bean' placement='top'>
                <Typography sx={{ color: '#CBCCCD' }}>
                    Coarseness
                </Typography>
            </Tooltip>
            <Slider 
                value= {coarse}
                onChange= {(e, n) => setCoarse(n)} 
                min= {1}
                max= {10}
                step= {1}
                marks
                valueLabelDisplay='auto'
                sx= {{ color: '#CBCCCD' }}
            />
        </Box>

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
            onChange={(e) => setPours(() => {
                const newArray = new Array(parseInt(e.target.value)).fill(1);

                if(newArray.length < poursListTime.length) {
                    const timeCopy = [...poursListTime];
                    timeCopy.splice(newArray.length);
                    setPoursListTime(timeCopy);

                    const waterCopy = [...poursListWater];
                    waterCopy.splice(newArray.length);
                    setPoursListWater(waterCopy);
                }

                return newArray;
            })}
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
                    value={index === 0 ? `0:00` : poursListTime[index]}
                    inputProps={{ pattern:'[0-9]:[0-5][0-5]' }}
                    InputProps={{ readOnly: index === 0 ? true : false }}
                    InputLabelProps= {{ style: { color: textColor }, shrink: true }}
                    sx={{ fieldset: { borderColor: textColor }, input: { color: textColor } }} 
                />
                
                <TextField
                    id={`pour${index + 1}-water-text`} 
                    label={`Pour ${index + 1}: Total Water Weight at End of Pour (g)`} 
                    type='number' 
                    onChange={(e) => setPoursListWater(() => {
                        const listCopy = poursListWater.slice();
                        listCopy[index] = parseInt(e.target.value);
                        return listCopy;
                    })}
                    value={poursListWater[index]}
                    InputLabelProps= {{ style: { color: textColor }, shrink: true }}
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

        <Button onClick={() => handleUpdate()} variant='contained' color='success'>Submit</Button>

        </Stack>

        </Box>
  )
    }
    else {
        return (
            <Box sx={{ width: '100%', maxWidth: 500, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh', margin: '0 auto' }}>
            <Stack 
              spacing={2}
              direction='column'
              alignItems='stretch'
              width='100%'
              sx={{ 
                backgroundColor: 'rgba(63,76,119,0.6)', 
                paddingLeft: '15px',
                paddingRight: '15px',
                paddingBottom: '50px',
                paddingTop: '50px', 
                borderRadius: '25px',
                marginTop: '15px' 
              }}>
              <h1 className='create-recipe-h1'>Update Successful</h1>
              <Button variant='contained' color='success'>
                <Link to={'/profile'} style={{ textDecoration: 'none', color: textColor }}>
                  Back to Profile
                </Link>
              </Button>
            </Stack>
          </Box>
        )
    }
}

export default EditPourover