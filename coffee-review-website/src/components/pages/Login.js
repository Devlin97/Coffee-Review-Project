import React, { useState } from 'react';

async function loginUser(creds) {
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds),
    })
}

const Login = () => {
  
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(username, password);
        await loginUser({
            username,
            password
        });
        console.log('done');
    }
  
    return (
    <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type='text' placeholder='Enter Username...' name='username' onChange={(e) => setUsername(e.target.value)} />
        <label>Password</label>
        <input type='password' placeholder='Enter Password...' name='password' onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Log in</button>
    </form>
  )
}

export default Login;