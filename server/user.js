const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/youtube-api', {useNewUrlParser: true});

const UserSchema = new Schema({
    username:String,    
    password:String
});

// UserSchema.plugin(passportLocalMongoose);  
// module.exports = mongoose.model('user', UserSchema);

const user = {};

UserSchema.plugin(passportLocalMongoose);
user.Api = mongoose.model('user', UserSchema);

module.exports = user;