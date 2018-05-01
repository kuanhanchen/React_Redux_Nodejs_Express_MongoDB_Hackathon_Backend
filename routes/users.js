const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const UserModel = require('../models/User');


// create application/json parser
var jsonParser = bodyParser.json()

// Define a handler to handle GET request at '/'
router.get('/:email/:password', function(req, res) {

  const { email, password } = req.params;
    UserModel.find({ 'email': email, 'password': password}, 
      function(err, user) {
        if (err) throw err;
        console.log(user);
        res.status(200).json({user});
      }
    );
  
}

);

// POST /users: Create a new user document in user collection of MongoDB.
router.post('/', jsonParser, function(req, res) {
  console.log(req);
  const newUser = new UserModel(req.body);
  newUser.save(err => {
    if (err) throw err;
    console.log('User has been saved.');
  });
});

module.exports = router;