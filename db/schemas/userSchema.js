const Schema = require('mongoose').Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: String,
  signupmessage: String
});

module.exports = userSchema;