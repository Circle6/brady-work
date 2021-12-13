const mongoose = require('mongoose');
const { Schema } = mongoose;

exports.PeopleSchema = new Schema({
    name: String,
    favoriteColor: String,
    says: String,
});