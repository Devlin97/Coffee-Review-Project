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

    var theUser = await User.findByPk(1);

    console.log(theUser);

    let testRecipe = Recipe.build({
        title: 'Test Recipe 4',
        brewMethod: 'Immersion',
        coffeeWeight: 50.0,
        waterWeight: 650.0,
        brewer: 'clever dripper',
        totalTime: 600.0,
        UserId: theUser.id
    })
        
    await testUser.save()
    .then(await testRecipe.save())
    .then(console.log('saved'))
    .then(
        res.send(theUser)
    );

}

export const testFetch = (req, res) => {
    
    res.json(
        {
            name: 'test',
            number: 1234
        }
    )

}

export const allRecipes = async (req, res) => {
    let recipes = await Recipe.findAll();

    res.json(recipes);
}

export const login = async (req, res) => {
    console.log('here');
    console.log(req.body.username);
    
    //const theUser = await User.findOne({ where: { name: username }});
}