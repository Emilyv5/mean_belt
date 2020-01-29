const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const database_connect = require("./server/config/mongoose.js");
database_connect.mongo;

// app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/belt/dist/belt"));
app.use(bodyParser.json());

require("./server/config/routes.js")(app);

app.all("*", (req, res, next) => {
	res.sendFile(path.resolve("./belt/dist/belt/index.html"));
});

app.listen(8000, () => console.log("listening on port 8000"));
