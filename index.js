const express=require('express')
const app=express()
const port=3000
require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res)=>{
    res.send('<h1>welcome to login page</h1>')
})
app.get('/twitter',(req,res)=>{
    res.send('this is twitter which is renamed as X by Elon')
})
app.get('/login/compute',(req,res)=>{
    res.send('<h2>routing from login to compute</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})