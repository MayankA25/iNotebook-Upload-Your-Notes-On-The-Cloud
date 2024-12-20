const connecToMongo = require("./db")
const express = require("express")


connecToMongo()


const app = express()
const port = 5000


app.use(express.json())     // If we want to receive a json response from request then we have to use this otherwise I will get the response as undefined. It basically acts as a middleware


app.use("/api/auth", require('./routes/auth.js'))
app.use("/api/notes", require("./routes/notes.js"))


app.listen(port, ()=>{
    console.log(`Listening on the port: ${port}`)
})

