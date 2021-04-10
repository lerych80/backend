import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json())

const PORT = 5000
const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qfadx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => console.log("Connected to DB..."))
  .catch(e => console.log(e))

app.get('/',(req,res)=>{
  res.send("Hello durling")
})


app.post('/',(req,res)=>{
  console.log(req.body);
  res.status(200).json('Server works goody')
})

app.listen(PORT, ()=>{console.log(`SERVER STARTED AT PORT ${PORT}`)})