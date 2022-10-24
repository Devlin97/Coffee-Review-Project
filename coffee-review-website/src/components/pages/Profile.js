import '../../App.css';
import { useEffect, useState } from 'react';

function Profile() {

    const [test, setTest] = useState({
        name: '',
        age: ''
    });

    useEffect(() => {
        fetch('/testing')
        .then(res => res.json())
        .then(user => {
            setTest({
                name: user.name,
                age: user.number
            });
        });
    });

    return (
        <>
            <h1>
                TEST PROFILE
            </h1>
            <p>
                {test.name}
            </p>
            <p>
                {test.age}
            </p>
        </>
    )
}

export default Profile;