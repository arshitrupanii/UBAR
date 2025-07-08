import express from "express"
import dotenv from "dotenv"
import ConnectDb from "./db/db.js"
dotenv.config();

ConnectDb()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
