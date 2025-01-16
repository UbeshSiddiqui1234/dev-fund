"use client"
import React from 'react'
import {useSession} from 'next-auth/react'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { fetchUser, UpdateUser } from '@/actions/useraction'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from "react-toastify";

const page = () => {
  const [info, setInfo] = useState({
    name:"",
    email:"",
    username:"",
    description:"",
    profilepic: "",
    coverpic: "",
    razorpayID: "",
    razorpaySecret: ""
  })
  const {data: session , status} = useSession()
  const router = useRouter()

  const getData = async()=>{
    if(session && session.user){
      let user = await fetchUser(session.user.name)
      setInfo(user)
    }
  }

  useEffect(() => { 
    document.title = 'Dashbaoard - DevFund'
    getData()
    if(!session){
      router.push("/login")
    }
  },[status]);

  if(status === "loading"){
    return <div>Loading...</div>
  }

  if(!session) return null



  const handleChange = (e)=>{
    setInfo({...info, [e.target.name]: e.target.value})
  }

  const handleSubmit = async(data)=>{
    await UpdateUser(data,session.user.name)

    if(data.username !== session.user.name){
      session.user.name = data.username
    }

    toast('Profile updated', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }

  return (
    <div>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
      />
      <div className='mx-auto px-5 sm:w-1/2 flex flex-col items-center mt-8 gap-5'>
        <h1 className='text-2xl sm:text-3xl font-bold text-center'>Welcome to your dashboard</h1>

        <form className="information w-full flex flex-col gap-3 items-center" action={handleSubmit}>
          <div className="w-full">
            <div>Name</div>
            <input name='name' value={info.name} onChange={handleChange} className='w-full rounded-xl bg-slate-800 text-white p-2' type="text" />
          </div>
          <div className="w-full">
            <div>Email</div>
            <input name='email' value={info.email} onChange={handleChange} className='w-full rounded-xl bg-slate-800 text-white p-2' type="text" />
          </div>
          <div className="w-full">
            <div>Username</div>
            <input name='username' value={info.username} onChange={handleChange} className='w-full rounded-xl bg-slate-800 text-white p-2' type="text" />
          </div>
          <div className="w-full">
            <div>Description</div>
            <input name='description' value={info.description} onChange={handleChange} className='w-full rounded-xl bg-slate-800 text-white p-2' type="text" />
          </div>
          <div className="w-full">
            <div>Profile picture link</div>
            <input name='profilepic' value={info.profilepic} onChange={handleChange} className='w-full rounded-xl bg-slate-800 text-white p-2' type="text" />
          </div>
          <div className="w-full">
            <div>Cover picture link</div>
            <input name='coverpic' value={info.coverpic} onChange={handleChange} className='w-full rounded-xl bg-slate-800 text-white p-2' type="text" />
          </div>
          <div className="w-full">
            <div>Razorpay id</div>
            <input name='razorpayID' value={info.razorpayID} onChange={handleChange} className='w-full rounded-xl bg-slate-800 text-white p-2' type="text" />
          </div>
          <div className="w-full">
            <div>Razorpay secret</div>
            <input name='razorpaySecret' value={info.razorpaySecret} onChange={handleChange} className='w-full rounded-xl bg-slate-800 text-white p-2' type="text" />
          </div>
          
          <button type='submit' className="w-fit flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-9 py-2.5 text-center me-2 mb-2">Save</button>
        </form>
      </div>
    </div>
  )
}

export default page