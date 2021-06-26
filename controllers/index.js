const router = require('express').Router();
const homeRoutes = require('./home-routes');
const profileRoutes = require('./profile-routes.js');
const matchRoutes = require('./match-page-routes');
const api = require('./api');

router.use('/', homeRoutes);
router.use('/profile', profileRoutes);
router.use('/match', matchRoutes);
router.use('/api', api);

module.exports = router;