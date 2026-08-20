

import mongoose from 'mongoose'

async function dbconnection() {
    try {
        let dbconnection = await mongoose.connect('mongodb://localhost:27017/Group-project')
        console.log("the db is connected successfully")
    } catch (error) {
        console.log("there is in the db connection", error)
    }

}






export default dbconnection