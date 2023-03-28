const db = require("../model/indexmodel");
const Order = require("../model/ordermodel");
const Order_items = db.order_items;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.item_quantity) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const order_items = {
    item_quantity: req.body.item_quantity,
    order_id: req.body.order_id,
    product_id: req.body.product_id

  };

  // Save Tutorial in the database
  Order_items.create(order_items)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the order_items.",
      });
    });
};

//Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const item_quantity = req.query.item_quantity;
  var condition = item_quantity ? { item_quantity: { [Op.like]: `%${item_quantity}%` } } : null;

  Order_items.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving order_items.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Order_items.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving order_items with id=" + id,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Order_items.update(req.body, {
    where: { order_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "order_items was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update order_items with id=${id}. Maybe order_items was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating order_items with id=" + id,
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Order_items.destroy({
    where: { order_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "order_items was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete order_items with id=${id}. Maybe order_items was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete order_items with id=" + id,
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Order_items.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} customer were order_items successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all order_items.",
      });
    });
};
