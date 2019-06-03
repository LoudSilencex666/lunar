const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const isProduction = process.env.NODE_ENV === 'production';

const authTokenVerify = require('./middlewares/authTokenVerify');

// important for CORS
const allowedOrigins = ['http://localhost:4200', 'http://localhost:3000'];

// Create global app object
var con = require('./dbconnect');
const app = express();

const home = require('./routes/home');
const test = require('./routes/test');
const login = require('./routes/login');
const news = require('./routes/news');
const stats = require('./routes/stats');
const subjects = require('./routes/subjects');
const messages = require('./routes/messages');

app.use(logger('common'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error(`Origin: ${origin} is now allowed`))
        }
    }
}));

app.use('/', authTokenVerify, home);
app.use('/test', authTokenVerify, test);
app.use('/login', login);
app.use('/news', authTokenVerify, news);
app.use('/stats', authTokenVerify, stats);
app.use('/subjects', authTokenVerify, subjects);
app.use('/messages', authTokenVerify, messages);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
// development error handler
// will print stacktrace
if (!isProduction) {
    app.use(function(err, req, res, next) {
        console.log(err.stack);

        res.status(err.status || 500);

        res.json({'errors': {
          message: err.message,
          error: err
        }});
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({'errors': {
        message: err.message,
        error: {}
    }});
});

module.exports = app;
