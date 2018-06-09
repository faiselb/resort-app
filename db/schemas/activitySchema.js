const Schema = require('mongoose').Schema;

const activitySchema = new Schema({
  name: String,
  activityType: String,
  date: {
    type: Date,
    default: new Date()
  },
  time: String
});

module.exports = activitySchema;
