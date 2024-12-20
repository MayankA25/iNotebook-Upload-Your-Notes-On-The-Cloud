const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Create a user using POST, No Login Required
router.post(
  "/",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must be atleast 8 characters").isLength({ min: 8 }),
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {

    // If there are errors then return a bad request
    let result = validationResult(req);
    if (result.isEmpty()) {
      // as findOne returns a promise so i have to wait till the promise is resolve otherwise i will always get something inside user which makes the following statement true always
      try{

        let user = await User.findOne({ email: req.body.email })
        if(user){
          return res.status(400).json({error: "Email already exists!"})
        }
        
        let createdUser = await User.create({
          name: req.body.name, 
          password: req.body.password,
          email: req.body.email
        })
        res.json(createdUser)
        return;
      }
      catch (error){
        // If any error occurs while creating user then this block of code will run
        res.status(500).send("Some Error Occured")
        console.log(error.message)
      }
    } else {
      res.status(400).json({ errors: result.array() });
      return;
    }
  }
);

module.exports = router;
