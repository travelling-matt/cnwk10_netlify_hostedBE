// built in method Router
const { Router } = require("express");

// enable functions that we have created
const { addUser, listUser, deleteUser, updateUser, welcomeMessage } = require("./userController");

//enable hashPassword from middleware folder(in index.js, index is default so no file name needed here)
const { hashPassword, checkPassword } = require("../middleware");

//save Router (from above) as userRouter
const userRouter = Router();

//path to add data = .post("<endpoint>", <function>)
//Create
userRouter.post("/user", hashPassword, addUser);

//Read
userRouter.get("/list", listUser);

//Update
userRouter.put("/update", updateUser);

//Delete
userRouter.delete("/delete", deleteUser);

//Login
userRouter.get("/login", checkPassword, welcomeMessage);

//decryptPassword,

//export the route
module.exports = userRouter; 