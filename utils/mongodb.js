import mongoose, { Schema } from "mongoose";

export const MongoDbConnect = async()=>{
    try {
        mongoose.connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log("unable to connect");
    }
}