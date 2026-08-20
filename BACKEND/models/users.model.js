import mongoose from "mongoose";


let usersschema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmpassword: String

})





let users=mongoose.model('users',usersschema)

export default users