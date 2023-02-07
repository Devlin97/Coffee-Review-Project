import Grinder from "../models/grinder-model.js";
import Country from "../models/country-model.js";

export const getGrinders = async (req, res) => {
    let grinders = await Grinder.findAll();

    //Sorts grinders in alphabetical order
    grinders.sort((x,y) => x.name.localeCompare(y.name))

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