//apiRouter.js

const express = require("express")
const app = express()
const indexRoutes = require("./routes/index.route");
const util = require('util');

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Tayyab12.",
    database: "webproject",
});
connection.connect();
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
 

const query = util.promisify(connection.query).bind(connection);

(async () => {
  try {
    const rows = await query('SELECT * FROM user');
    console.log(rows[0]);
  } finally {
    connection.end();
  }
})()




app.use("/", indexRoutes)
app.listen(3000)