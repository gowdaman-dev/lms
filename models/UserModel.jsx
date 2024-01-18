import mongoose, { Schema } from "mongoose";

const User = new Schema({
    profile:{
        type:String,
        required:false
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        required:false
    },
    phnumber:{
        type:String,
        required:false
    },
    erpno:{
        type:String,
        required:false
    },
})