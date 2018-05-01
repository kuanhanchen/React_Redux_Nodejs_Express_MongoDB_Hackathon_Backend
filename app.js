const express = require('express');
const path = require('path');

const mongodbConnect = require('./config/database');
const env = require('./config/env');
const routes = require('./routes');

const app = express();

// call the init function in ./config/database.js to setup the connection
// to mongodb
mongodbConnect();

/*===========================
=            Mongodb Playground            =
===========================*/


// { ValidationError: User validation failed: password: Path `password` is required., username: Path `username` is required.
// const haochuan = new User({});
// haochuan.save(err =>{
// if (err) throw err;
// console.log("User has been saved.");
// });

// const haochuan = new User({ username: 'haochuan', password: 'password' });
// haochuan.save(err => {
//   if (err) throw err;
//   console.log('User has been saved.');
// });

/*=====  End of Mongodb Playground  ======*/

/*==================================
=            Middleware            =
==================================*/

// serve static files
// app.use('/static', express.static(path.join(__dirname, 'public', 'static')));
app.use(express.static('public'));
/*=====  End of Middleware  ======*/

/*===========================
=            Routes            =
===========================*/

app.use('/users', routes.users);
app.use('/message', routes.message);
app.use('/service', routes.service);

/*=====  End of Routes  ======*/

module.exports = app;
