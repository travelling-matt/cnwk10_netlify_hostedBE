const express = require("express");

const app = express();

const port = 5000;

// the app.use() funtion is used to mount the specified middleware function(s) at the path specified
app.use("/", express.static("public"));
app.use("/aboutus", express.static("public/aboutus.html"));
app.use("/contact", express.static("public/contact.html"));
app.use("/giftstore", express.static("public/giftstore.html"));

// the app.listen() function is used to bind and listen to the connection on the specified host and port
app.listen(port, () => {
    console.log("listening on port 5000");
});