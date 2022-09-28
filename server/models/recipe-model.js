import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
    title: String,
    user: String,
});