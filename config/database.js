const mongoose = require('mongoose');
const db = mongoose.connection;
function init() {
  mongoose.connect('mongodb://username:password@ds029605.mlab.com:29605/react_hackathon');
}
db.once('open', function() {
  console.log('mongodb connected.');
});

module.exports = init;
