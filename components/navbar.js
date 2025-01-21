"use client"
import {React} from "react"
import {useState, useRef ,useEffect} from "react"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = ()=>{
    const {data:session} = useSession()
    const [showDropdown,setShowDropdown] = useState(false)
    
    // if(session){
    //     return(
    //         <>
    //         Signed in as {session.user.email}
    //         <button onClick= {()=>{signOut()}}>Sign Out</button>
    //         </>
    //     )
    // }
    return(
        <div className="flex justify-between mobile-landscape:justify-between px-5 sm:justify-around min-h-[7vh] items-center bg-gradient-to-r from-[#3e3e3e] via-black to-[#3e3e3e] text-white">
            <Link href={"/"}><div className="font-bold text-2xl">DevFund</div></Link>

            {session && 
                <div className="relative" onMouseEnter={()=>setShowDropdown(true)} onMouseLeave={()=>setShowDropdown(false)}>
                    <button
                    className="text-white w-fit hidden sm:flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        <span>Welcome {session.user.email}</span>
                        <img className="invert" src="dropdown.svg" width="30px" alt=""/>
                    </button>

                    <button
                    className="flex sm:hidden text-white w-fit items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
                    onClick={()=>setShowDropdown(!showDropdown)}>
                        <span>Menu</span>
                        <img className="invert" src="dropdown.svg" width="30px" alt="Dropdown Icon" />
                    </button>
                    {showDropdown && <div onMouseLeave={()=>setShowDropdown(false)} className="absolute sm:right-5 right-0 bg-gray-600 flex flex-col items-center justify-center py-2.5 w-[150px] rounded-lg z-50">
                        <Link onClick={()=>setShowDropdown(!showDropdown)} className="hover:bg-gray-500 flex items-center py-1.5 px-3 w-full" href={'/'}>Home</Link>
                        <Link onClick={()=>setShowDropdown(!showDropdown)} className="hover:bg-gray-500 flex items-center py-1.5 px-3 w-full" href={'/dashboard'}>Dashbaord</Link>
                        <Link onClick={()=>setShowDropdown(!showDropdown)} className="hover:bg-gray-500 flex items-center py-1.5 px-3 w-full" href={`/${encodedURIComponent(session.user.name)}`}>Your page</Link>
                        <Link className="hover:bg-gray-500 flex items-center py-1.5 px-3 w-full" href={`/creators`}>Creators</Link>
                        <div className="hover:bg-gray-500 flex items-center py-1.5 px-3 w-full" 
                        onClick={()=>{
                            signOut() 
                            setShowDropdown(!showDropdown)
                        }}>
                            Sign out
                        </div>
                    </div>}
                </div>
            }

            {!session &&
                <div className="flex itmes-center justify-center h-full">
                    <Link href={"/login"}>
                        <button  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Log in</button>
                    </Link>
                </div>
            }

            
        </div>
    )
}

export default Navbar