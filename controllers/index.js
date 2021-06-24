const router = require('express').Router();

const profileRoutes = require('./profile-routes.js');


router.use('/profile', profileRoutes);


module.exports = router;