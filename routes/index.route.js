const express = require("express");
const router = express.Router();

const {home} = require("../controller/home");
const {contact} = require("../controller/contact");

const {About} = require("../controller/About");
const {Feedback} = require("../controller/Feedback");

const {Login} = require("../controller/Login");
const {Products} = require("../controller/Products");

router.get("/home", (req,res)=> home(req,res));
router.get("/contact", (req,res)=> contact(req,res));
router.get("/About", (req,res)=> About(req,res));
router.get("/Feedback", (req,res)=> Feedback(req,res));
router.get("/Login", (req,res)=> Login(req,res));
router.get("/Products", (req,res)=> Products(req,res));

module.exports=router;

