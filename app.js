var express = require('express');

var app = express();

app.use('/', require('./routes'));

app.listen(3000);

module.exports = app;