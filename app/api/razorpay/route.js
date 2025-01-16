import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import payment from "@/models/payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDB";

export const POST = async(req)=>{
    await connectDB()
    let body = await req.formData()

    body = Object.fromEntries(body)

    let p = await payment.findOne({oid: body.razorpay_order_id})
    if(!p){
        return NextResponse.json({sucess:false, message:'order not found'})
    }

    let isValid = validatePaymentVerification({"order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id},
        body.razorpay_signature, process.env.RAZORPAY_SECRET)

    if(isValid){
        let updatedPayment = await payment.findOneAndUpdate({oid: body.razorpay_order_id},{done:true}, {new: true})
        return NextResponse.redirect(`http://${process.env.NEXT_PUBLIC_URL}/${updatedPayment.reciever}?paymentdone=true`)
    }
    else{
        return NextResponse.json({sucess: false, message: "Internal server Error"})
    }
}
