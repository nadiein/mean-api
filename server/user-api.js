const express = require('express');
const passport = require('passport');

module.exports = (Collection) => {

    const register = (req, res) => {
        Collection.register(new Collection({
            username: req.body.username
        }),
        req.body.password, (err, user) => {
            if (err) {            
                console.log(err);            
                return res.render('register');        
            }
            passport.authenticate('local')((req, res), () => {
                res.redirect('/secret');       
            });     
        });
    }

    const secret = (req, res) => {
        res.render('secret');
    }

    const login = (req, res) => {
        res.render('login');
    }

    const logout = (req, res) => {
        req.logout();
        res.redirect('/');
        res.render('logout');
    }

    let router = express.Router();

    router.post('/login', passport.authenticate('local'));
    router.post('/register', register);
    router.get('/secret', secret);
    router.get('/login', login);
    router.get('/logout', logout);

    return router;
}