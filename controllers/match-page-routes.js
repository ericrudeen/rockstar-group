const router = require("express").Router();
const { User, Match } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const matchesData = await Match.findAll({
      where: { liker: req.session.userId },
      attributes: {
        exclude: ["liker", "likee"],
      },
      include: [
        {
          model: User,
          as: "likee_user",
        },
      ],
    });

    const matchesForYou = await Match.findAll({
        where: { likee: req.session.userId },
        attributes: {
          exclude: ["likee"],
        },
        
      });
      
      const matchesForYouId = matchesForYou.map(match => match.get({plain:true}).liker)
      
      const matches = matchesData.map(match => match.get({plain:true})).filter(match => {
        return matchesForYouId.includes(match.likee_user.id)
      }) 
     
    res.render("matches", { matches });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
