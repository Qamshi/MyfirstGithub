// //apiRouter.js
// const express = require("express");
// const cors = require("cors");
// const app = express();

// const db = require("./model/indexmodel.js");
// const indexroutes = require("./routes/index.route");
// const Role = db.role;
//  require("./routes/auth.routes");
//  require("./routes/user.routes");


// var corsOptions = {
//   origin: "http://localhost:3000",
// };

//  app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(express.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));



// db.sequelize
//   .sync()
//   .then(() => {
//     console.log("Synced db.");
//     initial();
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });

// app.use("/",indexroutes);

// // set port, listen for requests
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port http://127.0.01:${PORT} .`);
// });

// function initial() {
//   Role.create({
//     id: 1,
//     name: "user"
//   });
 
//   // Role.create({
//   //   id: 2,
//   //   name: "moderator"
//   // });
 
//   Role.create({
//     id: 3,
//     name: "admin"
//   });
// }

const express = require("express");
const cors = require("cors");
const app = express();

const authRoutes = require('./routes/auth.routes');
//const userRoutes = require('./routes/user.routes');

const db = require("./model/indexmodel.js");
const indexRoutes = require("./routes/index.route");

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use("/",indexRoutes);
// authRoutes(app);
// userRoutes(app);

// const Role = db.role;

// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });

// function initial() {
//   Role.create({
//     id: 1,
//     name: "user"
//   });
 
//   Role.create({
//     id: 3,
//     name: "admin"
//   });
// }

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.01:${PORT} .`);
});
