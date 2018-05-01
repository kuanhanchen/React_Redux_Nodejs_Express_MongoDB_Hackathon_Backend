const mongoose = require('mongoose');
const { Schema } = mongoose;

var messageSchema = new Schema({
  name: String,
  email: String,
  msg: String,
  created_at: Date,
  updated_at: Date
});

// on every save, add the date
messageSchema.pre('save', function(next) {
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
const Message = mongoose.model('Message', messageSchema);


module.exports = Message;
