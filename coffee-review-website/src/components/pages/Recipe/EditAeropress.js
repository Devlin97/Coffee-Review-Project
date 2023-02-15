import React, { useState, useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const textColor = '#CBCCCD';

const EditAeropress = () => {
  const { id } = useParams(); 

  const [title, setTitle] = useState('');
  const [coffeeWeight, setCoffeeWeight] = useState('');
  const [waterWeight, setWaterWeight] = useState('');
  const [grinder, setGrinder] = useState('');
  const [grindSize, setGrindSize] = useState('');
  const [description, setDescription] = useState('');
  const [totalTime, setTotalTime] = useState('');
  const [origin, setOrigin] = useState('');
  const [inverted, setInverted] = useState('');

  const [grindersList, setGrindersList] = useState([]);
  const [countriesList, setCountriesList] = useState([]);

  const [success, setSuccess] = useState(false);

  const fetchTheRecipe = async () => {
    const creds = { id }; 
    
    const data = await fetch('/findAeropress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds),
    });

    const jsonData = await data.json();

    setTitle(jsonData.title);
    setCoffeeWeight(jsonData.coffeeWeight);
    setWaterWeight(jsonData.waterWeight);
    setGrinder(jsonData.grinder);
    setGrindSize(jsonData.grindSize);
    setDescription(jsonData.description);
    setTotalTime(jsonData.totalTimeMinutes);
    setOrigin(jsonData.coffeeOrigin);
    setInverted(jsonData.inverted === true ? 'Yes' : 'No');
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
    fetchTheRecipe();
  }, []);

  const handleUpdate = async () => {
    const creds = {
      title,
      grinder,
      grindSize,
      description,
      totalTime,
      coffeeOrigin: origin,
      coffeeWeight,
      waterWeight,
      inverted,
      id
    };

    const data = await fetch('/updateAeropress', {
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
                
          <h1 className='create-recipe-h1'>Update Aeropress Recipe</h1>

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
                }
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
                }
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
            InputProps={{ inputProps: { step: 'any' } }}
            InputLabelProps= {{ style: { color: textColor } }}
            sx={{ fieldset: { borderColor: textColor }, input: { color: textColor } }} 
          />

          <FormControl sx={{ m:1, minWidth: 150 }}>
            <InputLabel id='select-label-inverted' style={{ color: textColor }}>Inverted</InputLabel>
            <Select
              labelId='select-inverted'
              id='select-inverted'
              value={inverted}
              label='Inverted?'
              onChange={(e) => setInverted(e.target.value)}
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
          
              <MenuItem value={'Yes'}>Yes</MenuItem>
              <MenuItem value={'No'}>No</MenuItem>
            </Select>
          </FormControl>

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

export default EditAeropress