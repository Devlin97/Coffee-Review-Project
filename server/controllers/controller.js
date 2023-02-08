import { User, Recipe, Comment, Recipe_Pourover, Recipe_Aeropress } from '../models/index.js';
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

export const testFetch = async (req, res) => {
    const theComment = Comment.build({
        text: 'Amazing!',
        UserId: 1,
        RecipeId: 1
    })

    await theComment.save()
    .then(console.log('saved'));
}

export const allRecipes = async (req, res) => {
    let recipes = await Recipe.findAll();
    let pourovers = await Recipe_Pourover.findAll();
    let aeropresses = await Recipe_Aeropress.findAll();

    recipes = [...recipes, ...pourovers, ...aeropresses];

    res.json(recipes);
}

export const userRecipes = async (req, res) => {
    const userId = req.body.userId;

    const recipes = await Recipe.findAll({
        where: {
            UserId: userId
        }
    });
    
    if(recipes.length > 0) {
        recipes.sort((a, b) => {
            return b.createdAt - a.createdAt
        });

        res.json(recipes);
    }
    else {
        res.json({});
    }
}

export const deleteRecipe = async (req, res) => {
    const userId = req.body.userId;
    const postId = req.body.postId;

    await Comment.destroy({
        where: {
            RecipeId: postId
        }
    });
    
    const thePost = await Recipe.findOne({
        where: {
            id: postId
        }
    });

    await thePost.destroy();

    const recipes = await Recipe.findAll({
        where: {
            UserId: userId
        }
    });
    
    if(recipes.length > 0) {
        recipes.sort((a, b) => {
            return b.createdAt - a.createdAt
        });

        res.json(recipes);
    }
    else {
        res.json({});
    }
}

export const getComments = async (req, res) => {
    const postId = req.body.postId;

    const commentsHolder = await Comment.findAll({
        where: {
            RecipeId: postId
        }
    });

    //Sorts the list so most recent comments display first
    commentsHolder.sort((a, b) => { 
        return b.createdAt - a.createdAt
    })

    let comments = [];
    
    for(const coms of commentsHolder) {
        let userHold = await User.findOne({
            where: {
                id: coms.UserId
            }
        });
        
        let holder = {
            id: coms.id,
            text: coms.text,
            name: userHold.name,
            userId: coms.UserId
        }

        comments.push(holder);
    }
    res.json(comments);
}

export const leaveComment = async (req, res) => {
    const postId = req.body.postId;
    const userId = req.body.userId;
    const commentText = req.body.text;

    const theComment = Comment.build({
        text: commentText,
        UserId: userId,
        RecipeId: postId
    });

    await theComment.save()
    .then(console.log('saved'));
    
    //Rerender comments
    const commentsHolder = await Comment.findAll({
        where: {
            RecipeId: postId
        }
    });

    //Sorts the list so most recent comments display first
    commentsHolder.sort((a, b) => { 
        return b.createdAt - a.createdAt
    })

    let comments = [];
    
    for(const coms of commentsHolder) {
        let userHold = await User.findOne({
            where: {
                id: coms.UserId
            }
        });
        
        let holder = {
            id: coms.id,
            text: coms.text,
            name: userHold.name,
            userId: coms.UserId
        }

        comments.push(holder);
    }
    res.json(comments);
}

export const deleteComment = async (req, res) => {
    const commentID = req.body.comId;
    const postId = req.body.postId;

    const theComment = await Comment.findOne({
        where: {
            id: commentID
        }
    });

    await theComment.destroy();

    //Rerender comments
    const commentsHolder = await Comment.findAll({
        where: {
            RecipeId: postId
        }
    });

    //Sorts the list so most recent comments display first
    commentsHolder.sort((a, b) => { 
        return b.createdAt - a.createdAt
    })

    let comments = [];
    
    for(const coms of commentsHolder) {
        let userHold = await User.findOne({
            where: {
                id: coms.UserId
            }
        });
        
        let holder = {
            id: coms.id,
            text: coms.text,
            name: userHold.name,
            userId: coms.UserId
        }

        comments.push(holder);
    }
    res.json(comments);
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

    if(compared) {
        res.json({
            theId: theUser.id,
            username: theUser.name,
            success: true
        });
    }
    else {
        res.json({
            success: false
        })
    }

}

export const register = async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const nameCheck = await User.findOne({ where: { name: username }});

    if(nameCheck) {
        res.json({
            success: false
        });
    }
    else {
        const hashed = await bcrypt.hash(password, saltRounds); 

        const theUser = User.build({
            name: username,
            email: email,
            password: hashed
        });

        await theUser.save()
        .then(console.log('saved'))
        .then(res.json({
            success: true
        }));
    }

}

export const addRecipe = async (req, res) => {
    const title = req.body.title;
    const coffeeWeight = req.body.coffeeWeight;
    const waterWeight = req.body.waterWeight;
    const brewer = req.body.brewer;
    const grinder = req.body.grinder;
    const grindSize = req.body.grindSize;
    const description = req.body.description;
    const totalTime = req.body.totalTime;
    const coffeeOrigin = req.body.coffeeOrigin;
    const userId = req.body.userId;

    const theRecipe = Recipe.build({
        title: title,
        brewMethod: 'Immersion',
        coffeeWeight: coffeeWeight,
        waterWeight: waterWeight,
        brewer: brewer,
        grinder: grinder,
        grindSize: grindSize,
        description: description,
        coffeeOrigin: coffeeOrigin,
        totalTimeMinutes: totalTime,
        UserId: userId
    });

    await theRecipe.save()
    .then(console.log('Recipe saved'))
    .then(res.send(
        {msg: 'success'}
    ));
}

export const updateRecipe = async (req, res) => {
    const title = req.body.title;
    const brewMethod = req.body.brewMethod;
    const coffeeWeight = req.body.coffeeWeight;
    const waterWeight = req.body.waterWeight;
    const brewer = req.body.brewer;
    const grinder = req.body.grinder;
    const grindSize = req.body.grindSize;
    const description = req.body.description;
    const totalTime = req.body.totalTime;
    const coffeeOrigin = req.body.coffeeOrigin;
    const postId = req.body.postId;

    const theRecipe = await Recipe.findOne({
        where: {
            id: postId
        }
    });

    theRecipe.set({
        title: title,
        brewMethod: brewMethod,
        coffeeWeight: coffeeWeight,
        waterWeight: waterWeight,
        brewer: brewer,
        grinder: grinder,
        grindSize: grindSize,
        description: description,
        totalTimeMinutes: totalTime,
        coffeeOrigin: coffeeOrigin
    });

    await theRecipe.save();
}