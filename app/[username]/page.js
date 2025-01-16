"use server"
import React from 'react'
import PaymentPage from '@/components/paymentpage'
import { notFound } from 'next/navigation'
import connectDB from '@/db/connectDB'
import User from '@/models/user'

export default async function UserPage({ params }){
  const { username } = params;

  await connectDB()
  const user = await User.findOne({ username }).lean()

  if(!user){
    return notFound()
  }
 
  return <PaymentPage username={username}/>
}

export async function generateMetadata ({params}) {
  return {
    title: `${params.username} - DevFund`
  }
}
