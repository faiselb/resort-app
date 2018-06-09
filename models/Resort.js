const mongoose = require('mongoose');
const resortSchema = require('../db/schemas/resortSchema');

const Resort = mongoose.model('resort', resortSchema);

module.exports = Resort;