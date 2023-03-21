//apiRouter.js
const express = require("express");
const cors = require("cors");
const app = express();
const customerRoutes = require("./routes/customer.routes");
const orderRoutes = require("./routes/order.routes");
const productRoutes = require("./routes/product.routes");
const order_itemsRoutes = require("./routes/order_items.routes");
const cartRoutes = require("./routes/cart.routes");
const cart_itemsRoutes = require("./routes/cart_items.routes");
const db = require("./model/indexmodel.js");

// var corsOptions = {
//   origin: "http://localhost:3000",
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/api/customer", customerRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order_items", order_itemsRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/cart_items", cart_itemsRoutes);

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to CRUD Application!" });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.01:${PORT} .`);
});
