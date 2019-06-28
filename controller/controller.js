const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  findAllUsers: (req, res) => {
    db.User
      .findAll({})
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findUser: (req, res) => {
    db.User.findOne({
      where: { email: req.body.email },
      include: [{
        model: db.Collectible
      }]
    })
    .then(result => {
      
      // Compare the password withthe encrypted password in the database (can be found in "bcrypt docs")
      if (bcrypt.compareSync(req.body.password, result.password)) {
        const token = jwt.sign({
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email
        }, process.env.JWT_SECRET, { expiresIn: '1h' });
      
        // Return user JSON and token
        return res.json({
          id: result.id,
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          token: token
        });
        // If passwords don't match, they are given error.
      } else { 
        console.log("not authenticated")
        return res.json({
          error: "Invalid email/password"
        });
      }
    })
    .catch(err => console.log(err)); 
  },
  findById: (req, res) => {
    db.User
      .findOne({
        where: {id: req.params.id},
        include: [{
          model: db.Collectible
        }]
      })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  createUser: (req, res) => {
    db.User
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      })
      .then(data => {  
        const token = jwt.sign({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email
        }, process.env.JWT_SECRET, { expiresIn: '1h' });

        const result = {
          data,
          token
        }
        return res.json(result);
      })
      .catch(err => console.log(err));
  },

  getCollectible: (req, res) => {
    db.Collectible
      .findOne({
        where: ({
          id: req.params.id
        })
      })
      .then(dbCollectible => res.json(dbCollectible))
      .catch(err => res.status(422).json(err));
  },
  addCollectible: (req, res) => {
    db.Collectible
      .create({
        name: req.body.name,
        type: req.body.type,
        value: req.body.value,
        serNum: req.body.serNum,
        description: req.body.description,
        UserId: req.body.UserId
      })
      .then(collectibles => res.json(collectibles))
      .catch(err => res.status(422).json(err));
  },
  updateCollectible: (req, res) => {
    db.Collectible
      .update(req.body, {
        where: { id: req.params.id}
      })
      .then(dbCollectible => res.json(dbCollectible))
      .catch(err => res.status(422).json(err));
  },
  deleteCollectible: (req, res) => {
    db.Collectible
      .destroy({
        where: { id: req.params.id }
      })
      .then(dbCollectible => res.json(dbCollectible))
      .catch(err => res.status(422).json(err));
  }
}