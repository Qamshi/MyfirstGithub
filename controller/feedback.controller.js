const db = require("../model/indexmodel");
const Feedback = db.feedback;
 const Op = db.Sequelize.Op;

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.f_id) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Customer
  const feedback = {
    f_id: req.body.f_id,
    order_id: req.body.order_id,
    comments: req.body.comments,
    admin_id: req.body.admin_id
  };

  // Inserting Customer  in the database
  Feedback.create(feedback)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Feedback.",
      });
    });
};

//Retrieve all Customers from the database. by using http://localhost:3000/api/customer?c_name=Hadeed
exports.findAll = (req, res) => {
  const f_id = req.query.f_id;
  var condition = f_id ? { f_id: { [Op.like]: `%${f_id}%` } } : null;

  Feedback.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Feedback.",
      });
    });
};



// Find a single Customer with an id
exports.findOne = (req, res) => {
  
  const id = req.params.id;
  

  Feedback.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Feedback with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Feedback with id=" + id,
      });
    });
};

// Update a Customer by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Feedback.update(req.body, {
    where: { f_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Feedback was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Feedback with id=${id}. Maybe Customer was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Feedback with id=" + id,
      });
    });
};


// Delete a Customer with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Feedback.destroy({
    where: { f_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Feedback was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Feedback with id=${id}. Maybe customer was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Feedback with id=" + id,
      });
    });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    Feedback.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Feedback were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Feedback.",
      });
    });
};

