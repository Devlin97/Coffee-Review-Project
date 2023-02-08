import User from "./user-model.js";
import Recipe from "./recipe-model.js";
import Comment from './comment-model.js';
import Grinder from "./grinder-model.js";
import Country from "./country-model.js";
import Recipe_Pourover from "./recipe-model-pourover.js";
import Recipe_Aeropress from "./recipe-model-aeropress.js";

User.hasMany(Recipe);
Recipe.belongsTo(User);

User.hasMany(Recipe_Pourover);
Recipe_Pourover.belongsTo(User);

User.hasMany(Recipe_Aeropress);
Recipe_Aeropress.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Recipe.hasMany(Comment);
Comment.belongsTo(Recipe);

Recipe_Pourover.hasMany(Comment);
Comment.belongsTo(Recipe_Pourover);

Recipe_Aeropress.hasMany(Comment);
Comment.belongsTo(Recipe_Aeropress);

console.log('got here');

export {User, Recipe, Comment, Grinder, Country, Recipe_Pourover, Recipe_Aeropress};