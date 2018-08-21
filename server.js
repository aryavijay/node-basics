const express = require('express');
const hbs = require('hbs');
var app = express();

process.on('uncaughtException', function (err) {
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
    console.error(err.stack);
    process.exit(1)
});

console.log(require.cache.map(x => x));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
hbs.registerHelper('year', () => new Date().getFullYear());
hbs.registerHelper('capitalize', (text) => text.toUpperCase());


app.use(express.static(__dirname + '/public'));

var path = require('path');

//Logger Middle ware

app.use((req, res, next) => {
    console.log("Request :");
    console.log(req.method, req.url);
    console.log("Response :");

    next();
});

app.get('/', (req, res) => {
    res.render("home.hbs",
        {welcomeMsg: 'Welcome to my first Express page', pageTitle: "About Page Title"}
    )
});

app.get('/about', (req, res) => {
    res.render("about.hbs", {pageTitle: "About Page Title"});
});

app.get("/json", (req, res) => {
    res.send({name: "vijay", age: 35, living: true});
});

app.get("/help", (req, res) => {
    res.render("help.hbs");
});


app.listen('3000', () => {
    console.log("Server started at : 'http://localhost:3000'")
});