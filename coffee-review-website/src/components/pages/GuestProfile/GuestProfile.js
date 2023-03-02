import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Stack } from '@mui/material'

const GuestProfile = () => {
    const { id } = useParams();

    const [theUser, setTheUser] = useState({})

    const fetchTheUser = async () => {
        const creds = { idOfUser: id };

        const token = localStorage.getItem('token');
        
        const data = await fetch('/findUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            },
            body: JSON.stringify(creds),
        });

        const jsonData = await data.json()

        setTheUser(jsonData)

        console.log(jsonData)
    }

    useEffect(() => {
        fetchTheUser();
    }, [])

  return (
    <>
        <h1 style={{ textAlign: 'center', color: '#CBCCCD' }}>
            {`${theUser.name}'s Profile`}
        </h1>
        <Stack sx={{ alignItems: 'center', color: '#CBCCCD' }}>
            <p>{`Favourite Brewer: ${theUser.favouriteBrewer}`}</p>
            <p>{`Favourite Coffee Country: ${theUser.favouriteCoffeeType}`}</p>
        </Stack>
    </>
  )
}

export default GuestProfile