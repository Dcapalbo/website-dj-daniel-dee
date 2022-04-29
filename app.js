// importing path from node core 
const path = require('path');
// importing file system from node core 
const express = require('express');
// inizialize express 
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const homeRoute = require('./routes/home');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'img')));
// connect the home route
app.use('/', homeRoute.routes);
// Inizialise the server 
app.listen(3000);
