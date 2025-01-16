import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const conn = mongoose.connect("mongodb://localhost:27017/DevFund",{
            useNewUrlParser : true,
        })
    }
    catch(error){
        console.error(error.message)
        process.exit(1)
    }
}

export default connectDB