import React, { useState } from 'react';

async function registerUser(creds) {
  fetch('/register', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds),
  })
}

const Register = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [age, setAge] = useState();

    const handleSubmit = async (e) => {
      e.preventDefault();

      console.log(username, password);
      await registerUser({
          username,
          password,
          email,
          age
      });
      console.log('done');
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>Name (username)</label>
        <input type='text' placeholder='Enter name...' onChange={(e) => setUsername(e.target.value)} />
        <label>Email</label>
        <input type='text' placeholder='Enter email...' onChange={(e) => setEmail(e.target.value)} />
        <label>Age</label>
        <input type='number' onChange={(e) => setAge(e.target.value)} />
        <label>Password</label>
        <input type='password' placeholder='Enter Password...' onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Register;