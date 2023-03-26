import { User, Recipe, Comment, Recipe_Pourover, Recipe_Aeropress } from '../models/index.js';
import jwt from 'jsonwebtoken'
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

export const findTheUser = async(req, res) => {
    let theId = req.body.idOfUser;

    const theUser = await User.findByPk(theId);

    const userToSend = {
        name: theUser.name,
        favouriteBrewer: theUser.favouriteBrewer,
        favouriteOrigin: theUser.favouriteOrigin,
        bio: theUser.bio
    }

    res.json(userToSend);
}

export const updateUsersFacts = async (req, res) => {
    const theId = req.body.userId;
    const favBrew = req.body.favBrewer;
    const bio = req.body.bio;
    const favOrigin = req.body.favOrigin;

    const theUser = await User.findByPk(theId);

    theUser.set({
        bio: bio,
        favouriteBrewer: favBrew,
        favouriteOrigin: favOrigin
    });

    await theUser.save()
    .then(res.json({success: true}))
}

export const allRecipes = async (req, res) => {
    let recipes = await Recipe.findAll();
    let pourovers = await Recipe_Pourover.findAll();
    let aeropresses = await Recipe_Aeropress.findAll();

    let newRecipes = []
    let newPourovers = []
    let newAeropresses = []

    for (const el of recipes) {
        const theUserId = el.UserId
        const theUser = await User.findByPk(theUserId)
        el.dataValues.username = theUser.name
    }

    for (const el of pourovers) {
        const theUserId = el.UserId
        const theUser = await User.findByPk(theUserId)
        el.dataValues.username = theUser.name
    }

    for (const el of aeropresses) {
        const theUserId = el.UserId
        const theUser = await User.findByPk(theUserId)
        el.dataValues.username = theUser.name
    }

    recipes = [...recipes, ...pourovers, ...aeropresses];

    res.json(recipes);
}

export const userRecipes = async (req, res) => {
    const userId = req.body.userId;
    const name = req.body.theUsername;

    const recipesImmersion = await Recipe.findAll({
        where: {
            UserId: userId
        }
    });

    const recipesPour = await Recipe_Pourover.findAll({
        where: {
            UserId: userId
        }
    });

    const recipesAero = await Recipe_Aeropress.findAll({
        where: {
            UserId: userId
        }
    });

    const recipes = [...recipesImmersion, ...recipesPour, ...recipesAero];

    //Find the users other details
    const theUser = await User.findByPk(userId)
    const bio = theUser.dataValues.bio
    const favBrew = theUser.dataValues.favouriteBrewer
    const favOrigin = theUser.dataValues.favouriteOrigin
    
    if(recipes.length > 0) {
        recipes.sort((a, b) => {
            return b.createdAt - a.createdAt
        });

        res.json({recipes, name, bio, favBrew, favOrigin});
    }
    else {
        res.json({name, bio, favBrew, favOrigin});
    }
}

export const deleteRecipe = async (req, res) => {
    const userId = req.body.userId;
    const postId = req.body.postId;
    const brewMethod = req.body.brewMethod;

    if(brewMethod === 'Immersion') {
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
    }

    if(brewMethod === 'Pourover') {
        await Comment.destroy({
            where: {
                RecipePouroverId: postId
            }
        });
        
        const thePost = await Recipe_Pourover.findOne({
            where: {
                id: postId
            }
        });

        await thePost.destroy();
    }

    if(brewMethod === 'Aeropress') {
        await Comment.destroy({
            where: {
                RecipeAeropressId: postId
            }
        });
        
        const thePost = await Recipe_Aeropress.findOne({
            where: {
                id: postId
            }
        });

        await thePost.destroy();
    }

    //Rerender recipes
    const recipesIm = await Recipe.findAll({
        where: {
            UserId: userId
        }
    });

    const recipesPour = await Recipe_Pourover.findAll({
        where: {
            UserId: userId
        }
    });

    const recipesAero = await Recipe_Aeropress.findAll({
        where: {
            UserId: userId
        }
    });

    const recipes = [...recipesIm, ...recipesPour, ...recipesAero];
    
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
    const brewMethod = req.body.brewMethod;
    const userId = req.body.userId;

    let commentsHolder = [];
    
    if(brewMethod === 'Immersion') {
        commentsHolder = await Comment.findAll({
            where: {
                RecipeId: postId
            }
        });
    }
    else if (brewMethod === 'Pourover') {
        commentsHolder = await Comment.findAll({
            where: {
                RecipePouroverId: postId
            }
        });
    }
    else if (brewMethod === 'Aeropress') {
        commentsHolder = await Comment.findAll({
            where: {
                RecipeAeropressId: postId
            }
        });
    }

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
    const brewMethod = req.body.brewMethod;

    if (brewMethod === 'Immersion') {
        const theComment = Comment.build({
            text: commentText,
            UserId: userId,
            RecipeId: postId,
        });
        await theComment.save()
        .then(console.log('saved'));
    }
    else if (brewMethod === 'Pourover') {
        const theComment = Comment.build({
            text: commentText,
            UserId: userId,
            RecipePouroverId: postId,
        });
        await theComment.save()
        .then(console.log('saved'));
    }
    else if (brewMethod === 'Aeropress') {
        const theComment = Comment.build({
            text: commentText,
            UserId: userId,
            RecipeAeropressId: postId,
        });
        await theComment.save()
        .then(console.log('saved'));
    }
    
    //Rerender comments
    let commentsHolder = [];
    
    if(brewMethod === 'Immersion') {
        commentsHolder = await Comment.findAll({
            where: {
                RecipeId: postId
            }
        });
    }
    else if (brewMethod === 'Pourover') {
        commentsHolder = await Comment.findAll({
            where: {
                RecipePouroverId: postId
            }
        });
    }
    else if (brewMethod === 'Aeropress') {
        commentsHolder = await Comment.findAll({
            where: {
                RecipeAeropressId: postId
            }
        });
    }

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
    const brewMethod = req.body.brewMethod;

    const theComment = await Comment.findOne({
        where: {
            id: commentID
        }
    });

    await theComment.destroy();

    //Rerender comments
    let commentsHolder = [];
    
    if(brewMethod === 'Immersion') {
        commentsHolder = await Comment.findAll({
            where: {
                RecipeId: postId
            }
        });
    }
    else if (brewMethod === 'Pourover') {
        commentsHolder = await Comment.findAll({
            where: {
                RecipePouroverId: postId
            }
        });
    }
    else if (brewMethod === 'Aeropress') {
        commentsHolder = await Comment.findAll({
            where: {
                RecipeAeropressId: postId
            }
        });
    }

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

export const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"]

    if(!token) {
        res.send('Authentication Failed')
    }
    else {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if(err) {
                res.json({ 
                    auth: false,
                    message: 'You Failed To Verify Your Token'
                })
            }
            else {
                req.body.userId = decoded.id
                req.body.theUsername = decoded.name
                req.body.moderator = decoded.moderator
                next()
            }
        })
    }
}

export const login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    const theUser = await User.findOne({ where: { name: username }});

    const compared = await bcrypt.compare(password, theUser.dataValues.password);

    if(compared) {
        const id = theUser.id
        const name = theUser.name
        const moderator = theUser.moderator
        const token = jwt.sign({id, name, moderator}, process.env.SECRET, {expiresIn: '24h'})

        res.json({ auth: true, token: token, result: {
            theId: theUser.id,
            username: theUser.name,
            moderator: moderator
        } })
        
        /* res.json({
            theId: theUser.id,
            username: theUser.name,
            success: true
        }); */
    }
    else {
        res.json({
            auth: false
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
            password: hashed,
            moderator: false
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
    const coarse = req.body.coarse;
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
        grindCoarseness: coarse,
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

export const findRecipeImmersion = async (req, res) => {
    const id = req.body.id;

    if(id) {
        const theRecipe = await Recipe.findOne({
            where: {
                id: id
            }
        });

        res.json(theRecipe);
    }
    else {
        res.json();
    }
}

export const updateRecipeImmersion = async (req, res) => {
    const title = req.body.title;
    const brewMethod = req.body.brewMethod;
    const coffeeWeight = req.body.coffeeWeight;
    const waterWeight = req.body.waterWeight;
    const brewer = req.body.brewer;
    const grinder = req.body.grinder;
    const grindSize = req.body.grindSize;
    const description = req.body.description;
    const coarse = req.body.coarse;
    const totalTime = req.body.totalTime;
    const origin = req.body.origin;
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
        grindCoarseness: coarse,
        totalTimeMinutes: totalTime,
        coffeeOrigin: origin
    });

    await theRecipe.save()
    .then(res.json({success: true}));
}

export const getTheId = async (req, res) => {
    const userId = req.body.userId;
    console.log('In get user id, ', userId);
    res.json(userId);
}

export const getTheMod = async (req, res) => {
    const mod = req.body.moderator;
    res.json(mod);
}