const mongoose = require('mongoose');

const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/youtube-api', {useNewUrlParser: true});

const apiSchema = new Schema({
    content: String,
    created: { type: Date, default: Date.now }
  },
  { strict: false }
);

const models = {};
models.Api = mongoose.model('api', apiSchema);

module.exports = models;