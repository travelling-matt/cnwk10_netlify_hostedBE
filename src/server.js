const express = require("express");

const app = express();

const port = 5000;

app.use("/static", express.static("public"));
app.use("/aboutus", express.static("public/aboutus.html"));
app.use("/giftstore", express.static("public/giftstore.html"));

app.listen(port, () => {
    console.log("listening on port 5000");
});