// // exports.allAccess = (req, res) => {
// //     res.status(200).send("Public Content.");
// //   };
  
// //   exports.userBoard = (req, res) => {
// //     res.status(200).send("User Content.");
// //   };
  
// //   exports.adminBoard = (req, res) => {
// //     res.status(200).send("Admin Content.");
// //   };


const db = require("../model/indexmodel");
const User = db.user;
const Op = db.Sequelize.Op;
const express = require('express');
const app = express();
app.use(express.json());
// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const user = {
    id: req.body.id,
    username: req.body.username,
    email : req.body.email,
    password : req.body.password
  };


  db.sequelize.sync({force:true}).then(async () => {
    for(let i=1;i<=25;i++){
      const user = {
      username : `user${i}`,
      email : `user${i}@gmail.com`,
      password : `123`
      }
      User.create(user);
    }
  })



  // Save Tutorial in the database
  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user.",
      });
    });
};


exports.findAll = (req, res) => {
  const username = req.query.username;
  var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;
  const page = req.query.page;
  const size = req.query.size;
  User.findAndCountAll({ 
    offset : page*size,
    limit : page*1
  
   })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user.",
      });
    });
};


