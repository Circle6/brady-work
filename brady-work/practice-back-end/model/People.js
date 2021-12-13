const mongoose = require('mongoose');
const Schema = require('../schemas/People')

exports.People = mongoose.model('People', Schema.PeopleSchema);

