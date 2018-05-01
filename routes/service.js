const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const ServiceModel = require('../models/Service');

// create application/json parser
var jsonParser = bodyParser.json()

router.post('/', jsonParser, function(req, res) {
  console.log(req);
  const newService = new ServiceModel(req.body);
  newService.save(err => {
    if (err) throw err;
    console.log('Service has been saved.');
  });
});

router.get('/:id', jsonParser, function(req, res) {

    const { id } = req.params;
    UserModel.find({ 'userId': id}, 
      function(err, services) {
        if (err) throw err;
        console.log(services);
        res.status(200).json({services});
      }
    );

});

module.exports = router;