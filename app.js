const express = require('express');

const routes = require('./routes');

const app = express();

app.use('/add-product', routes);

app.use('/', (req, res, next) => {
    console.log('In other middleware');
    res.send('<h1>hello from express</h1>');
});

app.listen(3000);