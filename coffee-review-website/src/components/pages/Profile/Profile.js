import '../../../App.css'
import { useEffect, useState } from 'react';
import PostHistory from './PostHistory';

function Profile() {

    console.log(localStorage.getItem('loginUsername'));
    return (
        <>
            <h1 style={{ textAlign: 'center', color: '#CBCCCD' }}>
                {`${localStorage.getItem('loginUsername')}'s Post History`}
            </h1>
            <PostHistory />
        </>
    )
}

export default Profile;