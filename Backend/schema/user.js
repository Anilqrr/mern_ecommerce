const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
        product:{
            type:String,
            required:true,
            index:{unique:true}
        },
        price:{
            type:Number,
            required:true,
            // index: {unique: true}
        },
        image:{
            type:String,
            require:true
        },
        description:{
            type:String,
        }
})

exports.User = mongoose.model('products',UserSchema)