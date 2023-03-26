import Recipe_Aeropress from "../models/recipe-model-aeropress.js";

export const addAeropress = async (req, res) => {
    const title = req.body.title;
    const coffeeWeight = req.body.coffeeWeight;
    const waterWeight = req.body.waterWeight;
    const grinder = req.body.grinder;
    const grindSize = req.body.grindSize;
    const description = req.body.description;
    const coarse = req.body.coarse;
    const totalTime = req.body.totalTime;
    const inverted = req.body.inverted;
    const origin = req.body.coffeeOrigin;
    const userId = req.body.userId;

    const theRecipe = Recipe_Aeropress.build({
        title: title,
        brewMethod: 'Aeropress',
        coffeeWeight: coffeeWeight,
        waterWeight: waterWeight,
        brewer: 'Aeropress',
        grinder: grinder,
        grindSize: grindSize,
        grindCoarseness: coarse,
        coffeeOrigin: origin,
        inverted: inverted === 'Yes' ? true : false,
        description: description,
        totalTimeMinutes: totalTime,
        UserId: userId
    });

    await theRecipe.save()
    .then(console.log('Aeropress saved!'));
}

export const findAeropressRecipe = async (req, res) => {
    const id = req.body.id;
    if(id) {
        let theRecipe = await Recipe_Aeropress.findOne({
            where: {
                id: id
            }
        });

        res.json(theRecipe);
    }
    else {
        res.json({});
    }
}

export const updateAeropress = async (req, res) => {
    const title = req.body.title;
    const grinder = req.body.grinder;
    const grindSize = req.body.grindSize;
    const description = req.body.description;
    const totalTime = req.body.totalTime;
    const coffeeOrigin = req.body.coffeeOrigin;
    const coffeeWeight = req.body.coffeeWeight;
    const waterWeight = req.body.waterWeight;
    const inverted = req.body.inverted;
    const id = req.body.id;

    const theRecipe = await Recipe_Aeropress.findOne({
        where: {
            id: id
        }
    });

    theRecipe.set({
        title: title,
        grinder: grinder,
        grindSize: grindSize,
        description: description,
        totalTimeMinutes: totalTime,
        coffeeOrigin: coffeeOrigin,
        coffeeWeight: coffeeWeight,
        waterWeight: waterWeight,
        inverted: inverted === 'Yes' ? true : false
    });

    await theRecipe.save()
    .then(res.json({success: true}));
}