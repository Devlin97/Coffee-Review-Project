import User from "./user-model.js";
import Recipe from "./recipe-model.js";

User.hasMany(Recipe);
Recipe.belongsTo(User);

export {User, Recipe};