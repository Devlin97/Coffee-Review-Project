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
    const coarse = req.body.coarse;
    const coffeeOrigin = req.body.coffeeOrigin;
    const userId = req.body.userId;
    const coffeeWeight = req.body.coffeeWeight;

    console.log(coarse)

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
        grindCoarseness: coarse,
        totalTimeMinutes: totalTime,
        pours: thePours,
        coffeeOrigin: coffeeOrigin,
        UserId: userId
    });

    await theRecipe.save()
    .then(console.log('saved'));
}

export const findPouroverRecipe = async (req, res) => {
    const id = req.body.id;
    if(id) {
        let theRecipe = await Recipe_Pourover.findOne({
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

export const updatePourover = async (req, res) => {
    const title = req.body.title;
    const poursListTime = req.body.poursListTime;
    const poursListWater = req.body.poursListWater;
    const brewer = req.body.brewer;
    const grinder = req.body.grinder;
    const grindSize = req.body.grindSize;
    const description = req.body.description;
    const coarse = req.body.coarse;
    const totalTime = req.body.totalTime;
    const coffeeOrigin = req.body.coffeeOrigin;
    const coffeeWeight = req.body.coffeeWeight;
    const id = req.body.id;

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

    const theRecipe = await Recipe_Pourover.findOne({
        where: {
            id: id 
        }
    });

    theRecipe.set({
        title: title,
        waterWeight: poursListWater[poursListWater.length - 1],
        coffeeWeight: coffeeWeight,
        brewer: brewer,
        grinder: grinder,
        grindSize: grindSize,
        description: description,
        grindCoarseness: coarse,
        totalTimeMinutes: totalTime,
        pours: thePours,
        coffeeOrigin: coffeeOrigin
    });

    await theRecipe.save()
    .then(res.json({success: true}));
}