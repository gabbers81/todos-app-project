var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    todos: {type: Schema.Types.ObjectId, ref: 'Todo'}
});

schema.plugin(uniqueValidator);

module.exports = mongoose.model('User', schema);