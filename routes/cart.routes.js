const cart = require("../controller/cart.controller.js");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", cart.create);

// Retrieve all Tutorials
// router.get("/", cart.findAll);

// Retrieve all published Tutorials
router.get("/published", cart.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", cart.findOne);

// Update a Tutorial with id
router.put("/:id", cart.update);

// Delete a Tutorial with id
router.delete("/:id", cart.delete);

// Delete all Tutorials
router.delete("/", cart.deleteAll);

module.exports = router;
