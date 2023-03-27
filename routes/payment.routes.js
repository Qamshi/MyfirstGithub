const payment = require("../controller/payment.controller.js");

var router = require("express").Router();

// Create a new Customer
router.post("/", payment.create);

//Retrieve all Customers
router.get("/", payment.findAll);


// Retrieve a single Customer with id
router.get("/:id", payment.findOne);

// Update a Customer with id
router.put("/:id", payment.update);

// Delete a Customer with id
router.delete("/:id", payment.delete);

// Delete all Customer
router.delete("/", payment.deleteAll);

module.exports = router;
