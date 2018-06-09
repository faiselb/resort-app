const Schema = require('mongoose').Schema;

const resortSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: String
});

module.exports = resortSchema;
