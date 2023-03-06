const express = require("express");
const router = express.Router();

//const {home} = require("../controller/index.controller");

const {home} = require("../controller/home");




router.get("/home", (req,res)=> home(req,res));

module.exports=router;

