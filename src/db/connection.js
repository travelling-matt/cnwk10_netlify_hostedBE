//require and install mongoose
//npm i mongoose
const mongoose = require("mongoose");

//require and install dotenv
//npm i dotenv
//.config() allows us to share woth rest of app
require("dotenv").config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("successfully connected");
    } catch (error) {
        console.log(error);
    }
};

connection();