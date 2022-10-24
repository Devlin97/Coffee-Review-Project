import { User, Recipe } from '../models/index.js';

export const getPosts = (req, res) => {
    const testData = {
        name: 'test name',
        number: 1234
    };


    res.send(testData);
}

export const testAddUser = async (req, res) => {
    
    const testUser = User.build({
        name: 'test3',
        email: 'test3@test3.com',
        password: '12345',
        age: 35
    });
    
    console.log(testUser instanceof User);
    console.log(testUser.name);
    
    await testUser.save()
    .then(console.log('saved'));

    res.send(testUser);
}