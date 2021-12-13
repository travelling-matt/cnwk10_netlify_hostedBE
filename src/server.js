//set db connection
require("./db/connection");

//require and install express
//npm i express
const express = require("express");

//require and install express (Cross Origin Resource Sharing)
//npm i cors 
const cors = require("cors");

const userRouter = require("./user/userRoutes");

//create express app
const app = express();

//set port number
const port = 5000;

//build in method allowing use of JSON
app.use(express.json());
app.use(cors());

//instead of static url-> file path
app.use(userRouter);

// the app.listen() function is used to bind and listen to the connection on the specified host and port
app.listen(port, () => {
    console.log("listening on port 5000");
});