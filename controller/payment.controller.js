const db = require("../model/indexmodel");
const Payment = db.payment;
 const Op = db.Sequelize.Op;

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.pay_id) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Customer
  const payment = {
    pay_id: req.body.pay_id,
    order_id: req.body.order_id,
    amount: req.body.amount,
    method : req.body.method
  };

  // Inserting Customer  in the database
  Payment.create(payment)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Payment.",
      });
    });
};

//Retrieve all Customers from the database. by using http://localhost:3000/api/customer?c_name=Hadeed
exports.findAll = (req, res) => {
  const method = req.query.method;
  var condition = method ? { method: { [Op.like]: `%${method}%` } } : null;

  Payment.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Payment.",
      });
    });
};



// Find a single Customer with an id
exports.findOne = (req, res) => {
  
  const id = req.params.id;
  

  Payment.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Payment with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Payment with id=" + id,
      });
    });
};

// Update a Customer by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Payment.update(req.body, {
    where: { pay_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Payment was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Payment with id=${id}. Maybe Customer was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Payment with id=" + id,
      });
    });
};


// Delete a Customer with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Payment.destroy({
    where: { pay_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Payment was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Payment with id=${id}. Maybe customer was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Payment with id=" + id,
      });
    });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    Payment.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Payment were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Payment.",
      });
    });
};

