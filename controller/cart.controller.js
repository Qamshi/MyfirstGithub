const db = require("../model/indexmodel");
const Cart = db.cart;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.cart_id) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const cart = {
    cart_id: req.body.cart_id,
    Customer_id: req.body.Customer_id
  };

  // Save Tutorial in the database
  Cart.create(cart)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the cart.",
      });
    });
};

//Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const cart_id = req.query.cart_id;
  var condition = cart_id ? { cart_id: { [Op.like]: `%${cart_id}%` } } : null;

  Cart.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cart.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Cart.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find cart with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving cart with id=" + id,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Cart.update(req.body, {
    where: { cart_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "cart was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update cart with id=${id}. Maybe cart was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating customer with id=" + id,
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Cart.destroy({
    where: { cart_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "cart was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete cart with id=${id}. Maybe customer was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete customer with id=" + id,
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Cart.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} cart were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all cart.",
      });
    });
};

