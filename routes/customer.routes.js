const customer = require("../controller/customer.controller.js");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", customer.create);

// Retrieve all Tutorials
// router.get("/", customer.findAll);

// Retrieve all published Tutorials
router.get("/published", customer.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", customer.findOne);

// Update a Tutorial with id
router.put("/:id", customer.update);

// Delete a Tutorial with id
router.delete("/:id", customer.delete);

// Delete all Tutorials
router.delete("/", customer.deleteAll);

module.exports = router;
