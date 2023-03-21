const order_items = require("../controller/order_items.controller.js");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", order_items.create);

// Retrieve all Tutorials
// router.get("/", order_items.findAll);

// Retrieve all published Tutorials
router.get("/published", order_items.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", order_items.findOne);

// Update a Tutorial with id
router.put("/:id", order_items.update);

// Delete a Tutorial with id
router.delete("/:id", order_items.delete);

// Delete all Tutorials
router.delete("/", order_items.deleteAll);

module.exports = router;
