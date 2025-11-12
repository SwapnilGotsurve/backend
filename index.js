require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/home", (req, res) => {
    res.send("You are in home page ")
})
app.get("/youtube", (req, res) => {
    res.send("<h1> Welcome to Youtube </h1>")
})
app.listen( process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})              