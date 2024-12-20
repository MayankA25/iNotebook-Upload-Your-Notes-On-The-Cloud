const connectToMongo = require("./db")

connectToMongo()

const express = require("express")
const app = express()
const port = 5000
app.use(express.json())

app.use("/api/auth", require("./routes/auth"))
app.use("/api/notes", require("./routes/notes"))


app.listen(port, ()=>{
    console.log(`Listening On The Port: ${port}`)
})


// Password Hashing


// Suppose we are storing data in a database. A hacker decides to hack the data then hacker will have all the login credentials and then all the users that logged on that website are cooked

// Client <-----> Backend <-----> Database

// Client gives the password and username to the backend if those credentials are valid then it will be stored in the database

// Hash is a one way function means i cannot generate back my password with the hashed password 

// That means even if the hacker hacked the database he will be having access of username and hashed password which is of no use 

// Now If user wants to login then the backend takes the password convert it into hashed password and then compare it with the hashed password present in the database. If matched ---> login



// Now what hackers do nowadays they have a table of common passwords and their hashed passwords which are obtained from very common hashing algos. The table is known as Rainbow Table

// Now if a user enter a common password on a website and hacker attacks that website then login credentials are not safe even after hashing as hacker also has the hashed password