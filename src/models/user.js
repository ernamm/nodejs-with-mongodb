const mongoose = require("../database");

const UserSchema = new mongoose.Schema({
    mame : {
        type: String,
        require: true, // used to always get a name when a new User is made.
    },
    email : {
        type: String,
        unique: true, // used to make the db only accept a email just once.
        require: true, 
        lowercase: true,
    },
    password : {
        type : String,
        require : true,
        select : false, // makes that the password don't get sent when the find() method is used, for example.
    },
    createdAt : {
        type : Date,
        default : Date.now, // this will get the date when the User will be created to add on our Model.
    },
});

const User = new mongoose.model("User", UserSchema);

module.exports = User;