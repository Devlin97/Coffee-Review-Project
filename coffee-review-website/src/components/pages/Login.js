import React, { useState } from 'react';

const Login = () => {
  
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        }
        
        fetch('/login', options)
        .then(data => data.json())
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