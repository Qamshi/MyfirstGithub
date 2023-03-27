const db = require("../model/indexmodel");
const Customer = db.customer;
const Order = db.order;
const Op = db.Sequelize.Op;

// Create and Save a new Order
exports.create = (req, res) => {
  // Validate request
  if (!req.body.o_id) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Order
  const order = {
    o_id: req.body.o_id,
    o_status: req.body.o_status,
    c_id :  req.body.c_id
    //o_status: req.body.o_status,
  };

  // Save Order in the database
  Order.create(order)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the order.",
      });
    });
};

//Retrieve all Order from the database.
exports.findAll = (req, res) => {
  const o_status = req.query.o_status;
  var condition = o_status ? { o_status: { [Op.like]: `%${o_status}%` } } : null;

  Order.findAll({
    where: condition,
    include: [
      {
        model: Customer,
        attributes: ["c_id", "c_name", "c_email", "c_address"]
      }
    ]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Orders."
      });
    });
};

// Find a single Order with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Order.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find order with o_id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving order with o_id=" + id,
      });
    });
};


// Update a Order by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Order.update(req.body, {
    where: { o_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "order was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update customer with id=${id}. Maybe order was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating order with id=" + id,
      });
    });
};

// Delete a Order with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Order.destroy({
    where: { o_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "order was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete order with id=${id}. Maybe order was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete order with id=" + id,
      });
    });
};

// Delete all Order from the database.
exports.deleteAll = (req, res) => {
  Order.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} order were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all order.",
      });
    });
};
