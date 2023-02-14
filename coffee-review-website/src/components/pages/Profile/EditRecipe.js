import React, { useState, useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const textColor = '#CBCCCD';

const EditRecipe = ({ recipeIn }) => {
  const [title, setTitle] = useState(recipeIn?.title ? recipeIn.title : '');
  const [brewMethod, setBrewMethod] = useState(recipeIn?.brewMethod ? recipeIn.brewMethod : '');
  const [coffeeWeight, setCoffeeWeight] = useState(recipeIn?.coffeeWeight ? recipeIn.coffeeWeight : '');
  const [waterWeight, setWaterWeight] = useState(recipeIn?.waterWeight ? recipeIn.waterWeight : '');
  const [brewer, setBrewer] = useState(recipeIn?.brewer ? recipeIn.brewer : '');
  const [grinder, setGrinder] = useState(recipeIn?.grinder ? recipeIn.grinder : '');
  const [grindSize, setGrindSize] = useState(recipeIn?.grindSize ? recipeIn.grindSize : '');
  const [description, setDescription] = useState(recipeIn?.description ? recipeIn.description : '');
  const [totalTime, setTotalTime] = useState(recipeIn?.totalTimeMinutes ? recipeIn.totalTimeMinutes : '');
  const [origin, setOrigin] = useState(recipeIn?.coffeeOrigin ? recipeIn.coffeeOrigin : '');

  const [grindersList, setGrindersList] = useState([]);
  const [countriesList, setCountriesList] = useState([]);

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
    if(recipeIn) {
      setTitle(recipeIn.title);
      setBrewMethod(recipeIn.brewMethod);
      setCoffeeWeight(recipeIn.coffeeWeight);
      setWaterWeight(recipeIn.waterWeight);
      setBrewer(recipeIn.brewer);
      setGrinder(recipeIn.grinder);
      setGrindSize(recipeIn.grindSize);
      setDescription(recipeIn.description);
      setTotalTime(recipeIn.totalTimeMinutes);
      setOrigin(recipeIn.coffeeOrigin);

      fetchCountries();
      fetchGrinders();
    }
  }, [recipeIn]);

  const handleUpdate = async () => {
    const creds = {
      postId: recipeIn.id,
      title,
      brewMethod: 'Immersion',
      coffeeWeight,
      waterWeight,
      brewer,
      grinder,
      grindSize,
      description,
      totalTime,
      origin,
      userId: JSON.parse(localStorage.getItem('loginID'))
    };

    fetch('/updateRecipeImmersion', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds),
    });
  }

  if(recipeIn) {
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

      <h1 className='create-recipe-h1'>Edit Recipe</h1>

      <TextField 
        id='title-text' 
        label='Title' 
        variant='outlined' 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        color='primary'
        sx={{ input: { color: textColor }, fieldset: { borderColor: textColor } }}
        InputLabelProps= {{ style: { color: textColor } }}
        InputProps= {{ readOnly: true }}
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
        
          {grindersList.map((el, i) => (
            <MenuItem key={i} value={el}>{el}</MenuItem>
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
      
          {countriesList.map((el, i) => (
            <MenuItem key={i} value={el}>{el}</MenuItem>
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

      <Button type='submit' variant='contained' color='success' onClick={() => handleUpdate()}>Update</Button>

      </Stack>

    </Box>
  )}
  else {
    return (
      <>
      </>
    )
  }
}

export default EditRecipe