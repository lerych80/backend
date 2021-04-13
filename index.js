import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import router from "./router.js"
dotenv.config()

const app = express()
app.use(express.json())
app.use('/api', router)

const PORT = 5000
const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qfadx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => console.log("Connected to DB..."))
  .catch(e => console.log(e))

app.get('/',(req,res)=>{
  console.log(req.query)
  res.send("Hello durling")
})

app.listen(PORT, ()=>{console.log(`SERVER STARTED AT PORT ${PORT}`)})