const db = require("../model/indexmodel");
const Product = db.product;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.p_name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const product = {
    p_id: req.body.p_id,
    p_name: req.body.p_name,
    p_desc : req.body.p_desc,
    p_price : req.body.p_price,
    p_category : req.body.p_category
  };

  // Save Tutorial in the database
  Product.create(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the product.",
      });
    });
};

//Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const p_category = req.query.p_category;
  const p_price = req.query.p_price;
  const categoryCondition = p_category ? { p_category: { [Op.eq]: p_category } } : null;
  const priceCondition = p_price ? { p_price: { [Op.gte]: p_price } } : null;

  Product.findAll({ where: categoryCondition || priceCondition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
};


exports.Products = async (req, res, next) => {
  const { p_category } = req.query;
  const { p_price } = req.query;
  const paramQuerySQL = {};
  let limit = req.query.limit ? parseInt(req.query.limit) : null;
  let offset = req.query.offset ? parseInt(req.query.offset) : null;

  // filtering - [p_category or p_price]
  if (p_category) {
    paramQuerySQL.where = { p_category };
  } else if (p_price) {
    paramQuerySQL.where = { p_price: { [Op.gte]: p_price } };
  }

  paramQuerySQL.limit = limit;
  paramQuerySQL.offset = offset;

  try {
    const data = await Product.findAll(paramQuerySQL);
    if (data) {
      res.status(200).json({ data });
    }
  } catch (err) {
    next(err);
  }
};



// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find product with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving order with id=" + id,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Product.update(req.body, {
    where: { p_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "product was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update product with id=${id}. Maybe order was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating product with id=" + id,
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Product.destroy({
    where: { p_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "product was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete product with id=${id}. Maybe order was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not product order with id=" + id,
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Product.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} product were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all product.",
      });
    });
};