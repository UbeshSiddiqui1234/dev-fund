"use client"
import { useRouter } from 'next/navigation'; 
import { useEffect } from 'react'; 
import { useSession, signIn, singOut } from 'next-auth/react';

const LogIn = ()=>{
    const { data: session ,status } = useSession(); 
    const router = useRouter()

    useEffect(() => { 
        document.title = "LogIn - DevFund"

        if(session) { 
            router.push('/dashboard')
        }
    },[session]);

    if(status === "loading"){
        return <div>Loading...</div>
    }

    if(session) return null
    
    return(
        <div className="text-white">
            <div className=" flex flex-col items-center justify-center w-full h-2/3 gap-5 py-10">
                <h1 className="text-2xl sm:text-3xl mobile-landscape:text-2xl font-bold">Login Options</h1>   
                <button onClick={()=>{signIn("google")}} className="bg-white text-black w-72 py-1 flex items-center justify-around rounded-xl cursor-pointer hover:bg-slate-200">
                    <div className="logo"><img className="h-12" src="/google.png" alt="" /></div>
                    <span className="font-bold w-2/3">Continue with Google</span>
                </button>
                <button className="bg-white text-black w-72 py-1 flex items-center justify-around rounded-xl cursor-pointer hover:bg-slate-200" onClick ={()=>{signIn("github")}}>
                    <div className="logo"><img className="h-12" src="/github.png" alt="" /></div>
                    <span className="font-bold w-2/3">Continue with Github</span>
                </button>
                <div onClick={()=>alert('not available')} className="bg-white text-black w-72 py-1 flex items-center justify-around rounded-xl cursor-pointer hover:bg-slate-200">
                    <div className="logo"><img className="h-12" src="/linkedin.png" alt="" /></div>
                    <span className="font-bold w-2/3">Continue with LinkedIn</span>
                </div>
                <div onClick={()=>alert('not available')} className="bg-white text-black w-72 py-1 flex items-center justify-around rounded-xl cursor-pointer hover:bg-slate-200">
                    <div className="logo"><img className="h-12" src="/x.jpeg" alt="" /></div>
                    <span className="font-bold w-2/3">Continue with X</span>
                </div>
                <div onClick={()=>alert('not available')} className="bg-white text-black w-72 py-1 flex items-center justify-around rounded-xl cursor-pointer hover:bg-slate-200">
                    <div className="logo"><img className="h-12" src="/facebook.png" alt="" /></div>
                    <span className="font-bold w-2/3">Continue with Facebook</span>
                </div>
                
            </div>
        </div>
    )
}

export default LogIn