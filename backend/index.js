// Commands to create the template for the backend

// npm init 
// npm i express
// npm i mongoose
// Remove the nodemodules's '/' from .gitignore - we are removing "/" from that becuase if we push that on github then the node_modules inside of backend will also be pushed 

// Then we will create a connection in mongoCompass app and then we wil copy the connection string and paste it inside the file and use it

// Then we will install nodemon using "npm i nodemon"
// then we will run the server using nodemon index.js(entry point)

// I am using Mongoose becuase it helps in managing data


const connectToMongo = require("./db")
connectToMongo()




const express = require('express')
const app = express()
const port = 3000
app.use(express.json())



// Available Routes
app.use("/api/auth", require("./routes/auth"))
app.use("/api/notes", require("./routes/notes"))

// This will make the code unnecessarily bigger
// app.get('/api/v1/login', (req, res) => {
//   res.send('Hello Login!')
// })
// app.get('/api/v1/signup', (req, res) => {
//   res.send('Hello SignUp!')
// })



app.listen(port, () => {
    // This will run first as the connecting to the mongoose will take time till that time it will run
  console.log(`Example app listening on port ${port}`)
})

