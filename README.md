# Agenda
Una pagina para agendar
codigo de javascrip nombre app :
var createError = require('http-errors');
var mongoConnection = require('./mongodbconnection');
var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);

// View engine setup
app.set('view engine', 'ejs');

// catch 404 and forward to error handler
app.use(function (req, res, next) {
                    next(createError(404));
});

mongoConnection.connect();

// app runs on port 3000
app.listen(port, () => {
                    console.log(`Example app listening on port ${port}`);
});

module.exports = {
                    app,
                    express,
};
