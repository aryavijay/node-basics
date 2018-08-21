const express = require('express');
const mongoose = require('mongoose').MongoClient;
mongoose.Promise = global.Promise;

process.on('uncaughtException', function (err) {
    console.log("=====================");
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
    console.error(err.stack);
    console.log("Application still Running");
    console.log("=====================");
});

