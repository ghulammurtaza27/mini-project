var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./db');
const dbHelpers = require('./helpers/dbHelpers')(db);
const mongoose = require('mongoose');

//import userRoutes from './routes/usersMongo';

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
const userRoutes = require('./routes/usersMongo');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));







//const db = `${MONGO_URI}/${MONGO_DB_NAME}`;


mongoose.connect('mongodb+srv://murtaza:murtaza@miniproject.yc3au.mongodb.net/Data', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})


const dbM = mongoose.connection;

dbM.on("open", () => {
  console.log("Connected to MongoDB");
});


app.use('/', indexRouter);
//app.use('/api/users', usersRouter(dbHelpers));
app.use('/api/users', userRoutes);

module.exports = app;
