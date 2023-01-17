import { User, Recipe, Comment } from '../models/index.js';
import bcrypt from 'bcrypt';
const saltRounds = 10;

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
    const username = req.body.username;
    const password = req.body.password;
    
    const theUser = await User.findOne({ where: { name: username }});
    
    console.log(theUser.dataValues.password);

    const compared = await bcrypt.compare(password, theUser.dataValues.password);

    console.log(compared);
}

export const register = async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const age = req.body.age;
    const password = req.body.password;

    const hashed = await bcrypt.hash(password, saltRounds); 

    const theUser = User.build({
        name: username,
        email: email,
        age: age,
        password: hashed
    });

    await theUser.save()
    .then(console.log('saved'));

}

export const addRecipe = async (req, res) => {
    const title = req.body.title;
    const brewMethod = req.body.brewMethod;
    const coffeeWeight = req.body.coffeeWeight;
    const waterWeight = req.body.waterWeight;
    const brewer = req.body.brewer;
    const grinder = req.body.grinder;
    const grindSize = req.body.grindSize;
    const description = req.body.description;
    const totalTime = req.body.totalTime;
    const userId = req.body.userId;

    const theRecipe = Recipe.build({
        title: title,
        brewMethod: brewMethod,
        coffeeWeight: coffeeWeight,
        waterWeight: waterWeight,
        brewer: brewer,
        grinder: grinder,
        grindSize: grindSize,
        description: description,
        totalTimeMinutes: totalTime,
        UserId: userId
    });

    await theRecipe.save()
    .then(console.log('Recipe saved'))
    .then(res.send(
        {msg: 'success'}
    ));
}