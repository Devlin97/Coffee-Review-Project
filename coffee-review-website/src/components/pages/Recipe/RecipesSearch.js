import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import pouroverIcon from '../../../images/v60.svg'
import immersionIcon from '../../../images/immersion.svg'
import aeropressIcon from '../../../images/aeropress.svg'
import coffeeIcon from '../../../images/coffee-cup.svg'
import Comment from '../../Comment';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Search from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment';
import RecipeDetails from './RecipeDetails';
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'  
import PouroverDetails from './PouroverDetails';
import AeropressDetails from './AeropressDetails';
import ImmersionDetails from './ImmersionDetails';

const RecipesSearch = ({recipesIn}) => {
  const [theRecipe, setTheRecipe] = useState();
  const [filter, setFilter] = useState("");
  const [pouroverRadio, setPouroverRadio] = useState(false);
  const [immersionRadio, setImmersionRadio] = useState(false);
  const [aeropressRadio, setAeropressRadio] = useState(false);

  console.log(theRecipe);

  const filteredList = recipesIn.filter((entry) => {
    if(pouroverRadio) {
      return (entry.title.toLowerCase().includes(filter.toLowerCase()) || entry.coffeeOrigin.toLowerCase().includes(filter.toLowerCase())) && entry.brewMethod === 'Pourover'
    }
    if(immersionRadio) {
      return (entry.title.toLowerCase().includes(filter.toLowerCase()) || entry.coffeeOrigin.toLowerCase().includes(filter.toLowerCase())) && entry.brewMethod === 'Immersion'
    }
    if(aeropressRadio) {
      return (entry.title.toLowerCase().includes(filter.toLowerCase()) || entry.coffeeOrigin.toLowerCase().includes(filter.toLowerCase())) && entry.brewMethod === 'Aeropress'
    }
    else {
    return entry.title.toLowerCase().includes(filter.toLowerCase()) ||
    entry.coffeeOrigin.toLowerCase().includes(filter.toLowerCase())
    }
  })

  const handlePouroverCheck = () => {
    setPouroverRadio(true);
    setImmersionRadio(false);
    setAeropressRadio(false);
  }

  const handleImmersionCheck = () => {
    setPouroverRadio(false);
    setImmersionRadio(true);
    setAeropressRadio(false);
  }

  const handleAeropressCheck = () => {
    setPouroverRadio(false);
    setImmersionRadio(false);
    setAeropressRadio(true);
  }

  const handleAllCheck = () => {
    setPouroverRadio(false);
    setImmersionRadio(false);
    setAeropressRadio(false);
  }

  return (
    <>
      <Grid container spacing={0}>
        <Grid xs={12} md={4}>
          <Box sx={{ 
            bgcolor: 'lightslategrey', 
            width: 400, 
            marginTop: '10px', 
            marginLeft: '5px', 
            background: 'linear-gradient( 112.1deg,  rgba(32,38,57,0.5) 11.4%, rgba(63,76,119,0.5) 70.2% )' 
            }}>

            <TextField 
              id='recipe-search' 
              label='Search' 
              variant='standard'
              placeholder='Search by Title or Origin...'
              onChange={(e) => setFilter(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Search style={{ color: '#CBCCCD' }} />
                  </InputAdornment>
                )
              }}
              sx={{ width: '100%', input: { color: 'white' } }}
              InputLabelProps={{ style: { color: '#CBCCCD' } }}
            />

            <FormControl sx={{ marginTop: '5px' }}>
              <FormLabel id='brew-method-radio-group-label' style={{ color: '#CBCCCD' }}>Brew Method</FormLabel>
              <RadioGroup
                row
                sx={{ marginLeft: '10px' }}
              >
                <FormControlLabel value='pourover' control={<Radio onClick={() => handlePouroverCheck()} sx={{ color: '#CBCCCD' }} />} label={<img src={pouroverIcon} title='Pourover' alt='Icon of a pourover brewer'/>} />
                <FormControlLabel value='immersion' control={<Radio onClick={() => handleImmersionCheck()} sx={{ color: '#CBCCCD' }} />} label={<img src={immersionIcon} title='Immersion' alt='Icon of a immersion brewer'/>} />
                <FormControlLabel value='aeropress' control={<Radio onClick={() => handleAeropressCheck()} sx={{ color: '#CBCCCD' }} />} label={<img src={aeropressIcon} title='Aeropress' alt='Icon of a aeropress brewer' />}/>
                <FormControlLabel value='all' control={<Radio onClick={() => handleAllCheck()} sx={{ color: '#CBCCCD' }} />} label={<img src={coffeeIcon} title='All' alt='Icon of a cup' />}/>
              </RadioGroup>
            </FormControl>

            <List sx={{ height: '100%', maxHeight: '550px', overflowY: 'auto' }}>
            {filteredList.map((rec, ind) => (
              <>
                <ListItem key={ind}>
                  <ListItemButton onClick={() => setTheRecipe(rec)}>
                    <ListItemIcon>
                      {rec.brewMethod === 'Pourover' &&
                        <img src={pouroverIcon} alt='Icon of a pourover brewer'/>
                      }
                      {rec.brewMethod === 'Immersion' &&
                        <img src={immersionIcon} alt='Icon of a immersion brewer'/>
                      }
                      {rec.brewMethod === 'Aeropress' &&
                        <img src={aeropressIcon} alt='Icon of a aeropress brewer' />
                      }
                    </ListItemIcon>
                    <ListItemText primary={rec.title} secondary={`${rec.brewer} | ${rec.coffeeOrigin}`} secondaryTypographyProps={{ style: { color: '#CBCCCD' } }} sx={{ color: '#CBCCCD' }} />
                  </ListItemButton>
                </ListItem>
                <Divider component='li' sx={{ backgroundColor: '#CBCCCD' }} />
              </>
            ))}
            </List>
          </Box>
        </Grid>
        <Grid xs={12} md={4}>
          {theRecipe?.brewMethod === 'Immersion' ? <ImmersionDetails recipeIn={theRecipe} /> : 
          theRecipe?.brewMethod === 'Pourover' ? <PouroverDetails recipeIn={theRecipe} /> :
          theRecipe?.brewMethod === 'Aeropress' ? <AeropressDetails recipeIn={theRecipe} /> :
          <RecipeDetails recipeIn={theRecipe} />
          }
        </Grid>
        <Grid xs={12} md={4}>
          <Comment postIdIn={theRecipe?.id} />
        </Grid>
      </Grid>
      <Link to='/addRecipe' >
        <Button 
          variant='contained' 
          color='success'
        >
          Create your own Recipe!
        </Button>
      </Link>
    </>
  )
}

export default RecipesSearch;