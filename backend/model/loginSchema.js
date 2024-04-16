const {Schema, model} = require("mongoose");


const userSchema = new Schema({
    username: {type: String, require},
    password: {type: String, require},
    firstname: { type: String },
    lastname: { type: String },
    borthday: { type: Number },
    gender: { type: String },
    address: { type: String },
    phone: { type: Number }
 });

 const User = model("user", userSchema)

 module.exports = User;