import Grinder from "../models/grinder-model.js";
import Country from "../models/country-model.js";

export const getGrinders = async (req, res) => {
    let grinders = await Grinder.findAll();

    grinders.sort((x,y) => x.name - y.name);

    res.json(grinders);
}

export const getCountries = async (req, res) => {
    let countries = await Country.findAll();

    countries.sort((x,y) => x.name - y.name);

    res.json(countries);
}