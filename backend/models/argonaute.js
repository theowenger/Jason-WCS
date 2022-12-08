const mongoose = require('mongoose');

const argonauteSchema = mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('argonaute', argonauteSchema);