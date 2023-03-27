const admin = require("../controller/admin.controller.js");

var router = require("express").Router();

// Create a new Customer
router.post("/", admin.create);

//Retrieve all Customers
router.get("/", admin.findAll);


// Retrieve a single Customer with id
router.get("/:id", admin.findOne);

// Update a Customer with id
router.put("/:id", admin.update);

// Delete a Customer with id
router.delete("/:id", admin.delete);

// Delete all Customer
router.delete("/", admin.deleteAll);

module.exports = router;
