const Schema = require('mongoose').Schema;
const activitySchema = require('./activitySchema');

const resortSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: String,
  activities: [activitySchema]
});

module.exports = resortSchema;
