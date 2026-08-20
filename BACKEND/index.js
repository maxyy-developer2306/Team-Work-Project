
import express from 'express'
import cors from 'cors'
import dbconnection from './DB/dbconnection.js'
dbconnection()
import authroute from './Routes/Register.route.js'
let app=express()





app.use(cors())
app.use(express.json())



app.use('/registration',authroute)









app.listen(9000,function(){
    console.log("the backend is running on port number 9000")
})
