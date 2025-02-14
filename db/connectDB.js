import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const conn = mongoose.connect(process.env.MONGO_URL,{
            dbName: 'devfund'
        })
    }
    catch(error){
        console.error(error.message)
        process.exit(1)
    }
}

export default connectDB