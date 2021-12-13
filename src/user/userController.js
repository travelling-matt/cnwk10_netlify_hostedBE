//pull in model
const User = require("./userModel");

//requests and response come through here
exports.addUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send({message: "Succssfully added user", newUser});
    } catch (error) {
        console.log(error);
    }
};