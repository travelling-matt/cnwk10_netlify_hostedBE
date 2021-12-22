//pull in model
const User = require("./userModel");

//install and require email-validator
//npm i email-validator
const emailValidator = require('email-validator');

//requests and response come through here

// addUser without extra email validation.
// exports.addUser = async (req, res) => {
//     try {
//         const newUser = new User(req.body);
//         await newUser.save();
//         res.status(200).send({
//             message: "Successfully added user",
//             newUser
//         });
//         console.log(`new user created: ${newUser}`);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             message: "Unsuccessful, please check again"
//         });
//     }
// };

exports.addUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
                //add email validation here. if true -> await newUser else if false message "invalid email address". try as one line.
                //email validator checks for special characters before and after '@' and after '.' . Also has length checks.
                //var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
            if (emailValidator.validate(req.body.email)) {
                    await newUser.save();
                    res.status(200).send({
                        message: "Successfully added user",
                        newUser
                    });
                    console.log(`new user created: ${newUser}`);
                } else {
                    console.log("invalid email address");
                    res.status(500).send({
                        message: "Invalid email address, please check again"
                    });
                };
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Unsuccessful, please check again"
        });
    }
};

exports.listUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send({
            message: "user list",
            users
        });
    } catch (error) {
        console.log(error);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate(req.body.filter, req.body.newData);
        res.status(200).send({
            message: "user updated",
            updatedUser
        });
        console.log(`${updatedUser} updated`)
    } catch (error) {
        console.log(error);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const delUser = req.body;
        await User.deleteOne(delUser);
        res.status(200).send({
            message: "user deleted",
            delUser
        });
        console.log(`${delUser.username} deleted`);
        next();
    } catch (error) {
        console.log(error);
    }
};

//message in console after user successfully logs in (proof of next() working)
exports.welcomeMessage = async (req) => {
    try {
        console.log(`${req.body.username} logged in`);
    } catch (error) {
        console.log(error);
    }
};
