const express = require('express');
const router = require('./routes/routes.js');

var app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.use(express.static(__dirname+"/public"));

app.listen(3000, () => {
    console.log("Listening on port 3000");
});