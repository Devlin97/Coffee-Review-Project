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

const EditPourover = ({ recipeIn }) => {
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
        if(recipeIn){
            setTitle(recipeIn.title)
            setCoffeeWeight(recipeIn.coffeeWeight)
            setWaterWeight(recipeIn.waterWeight)
        }

        fetchGrinders();
        fetchCountries();
    }, []);

  return (
    <div>EditPourover</div>
  )
}

export default EditPourover