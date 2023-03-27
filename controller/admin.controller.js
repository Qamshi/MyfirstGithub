const db = require("../model/indexmodel");
const Admin = db.admin;
 const Op = db.Sequelize.Op;

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Customer
  const admin = {
    id: req.body.id,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };

  // Inserting Customer  in the database
  Admin.create(admin)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the admin.",
      });
    });
};

//Retrieve all Customers from the database. by using http://localhost:3000/api/customer?c_name=Hadeed
exports.findAll = (req, res) => {
  const username = req.query.username;
  var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

  Admin.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving admin.",
      });
    });
};



// Find a single Customer with an id
exports.findOne = (req, res) => {
  
  const id = req.params.id;
  

  Admin.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Admin with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Admin with id=" + id,
      });
    });
};

// Update a Customer by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Admin.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Admin was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Admin with id=${id}. Maybe Customer was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Admin with id=" + id,
      });
    });
};


// Delete a Customer with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Admin.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Admin was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Admin with id=${id}. Maybe Admin was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Admin with id=" + id,
      });
    });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    Admin.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Admin were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Admin.",
      });
    });
};

