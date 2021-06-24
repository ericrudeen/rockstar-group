const router = require('express').Router();
const { User, Artist, User_Artist, Genre, User_Genre, Match } = require('../models');

router.get('/', async (req, res) => {
    try {
      const newUser = await User.findByPk(1,{
        include:[
           {
               model:Artist,through:{
                 User_Artist, attributes:[]
               },
           },
           {
            model:Genre,through:{
              User_Genre,attributes:[]
            },
        } 
        ] 
      });
      res.status(200).json({ newUser });
  
    //   req.session.save(() => {
    //     req.session.userId = newUser.id;
    //     // req.session.email = newUser.email;
    //     // req.session.loggedIn = true;
  
    //     res.json(newUser);
    //   });
    } catch (err) { 
    console.log(err)
    res.status(500).json(err);
    } 
  });


  router.get('/Match', async (req, res) => {
    try {
      const newUser = await Match.findAll({where:{liker:1}},{
        include:[
           {
              model:User
           },
           {
            model:User
         }, 
        ] 
      });
      res.status(200).json({ newUser });
  
    //   req.session.save(() => {
    //     req.session.userId = newUser.id;
    //     // req.session.email = newUser.email;
    //     // req.session.loggedIn = true;
  
    //     res.json(newUser);
    //   });
    } catch (err) { 
    console.log(err)
    res.status(500).json(err);
    } 
  });
module.exports = router