const router = require("express").Router();
const { User, Match } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  const matchData = await Match.findAll();
  const matches = matchData.map((match) => match.get({ plain: true }));
  console.log(matches);
  res.render("matches", {
    matches,
  });
});

module.exports = router;
