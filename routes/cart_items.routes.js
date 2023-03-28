const cart_items = require("../controller/cart_items.controller.js");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", cart_items.create);

// Retrieve all Tutorials
 router.get("/", cart_items.findAll);

// Retrieve a single Tutorial with id
router.get("/:id", cart_items.findOne);

// Update a Tutorial with id
router.put("/:id", cart_items.update);

// Delete a Tutorial with id
router.delete("/:id", cart_items.delete);

// Delete all Tutorials
router.delete("/", cart_items.deleteAll);

module.exports = router;
