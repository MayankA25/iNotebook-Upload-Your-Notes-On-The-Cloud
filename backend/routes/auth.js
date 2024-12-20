const express = require("express")
const User = require("../models/User")
const router = express.Router()


// Create a user using: POST "/api/auth/". Does Not require Auth
// Will Change the method from get to post to ensure that the data doesnt come in the url
router.post("/", async (req, res)=>{
    console.log(req.body)
    res.send(req.body)  // It will take the request from then sends back a response which will be visible on the client side
    const user = User(req.body) // creating a user
    await user.save() // saving the user in databse which will be visible in the mongodbcompass app under test database

    // Here I am not able to perform checks if the user is entering phone number instead of email and then my app will throw error so i have to handle that
})

module.exports = router