"use client"
import React ,{useEffect, useState} from "react";
import Razorpay from "razorpay";
import { initiate, fetchUser, fetchPayment } from "@/actions/useraction";
import Script from "next/script"
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from "react-toastify";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const PaymentPage = ({username})=>{

    const [currentUser, setCurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const [paymentForm,setPaymentForm] = useState({name:"",amount:"", message:""})
    const [total, setTotal] = useState(0)
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(()=>{
        getData()

        if(searchParams.get("paymentdone") == "true"){
            toast('Thanks for donation', {
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

            router.push(`/${username}`)
        }

    },[])

    useEffect(()=>{
        let totalPay = 0;
        for(let i=0; i < payments.length; i++){
            totalPay += payments[i].amount
        }

        setTotal(totalPay/100)
    ,[payments]})


    const handleChange = (e)=>{
        setPaymentForm({...paymentForm,[e.target.name]:e.target.value})
    }

    const getData = async()=>{
        let user = await fetchUser(username)
        setCurrentUser(user)

        let p = await fetchPayment(username)
        setPayments(p)

    }

    const pay = async (amount) => {
        // Get the order Id 
        
        let a = await initiate(amount, username, paymentForm)
        let orderId = a.id

        const options = {
            "key": currentUser.razorpayID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "DevFund", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `http://${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9315449219" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new window.Razorpay(options)
        rzp1.open()
    }



    return (
        <>  
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

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

            <div className='cover w-full h-[30vh] md:h-[50vh] relative'>
                <div className="w-full h-full bg-[url('/defaulCover.jpg')] bg-cover">
                    <img className='w-full h-full obejct-cover' src={currentUser.coverpic} alt=""></img>
                </div>
                <div className='absolute h-[150px] w-[150px] -bottom-20 left-[calc(50%-75px)] align-middle border-2 border-white rounded-full bg-[url("/defaultProfile.png")] bg-cover'>
                    <img className='rounded-full object-cover w-full h-full' src={currentUser.profilepic} alt="" />
                </div>
            </div>
    
            <div className="info mx-auto flex flex-col items-center mt-24 gap-1">
                <div className="name text-3xl font-bold">{username.charAt(0).toUpperCase() + username.slice(1)}</div>
                <div>{currentUser.description}</div>
    
                <div className='flex gap-2 items-center text-slate-400'>
                    <span>{payments.length} payments</span>
                    <div className="dot w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                    <span>₹{total} total collection</span>
                    <div className="dot w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                    <span>2 posts</span>
                </div>
    
                <button className="w-fit flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-9 py-2.5 text-center me-2 mb-2">Start for free</button>
            </div>
    
            <div className="sections w-4/5 my-10 md:h-[50vh] items-center mx-auto flex flex-col md:flex-row mobile-landscape:flex-col gap-2 mobile-landscape:h-fit">
                <div className='messages h-full w-full mobile-landscape:w-[80vw] md:w-1/2 bg-slate-900 p-5 rounded-xl'>
                    <h1 className='text-2xl font-bold'>Supporters</h1>
                    {payments.length==0 && <div className='my-3 px-5'>No one has donated till now</div>}
                    <ul className='my-3 px-5 h-5/6 flex flex-col gap-3 overflow-y-scroll'>
                        {payments.length!==0 && payments.map((x,index)=>{
                            return(
                            <li key={index} className='flex gap-2 items-center'>
                                <img width={30} height={30} className='rounded-full' src="/avatar.gif" alt="" />
                                <span>
                                    {x.sender} donated <span className='font-bold'>₹{ parseInt(x.amount)/100 }</span> with message "{x.message}"
                                </span>
                            </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='pay h-full md:w-1/2 w-full mobile-landscape:w-[80vw] bg-slate-900 p-5 rounded-xl'>
                    <h1 className='text-2xl font-bold'>Make payment</h1>
    
                    <div className="payment flex flex-col mt-5 gap-3">
                        <div className="amount flex flex-col gap-2 items-center">
                            <input name="name" value={paymentForm.name} onChange={handleChange} className='w-full rounded-xl bg-slate-800 text-white p-2' placeholder='Enter Name' type="text"/>
                            <input name="message" value={paymentForm.message} onChange={handleChange} className='w-full rounded-xl bg-slate-800 text-white p-2' placeholder='Enter message' type="text" />
                            <input name="amount" value={paymentForm.amount} onChange={handleChange} className='w-full rounded-xl bg-slate-800 text-white p-2' placeholder='Enter amount' type="text" />
                            <button onClick={()=>{pay(parseInt(paymentForm.amount) * 100)}}
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800
                            font-medium rounded-lg text-sm px-9 py-2.5 text-center me-2 mb-2 disabled:from-gray-700 disabled:hover:from-gray-700 disabled:hover:bg-gradient-to-r" 
                            disabled={paymentForm.name < 3 || paymentForm.message < 4 || paymentForm.amount.length < 1}>
                                Pay
                            </button>
                        </div>

                        {(!currentUser.razorpayID || !currentUser.razorpaySecret) && <div className="text-red-600">User not entered their razorpay credentials</div>}
    
                        <div className='flex gap-2'>
                            <button onClick={()=> pay(1000)} disabled={paymentForm.name < 3 || paymentForm.message < 4 || !currentUser.razorpayID || !currentUser.razorpaySecret } className='bg-slate-800 disabled:bg-gray-600 p-2 rounded-lg'>Pay ₹10</button>
                            <button onClick={()=> pay(2000)} disabled={paymentForm.name < 3 || paymentForm.message < 4 || !currentUser.razorpayID || !currentUser.razorpaySecret } className='bg-slate-800 disabled:bg-gray-600 p-2 rounded-lg'>Pay ₹20</button>
                            <button onClick={()=> pay(3000)} disabled={paymentForm.name < 3 || paymentForm.message < 4 || !currentUser.razorpayID || !currentUser.razorpaySecret } className='bg-slate-800 disabled:bg-gray-600 p-2 rounded-lg'>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
      )
}

export default PaymentPage