import NextAuth from "next-auth"
import {useSession,signIn,singOut} from 'next-auth'
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import User from "@/models/user"
import Payment from "@/models/payment"
import user from "@/models/user"
import connectDB from "@/db/connectDB"

export const authOptions = NextAuth({
    providers:[
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        async signIn({user,account,profile,email,credentials}){
            if(account.provider == "github" || account.provider === "google"){
                // connect to database 
                await connectDB()

                // const currentUser = await User.findOne({email:user.email})
                // if(!currentUser){
                //     // create new user
                //     const newUser = await User.create({
                //         username: user.email.split("@")[0],
                //         email: user.email,
                //     })
                //     user.name = newUser.username
                //     await newUser.save()
                // }     
                
                const updatedUser = await User.findOneAndUpdate(
                    { email: user.email },
                    { $setOnInsert: { username: user.email.split("@")[0], email: user.email } },
                    { new: true, upsert: true }
                );

                user.name = updatedUser.username;                         
            }
            return true;
        },
        
        async session({session,user,token}){
            const dbUser = await User.findOne({email: session.user.email})
            session.user.name = dbUser.username
            return session
        }
    }
})

export {authOptions as GET , authOptions as POST}