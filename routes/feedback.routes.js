const feedback = require("../controller/feedback.controller.js");

var router = require("express").Router();

// Create a new Customer
router.post("/", feedback.create);

//Retrieve all Customers
router.get("/", feedback.findAll);


// Retrieve a single Customer with id
router.get("/:id", feedback.findOne);

// Update a Customer with id
router.put("/:id", feedback.update);

// Delete a Customer with id
router.delete("/:id", feedback.delete);

// Delete all Customer
router.delete("/", feedback.deleteAll);

module.exports = router;
