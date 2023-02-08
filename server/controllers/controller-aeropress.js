import Recipe_Aeropress from "../models/recipe-model-aeropress.js";

export const addAeropress = async (req, res) => {
    const title = req.body.title;
    const coffeeWeight = req.body.coffeeWeight;
    const waterWeight = req.body.waterWeight;
    const grinder = req.body.grinder;
    const grindSize = req.body.grindSize;
    const description = req.body.description;
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
        coffeeOrigin: origin,
        inverted: inverted === 'Yes' ? true : false,
        description: description,
        totalTimeMinutes: totalTime,
        UserId: userId
    });

    await theRecipe.save()
    .then(console.log('Aeropress saved!'));
}