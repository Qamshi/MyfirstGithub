const express = require("express");
const router = express.Router();

//const {home} = require("../controller/index.controller");

const {home} = require("../controller/home");
const {contact} = require("../controller/contact");



router.get("/home", (req,res)=> home(req,res));
router.get("/contact", (req,res)=> contact(req,res));


module.exports=router;

