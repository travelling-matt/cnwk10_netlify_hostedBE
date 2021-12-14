//require and install middleware library
//npm i bcrypt

const bcrypt = require("bcrypt");

//also need to require User data
const User = require("../user/userModel");

//hash password with bcrypt
exports.hashPassword = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8); //take password from body of req(uest) and hash it. max length 8 characters
        next(); //will run the next function from the arguement above (hashPasswords arguments) - check this
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Unsuccessfull, please try again"
        }); // if res(ponce) is status 500 send message
    }
};

exports.checkPassword = async (req, res) => {
    try {
        const loginUser = await User.findOne(req.body.username);
        if (loginUser) {
            const match = await bcrypt.compare(req.body.password, loginUser.hash);
            if (match) {
                res.status(200).send({
                    message: "login successful"
                });
            } else {
                res.status(500).send({
                    message: "password incorrect"
                });
            }
        } else {
            res.status(500).send({
                message: "username incorrect"
            });
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Unsuccessful, please check again"
        });
    }
};

// exports.decryptPassword = async (req, res, next) => {
//     try {
//         req.body.password = await bcrypt.compare(req.body.password, hash)
//         next(); //will run the next function from the arguement above (hashPasswords arguments)
//     } catch(error) {
//         console.log(error);
//         res.status(500).send({message: "Unsuccessfull, please try again"}); // if res(ponce) is status 500 send message
//     }
// };