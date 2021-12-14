//require mongoose (already installed when connection.js set up)
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/, //match regexp (regular expressions) so no characters break the app
    },
    password:{
        type: String,
        required: true,
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;