const express = require('express');
const models = require('./models');
const bodyParser= require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 9001;

const user = require('./user');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose    = require('passport-local-mongoose');

app.set('view engine','ejs');
app.use(cors({origin:true,credentials: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use('/api/', require('./crud-api')(models.Api));

app.use('/user/', require('./user-api')(user.Api));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(user.Api.authenticate()));
passport.serializeUser(user.Api.serializeUser());
passport.deserializeUser(user.Api.deserializeUser());
app.use(require('express-session')({    
    secret:"Hello World, this is a session",    
    resave: false,    
    saveUninitialized: false
}));