const express = require("express")
const app = express()
const indexRoutes = require("./routes/index.route");
// app.get('/', (req,res)=>{

//     res.send("hello world")

// })

app.use("/", indexRoutes)
app.listen(3000)