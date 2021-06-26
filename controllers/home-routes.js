const router = require('express').Router();
const {User, Match} = require('../models');

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/match');
        return;
    }
    res.render('login')
})

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/match');
        return;
    }
    res.render('signup')
})

module.exports = router;