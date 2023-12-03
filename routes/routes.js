const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    res.send("<h1>Hello</h1>");
});

router.get("/form", (req,res) => {
    res.render("form.ejs");
})

router.post("/form", (req,res) => {
    res.render('formresult', req.body);
    console.log(req.body);
})

module.exports = router;