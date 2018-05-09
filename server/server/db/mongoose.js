var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://27017/ToDoApp');

module.exports = {mongoose};//{mongoose:mongoose}




