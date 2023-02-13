import Recipe_Pourover from '../models/recipe-model-pourover.js'

export const addPouroverRecipe = async (req, res) => {
    const title = req.body.title;
    const poursListTime = req.body.poursListTime;
    const poursListWater = req.body.poursListWater;
    const brewer = req.body.brewer;
    const grinder = req.body.grinder;
    const grindSize = req.body.grindSize;
    const description = req.body.description;
    const totalTime = req.body.totalTime;
    const coffeeOrigin = req.body.coffeeOrigin;
    const userId = req.body.userId;
    const coffeeWeight = req.body.coffeeWeight;

    const thePours = [];
    
    poursListTime.forEach((element, i) => {
        if(i === 0) {
            thePours.push({ time: '0:00' })
        }
        else {
            thePours.push({ time: element })
        }
    });

    poursListWater.forEach((element, index) => {
        thePours[index].water = element
    });
    
    const theRecipe = Recipe_Pourover.build({
        title: title,
        brewMethod: 'Pourover',
        waterWeight: poursListWater[poursListWater.length - 1],
        coffeeWeight: coffeeWeight,
        brewer: brewer,
        grinder: grinder,
        grindSize: grindSize,
        description: description,
        totalTimeMinutes: totalTime,
        pours: thePours,
        coffeeOrigin: coffeeOrigin,
        UserId: userId
    });

    await theRecipe.save()
    .then(console.log('saved'));
}