var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    text: {type: String, required: true},
    dueDate: {type: Date},
    createdDate: {type: Date, required: true},
    status: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Todo', schema);