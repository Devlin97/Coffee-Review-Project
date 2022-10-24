import User from "./user-model.js";
import Recipe from "./recipe-model.js";

User.hasMany(Recipe);
Recipe.belongsTo(User);

console.log('got here');

export {User, Recipe};