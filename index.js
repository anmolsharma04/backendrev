const users =  require ('./MOCK_DATA.json')
const express = require ('express')
const userRouter = require('./routes/user')
const {connectMongo} = require('./connection.js')
const mongoose = require('mongoose')

//connection
mongoose.connect('yoururl/testdata')
.then(()=>console.log("mongodb connected"))
.catch(err=>console.log("mongo error",err))


const app = express()
const port = 8000


//middleware
app.use(express.urlencoded({extended:false}))


//we have removed /user from all http methods and export common user middleware here
//below means if request triggers at /user then use userRouter
app.use('/user',userRouter)

app.listen(port , ()=>console.log(`server is running on port: ${port}`))
