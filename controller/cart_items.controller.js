const db = require("../model/indexmodel");
const Cart_items = db.cart_items;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.cart_item_quantity) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const cart_items = {
    cart_id: req.body.cart_id,
    Product_id: req.body.Product_id,
    cart_item_quantity: req.body.cart_item_quantity
  };

  // Save Tutorial in the database
  Cart_items.create(cart_items)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the cart_items.",
      });
    });
};

//Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const cart_id = req.query.cart_id;
  var condition = cart_id ? { cart_id: { [Op.like]: `%${cart_id}%` } } : null;

  Cart_items.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cart_items.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Cart_items.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find cart_items with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving cart_items with id=" + id,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Cart_items.update(req.body, {
    where: { cart_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "cart_items was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update cart_items with id=${id}. Maybe cart was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating cart_items with id=" + id,
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Cart_items.destroy({
    where: { cart_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "cart_items was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete cart_items with id=${id}. Maybe customer was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete cart_items with id=" + id,
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Cart_items.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} cart_items were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all cart_items.",
      });
    });
};

