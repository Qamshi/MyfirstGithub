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

<<<<<<< HEAD
const express = require("express")
const app = express()
const indexRoutes = require("./routes/index.route");
// const util = require('util');

=======
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
const express = require("express")
 const Path=require("path");
const app = express()
app.use(express.static(Path.join(__dirname,'view')))
const indexRoutes = require("./routes/index.route");

// const util = require('util');

>>>>>>> 8751bbde172658e8c2693ab382ca36e6e6855410
// var mysql = require("mysql");
// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Tayyab12.",
//     database: "webproject",
// });
// connection.connect();
<<<<<<< HEAD
=======

>>>>>>> 8751bbde172658e8c2693ab382ca36e6e6855410
/*
var res;

connection.query(
    "SELECT * FROM user",
    function(error , results ,fields) {
        if(error) throw error;
        console.log("User is :", results[1]);
        res = results
    }
)

console.log("User is :", res);  */

// SelectAllElements = () =>{
//     return new Promise((resolve, reject)=>{
//         pool.query("SELECT * FROM user ",  (error, elements)=>{
//             if(error){
//                 return reject(error);
//             }
//             return resolve(elements);
//         });
//     });
// };
// async function sequentialQueries () {
 
//     try{
//     const result1 = await SelectAllElements();
//     console.log("User is :", result1[0]);
//     // here you can do something with the three results
//     } catch(error){
//     console.log(error)
//     }
//     }
 

// const query = util.promisify(connection.query).bind(connection);
<<<<<<< HEAD

// (async () => {
//   try {
//     const rows = await query('SELECT * FROM user');
//     console.log(rows[0]);
//   } finally {
//     connection.end();
//   }
// })()


=======
>>>>>>> 8751bbde172658e8c2693ab382ca36e6e6855410

// (async () => {
//   try {
//     const rows = await query('SELECT * FROM user');
//     console.log(rows[0]);
//   } finally {
//     connection.end();
//   }
// })()

app.use("/", indexRoutes)
app.listen(3000,()=>{
    console.log("Listening on port 3000")
})
