const router = require('express').Router();
const { User, Match } = require('../../models');

router.post('/:id', async (req, res) => {
  try {
    const newMatch = await Match.create({
      likee: req.params.id,
      liker: req.session.userId
    })

    fetch('/api/match', {
      method:'POST',
      body: JSON.stringify({id: user.id})
    })
     
      res.json();

  } catch (err) {
    res.status(500).json(err);
  }
});
      // res.json({ user, message: 'You are now logged in!' });  

module.exports = router;
