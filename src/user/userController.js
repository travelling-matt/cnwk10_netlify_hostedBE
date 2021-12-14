//pull in model
const User = require("./userModel");

//requests and response come through here
exports.addUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send({
            message: "Successfully added user",
            newUser
        });
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
    } catch (error) {
        console.log(error);
    }
};

// exports.loginUser = async (req, res) => {
//     try {
//         const loginUser = await User.findOne(req.body.username);
//         const match = await bcrypt.compare(req.body.password, User.hash);
//         if (match) {
//             res.status(200).send({
//                 message: "login successful"
//             });
//         } else {
//             res.status(500).send({
//                 message: "password incorrect"
//             });

//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             message: "Unsuccessful, please check again"
//         });
//     }
// };

// exports.loginUser = async (req, res) => {
//     try {
//         const loginUser = await User.findOne(req.body.username);
//         if (loginUser) {
//             await comparePasswords({plainText: req.body.password, user: loginUser}, res);
//             console.log("login successful");
//         } else {
//             res.status(500).send({message: `User ${req.body.username} not found please try again`});
//         }
//     } catch(error) {
//         console.log(error);
//         res.status(500).send({ message: "Unsuccessful, please check again"});
//     }
// };

// async function checkUser(username, password) {
//     //... fetch user from a db etc.

//     const match = await bcrypt.compare(password, user.passwordHash);

//     if(match) {
//         //login
//     }

//     //...
// }