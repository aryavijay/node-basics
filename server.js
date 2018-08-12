const express = require('express');
const hbs = require('hbs');
var app = express();
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render("home.hbs",
        {welcomeMsg: 'Welcome to my first Express page', pageTitle: "About Page Title", year: new Date().getFullYear()}
    )
});

app.get('/about', (req, res) => {
    res.render("about.hbs", {pageTitle: "About Page Title", year: new Date().getFullYear()});
});

app.get("/json", (req, res) => {
    res.send({name: "vijay", age: 35, living: true});
});

app.get("/bad", (req, res) => {
    res.send({
        errorMessage: "Can't process request"
    });
});


app.listen('3000', () => {
    console.log("Server started at : 'http://localhost:3000'")
});