"use client"
import { useState, useEffect } from "react"
import connectDB from "@/db/connectDB"
import { fetchCreators } from "@/actions/useraction"
import{ useRouter} from "next/navigation"


const page = () => {
    const router = useRouter()
    const [userList, setUserList] = useState([])

    useEffect(() => {
        document.title = 'Creators - DevFund'
        getData()
    }, [])

    const getData = async () => {
        const cr = await fetchCreators()
        setUserList(cr)
    }


    return (
        <div className="mx-auto mobile-landscape:w-full sm:w-2/3">
            <div className="font-bold text-2xl sm:text-4xl text-center mx-auto mt-5 mb-10">Creators</div>
            {userList.length === 0 && <div>No users present</div>}
            {userList.length !== 0 && userList.map((user, index) => {
                return (
                    <div key={index} className="w-4/5 sm:w-1/2 h-12 sm:h-20 bg-black bg-opacity-30 mx-auto rounded-full flex items-center justify-between p-1 sm:p-2 mb-5 cursor-pointer"
                    onClick={()=>{router.push(`/${user.username}`)}}>
                        <div className="profilepic w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-[url('/defaultProfile.png')] bg-cover">
                            {user.profilepic && <img className="w-full h-full object-cover rounded-full" src={user.profilepic} alt="" />}
                        </div>
                        <div className="info flex flex-col w-4/5">
                            <div className="font-bold sm:text-xl">{user.username}</div>
                            <div className="text-sm sm:text-lg">{user.description}</div>
                        </div>
                    </div>
                )
            })}

        </div>


    )
}

export default page