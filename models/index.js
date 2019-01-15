const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api', { useNewUrlParser: true });

// test connection
/* var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log('connected');
}) */

mongoose.Promise = Promise;

module.exports = require('./todo');