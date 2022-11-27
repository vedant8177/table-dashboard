const express = require('express');
const app = express();
const port = process.env.port || 4000;
const router = require('./router');
const connection = require('./db/connection');
const path = require('path');
const hbs = require('hbs');


hbs.registerPartials(path.join(__dirname + '/partials'));
app.set('Views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())


app.use('/', router);
app.listen(port, () => console.log(`server is up and running at ${port}`));