const express = require("express");
const router = express.Router();


const {home} = require("./index.controller");

router.get("/home", (req,res)=> home(req,res));

module.exports=router;