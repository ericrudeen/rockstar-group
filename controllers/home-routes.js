const router = require("express").Router();
const { User, Match } = require("../models");
const {Op} = require("sequelize")
// router.get("/", (req, res) => {
//   res.redirect("/match");
// });

// router.get("/", async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const userData = await User.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ["name"],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const users = userData.map((user) => user.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render("homepage", {
//       user,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      where: {
        id: {
          [Op.not]:req.session.userId
        }
        
      }
    })
    const users = userData.map((user) => user.get({ plain: true }));
    res.render("homepage", {
      loggedIn: req.session.loggedIn,
      users

    });
  } catch(err){

  }
  
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

module.exports = router;
