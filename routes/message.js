const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const MessageModel = require('../models/Message');

// create application/json parser
var jsonParser = bodyParser.json()

router.post('/', jsonParser, function(req, res) {
  console.log(req);
  const newMessage = new MessageModel(req.body);
  newMessage.save(err => {
    if (err) throw err;
    console.log('Message has been saved.');
  });
});

module.exports = router;