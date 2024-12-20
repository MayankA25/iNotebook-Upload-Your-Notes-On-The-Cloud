const express = require("express");
const User = require("../models/User");
const router = express.Router();
// After installing npm install --save express-validator
const { body, validationResult } = require("express-validator");
// Here I am using validation result to check if the name email and password are valid or not if it is valid then only it will be saved otherwise a 400 error will be returned 

// remember to use 'body' in place of 'query' but on the express-validation docs 'query' is mentioned


// How To Check

// body('<parameter_name>', '<msg> ---> displayed if invalid data is entered').propertyCheckk({<if_any>})

router.post(
  "/",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must be atleast 8 characters").isLength({ min: 8 }),
    body("email", "Enter a valid email").isEmail(),
  ],
  (req, res) => {
    let result = validationResult(req);
    if (result.isEmpty()) {
      // We can also create user like this
      User.create({
        name: req.body.name,    // here the paramneters should be same as specified in the schema
        password: req.body.password,
        email: req.body.email
      }).then(user=> res.json(user)).catch(err=>{console.log(err)
        res.json({error : "Please Enter a Unique Value for email", message: err.message})
      })
      // create returns a promise 
      return;
    } else {
      res.status(400).json({ errors: result.array() });
      return;
    }
  }
);

module.exports = router;
