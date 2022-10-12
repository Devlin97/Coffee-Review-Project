export const getPosts = (req, res) => {
    const testData = {
        name: 'test name',
        number: 1234
    };


    res.send(testData);
}

export const testData = (req, res) => {
    const testingThis = {
        firstName: 'John',
        lastName: 'Doe',
        age: 50,
        adress: {
            city: 'Denver',
            state: 'Colorado',
            country: 'USA',
            planet: 'Earth'
        }
    };

    res.send(testingThis);
}