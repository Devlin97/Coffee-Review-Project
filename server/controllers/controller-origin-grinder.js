import Grinder from "../models/grinder-model.js";
import Country from "../models/country-model.js";
import Brewer from "../models/brewers-model.js";

export const getGrinders = async (req, res) => {
    let grinders = await Grinder.findAll();

    //Sorts grinders in alphabetical order
    grinders.sort((x,y) => x.name.localeCompare(y.name))

    /* const grindersToSend = [];

    grinders.forEach(element => {
        grindersToSend.push(element.name);
    }); */

    res.json(grinders);
}

export const getCountries = async (req, res) => {
    let countries = await Country.findAll();

    //Sorts countries by alphabetical order
    countries.sort((x,y) => x.name.localeCompare(y.name));

    res.json(countries);
}

export const addGrinder = async (req, res) => {
    const theName = req.body.grinder;
    
    const theGrinder = Grinder.build({
        name: theName
    });
    await theGrinder.save()
    .then(console.log(`saved`))
}

export const addCountry = async (req, res) => {
    const theName = req.body.country;

    const theCountry = Country.build({
        name: theName
    });
    await theCountry.save()
    .then(console.log('saved'));
}

export const deleteGrinder = async (req, res) => {
    const grindId = req.body.grinderId;

    await Grinder.destroy({
        where: {
            id: grindId
        }
    });

    let grinders = await Grinder.findAll();

    //Sorts grinders in alphabetical order
    grinders.sort((x,y) => x.name.localeCompare(y.name))

    res.json(grinders);
}

export const deleteCountry = async (req, res) => {
    const countryId = req.body.countryId;

    await Country.destroy({
        where: {
            id: countryId
        }
    });

    let countries = await Country.findAll();

    //Sorts countries by alphabetical order
    countries.sort((x,y) => x.name.localeCompare(y.name));

    res.json(countries);
}

export const getBrewers = async (req, res) => {
    let brewers = await Brewer.findAll();

    brewers.sort((x,y) => x.brewMethod.localeCompare(y.brewMethod));

    res.json(brewers);
}

export const addBrewers = async (req, res) => {
    const theName = req.body.name;
    const theMethod = req.body.brewMethod;

    const theBrewer = Brewer.build({
        name: theName,
        brewMethod: theMethod
    });
    await theBrewer.save();

    let brewers = await Brewer.findAll();

    brewers.sort((x,y) => x.brewMethod.localeCompare(y.brewMethod));

    res.json(brewers);
}

export const deleteBrewer = async (req, res) => {
    const brewerId = req.body.brewerId;

    await Brewer.destroy({
        where: {
            id: brewerId
        }
    });

    let brewers = await Brewer.findAll();

    brewers.sort((x,y) => x.brewMethod.localeCompare(y.brewMethod));

    res.json(brewers);
}