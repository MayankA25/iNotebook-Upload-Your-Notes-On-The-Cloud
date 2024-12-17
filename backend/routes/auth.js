const express = require("express")
const router = express.Router()


router.get("/", (req, res)=>{
    console.log(req.body) // shows undefined because request body is empty now
    res.send("Hello")
})

module.exports = router


