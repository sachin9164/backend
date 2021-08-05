const router = require('express').Router();
let User = require('../models/user.mode');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/newuser').put((req,res)=>{
console.log(req.body.data)
const username = req.body.data.username;
const heightFeet = req.body.data.heightFeet;
const heightInch = req.body.data.heightInch;
const weight = req.body.data.weight;
const bmi = req.body.data.bmi;


const newUser = new User({username,heightFeet,heightInch,weight,bmi});

newUser.save()
  .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;