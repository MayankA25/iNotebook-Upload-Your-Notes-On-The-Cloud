const express = require("express")
const router = express.Router()
const User = require("../models/User")

// In index.js I was using "app.get" but there now i can use router, it is provided by the express by default 

// Now if the request made is of /api/auth , it will be handled by the index.js

// Index.js will redirect it to auth.js. From there all the routes will be handled by the router 

// this specifies what action to perform when the request is for "localhost: 3000/api/auth/"
router.get("/", (req, res)=>{
    console.log(req.body)
    res.send("Hello")
})

module.exports = router


// CRUD Ops ----> Create. Read, Update, Delete