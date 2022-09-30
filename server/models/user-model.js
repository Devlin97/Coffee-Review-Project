import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
});

const User = mongoose.model('User', userSchema);

export default User;