const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userid: { type: Number, unique: true, required: true},
    password: { type: Number, required: true},

})

const User = mongoose.model("User", userSchema);

async function register(userid, postcontent) {
    const user = await getUser(userid);
    console.log(user)
    if(user) throw Error('userid already in use');

    const newUser = await User.create({
        userid: userid,
        postcontent: postcontent
    });

    return newUser;
}

async function login(userid, postcontent) {
    const user = await getUser(userid);
    if(!user) throw Error('User not found');
    if(user.postcontent != postcontent) throw Error('Wrong Password');

    return user;
}

async function updatePostcontent(id, postcontent) {
    const user = await User.updateOne({"_id": id}, {$set: { postcontent: postcontent}});
    return user;
}

async function deleteUser(id) {
    await User.deleteOne({"_id": id});
};

async function getUser(userid) {
    return await User.findOne({ "userid": userid});
}

module.exports = { 
    register, login, updatePostcontent, deleteUser
};