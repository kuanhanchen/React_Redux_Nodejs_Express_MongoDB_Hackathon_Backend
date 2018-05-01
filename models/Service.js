const mongoose = require('mongoose');
const { Schema } = mongoose;

var serviceSchema = new Schema({
  serverName: String,
  userId: String,
  staus: String,
  version: String,
  StartedTime: String,
  losted: String,
  created_at: Date,
  updated_at: Date
});

// on every save, add the date
serviceSchema.pre('save', function(next) {
  // get the current date
  const currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at) this.created_at = currentDate;

  next();
});

// the schema is useless so far
// we need to create a model using it
const Service = mongoose.model('Service', serviceSchema);


module.exports = Service;
