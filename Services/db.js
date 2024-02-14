const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Contacts')

const user = mongoose.model('users',{
    id:String,
    name:String,
    address:String,
    phone:String,
    email:String
})


module.exports={user}