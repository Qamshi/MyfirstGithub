const express = require("express");
const router = express.Router();


const customerRoutes = require("./customer.routes");
const orderRoutes = require("./order.routes");
const productRoutes = require("./product.routes");
const order_itemsRoutes = require("./order_items.routes");
const cartRoutes = require("./cart.routes");
const cart_itemsRoutes = require("./cart_items.routes");
const adminRoutes = require("./admin.routes");
const feedbackRoutes = require("./feedback.routes");
const paymentRoutes = require("./payment.routes");

router.use("/api/customer",customerRoutes);
router.use("/api/order",orderRoutes);
 router.use("/api/product",productRoutes);
 router.use("/api/order-items",order_itemsRoutes);
 router.use("/api/cart",cartRoutes);
 router.use("/api/cart-items",cart_itemsRoutes);
 router.use("/api/admin",adminRoutes);
 router.use("/api/feedback",feedbackRoutes);
 router.use("/api/payment",paymentRoutes);
router.get("/", (req, res) => {
    res.json({ message: "Welcome to CRUD Application!" });
  });


module.exports=router;

