import React, { useState } from 'react';

const Register = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [age, setAge] = useState();

  return (
    <form>
        <label>Name (username)</label>
        <input type='text' placeholder='Enter name...' onChange={(e) => setName(e.target.value)} />
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