import {React} from "react"

const Footer = () =>{
    const currentYear = new Date().getFullYear()
    return (
        <div className="min-h-[7vh] flex items-center justify-center bg-gradient-to-r from-[#3e3e3e] via-black to-[#3e3e3e] text-white">
            <span className="text-center text-xs sm:text-lg">Copyright &copy; {currentYear} DevFund - Platform for the artist and art || All rights reserved</span>
        </div>
    )
}

export default Footer