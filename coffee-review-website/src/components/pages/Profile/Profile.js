import '../../../App.css'
import { useEffect, useState } from 'react';
import PostHistory from './PostHistory';
import Grid2 from '@mui/material/Unstable_Grid2';

function Profile() {

    console.log(localStorage.getItem('loginUsername'));
    return (
        <>
            <h1 style={{ textAlign: 'center', color: '#CBCCCD' }}>
                {`${localStorage.getItem('loginUsername')}'s Post History`}
            </h1>
            <Grid2 container spacing={2}>
                <PostHistory />
            </Grid2>
        </>
    )
}

export default Profile;