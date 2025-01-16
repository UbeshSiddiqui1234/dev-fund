"use server"
import Razorpay from "razorpay"
import Payment from "@/models/payment"
import connectDB from "@/db/connectDB"
import User from "@/models/user"
import { useSession } from "next-auth/react"



export const initiate = async (amount, receiver, paymentForm)=>{
    await connectDB()

    let currentUser = await User.findOne({username: receiver})

    const instance = new Razorpay({
        key_id: currentUser.razorpayID,
        key_secret: currentUser.razorpaySecret
    })


    let options = {
        amount: amount,
        currency : "INR"
    }

    let x = await instance.orders.create(options)

    // create payment which shows incomplete in database
    await Payment.create({
        oid: x.id,
        amount: amount,
        sender: paymentForm.name,
        reciever: receiver,
        message: paymentForm.message
    })

    return x
}

export const fetchUser = async(username)=>{
    await connectDB()

    let user = await User.findOne({username:username}).lean().then(res => {
        delete res._id
        return res
    })
    return user
}

export const fetchCreators = async(username) =>{
    await connectDB()

    let creators = await User.find().lean()

    for(let i = 0 ; i < creators.length; i++){
        delete creators[i]._id
    }

    return creators
}

export const fetchPayment = async(username)=>{
    await connectDB()
    let payments = await Payment.find({reciever: username, done: true}).sort({amount: -1}).lean()

    for(let i = 0 ; i < payments.length; i++){
        delete payments[i]._id
    }
    
    return payments
}

export const UpdateUser = async(data, oldName)=>{
    await connectDB()
    const nData = Object.fromEntries(data)

    if(nData.username !== oldName){
        let u = await User.findOne({username: nData.username})
        if(u){
            return {error: "Username already exist"}
        }
        await User.updateOne({email: nData.email}, nData)
        const updateResult = await Payment.updateMany({reciever: oldName}, {reciever : nData.username})
    }

    await User.updateOne({email: nData.email}, nData)

}