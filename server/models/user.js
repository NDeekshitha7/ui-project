const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true},
    password: { type: String, required: true},

})

const User = mongoose.model("User", userSchema);

async function register(email, password) {
    const user = await getUser(email);
    if(user) throw Error('email already in use');

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const newUser = await User.create({
        email: email,
        password: hashed
    });

    return newUser._doc;
}

async function login(email, password) {
    const user = await getUser(email);
    if(!user) throw Error('User not found');

    const isMatch = await bcrypt.compare(password, use.password);

    if(!isMatch) throw Error('Wrong Password');

    return user.doc;
}

async function updatePassword(id, password) {
    const user = await User.updateOne({"_id": id}, {$set: { password: password}});
    return user;
}

async function deleteUser(id) {
    await User.deleteOne({"_id": id});
};

async function getUser(email) {
    return await User.findOne({ "email": email});
}

module.exports = { 
    register, login, updatePassword, deleteUser
};