const express = require("express");
const router = express.Router();

//const {home} = require("../controller/index.controller");

const {home} = require("../controller/home");
const {contact} = require("../controller/contact");

const {About} = require("../controller/About");
const {Feedback} = require("../controller/Feedback");



router.get("/home", (req,res)=> home(req,res));
router.get("/contact", (req,res)=> contact(req,res));
router.get("/About", (req,res)=> About(req,res));
router.get("/Feedback", (req,res)=> Feedback(req,res));


module.exports=router;

