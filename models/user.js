import mongoose from "mongoose";

const {Schema, model, models} = mongoose

const UserSchema = new Schema({
    email : {type: String, required : true},
    name : {type: String},
    username: {type:String, required: true},
    description: {type:String},
    profilepic: {type: String},
    coverpic: {type: String},
    createdAt: {type: Date, default: Date.now},
    razorpayID: {type: String},
    razorpaySecret: {type: String}
})

const User = mongoose.models.User || model("User", UserSchema)
export default User