// built in method Router
const { Router } = require("express");

// enable functions that we have created
const { addUser } = require("./userController");

//save Router (from above) as userRouter
const userRouter = Router();

//path to add data = .post("<endpoint>", <function>)
userRouter.post("/user", addUser);

//export the route
module.exports = userRouter; 