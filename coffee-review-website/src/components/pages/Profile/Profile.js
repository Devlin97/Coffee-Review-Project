import '../../../App.css'
import { useEffect, useState } from 'react';
import PostHistory from './PostHistory';

function Profile() {

    console.log(localStorage.getItem('loginUsername'));
    return (
        <>
            <h1>
                {localStorage.getItem('loginUsername')}
            </h1>
            <PostHistory />
        </>
    )
}

export default Profile;