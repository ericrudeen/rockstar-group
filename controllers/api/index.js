const router = require("express").Router();

const userRoutes = require("./user-routes.js");
// const artistRoutes = require('./artist-routes');
// const genreRoutes = require('./genre-routes');
const matchRoutes = require("./match-routes.js");

router.use("/user", userRoutes);
// router.use('/artist', artistRoutes);
// router.use('/genre', genreRoutes);
router.use("/match", matchRoutes);

module.exports = router;