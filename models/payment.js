import mongoose from "mongoose";

const {Schema, model} = mongoose

const PaymentSchema = new Schema({
    sender: {type: String, required: true},
    reciever: {type: String, required: true},
    oid: {type: String, required:true},
    message: {type: String},
    amount: {type:Number, required:true},
    date: {type: Date, default : Date.now},
    done: {type: Boolean, default:false}
})

const Payment = mongoose.models.Payment || new model("Payment", PaymentSchema)
export default Payment