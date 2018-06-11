const Schema = require('mongoose').Schema;
const resortSchema = require('./resortSchema');

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  reservations: [resortSchema],
  email: String,
  signupmessage: String
});

module.exports = userSchema;