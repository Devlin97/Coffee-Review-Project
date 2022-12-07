import User from "./user-model.js";
import Recipe from "./recipe-model.js";
import Comment from './comment-model.js';

User.hasMany(Recipe);
Recipe.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Recipe.hasMany(Comment);
Comment.belongsTo(Recipe);

console.log('got here');

export {User, Recipe, Comment};