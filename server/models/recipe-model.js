import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
    title: String,
    user: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;