import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
        <p>{theUser.name}</p>
        <p>{theUser.favouriteBrewer}</p>
        <p>{theUser.favouriteCoffeeType}</p>
    </>
  )
}

export default GuestProfile