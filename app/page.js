import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="entry mobile-landscape:h-[80vh] h-[40vh] w-full flex flex-col items-center justify-center text-white p-5 gap-3 sm:gap-5">
        <div className="font-bold text-3xl landscape:text-3xl sm:text-5xl flex items-center justify-center">
          <span>Fund the developer</span>
          <span><div className="block relative">
            <iframe className="w-20 mobile-landscape:w-20 sm:w-36 pointer-events-none" src="https://giphy.com/embed/SQTSmiJl0uKoZNdv1T"  allowFullScreen></iframe>
            <div className="absolute w-full h-full bg-transparent top-0 left-0 pointer-events-none"></div>
          </div></span>
        </div>
        <span className="text-center">A crowdfunding platfrom for creators. Get funded by your fan and followers. Start now!</span>

        <div className="flex gap-5">
          <Link href={"/creators"}><button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Explore Creators</button></Link>
          <Link href={"/about"}><button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">About us</button></Link>
        </div>
      </div>

      <div className="h-[1px] my-5 sm:my-10 bg-white"></div>

      <div className="text-white w-full flex flex-col items-center justify-center gap-5">
        <div className="font-bold text-2xl sm:text-3xl">Your fans can support you</div>

        <div className="flex flex-col md:flex-row  mx-auto w-2/3 gap-8 md:gap-3 md:items-center md:justify-between mobile-landscape:w-full mobile-landscape:justify-around">
          <div className="flex flex-col items-center">
            <img className="sm:w-32 w-20" src="/man.gif" alt="" />
            <span>Showcase your work</span>
            <span className="text-center">Your fans are available to help you</span>
          </div>

          <div className="flex flex-col items-center">
            <img className="sm:w-32 w-20" src="/coin.gif" alt="" />
            <span>Get the crowdfunding</span>
            <span className="text-center">Your fans are available to help you</span>
          </div>

          <div className="flex flex-col items-center">
            <img className="sm:w-32 w-20" src="/group.gif" alt="" />
            <span>Join the community</span>
            <span className="text-center">Your fans are available to help you</span>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] my-10 bg-white"></div>

      <div className="text-white flex flex-col items-center justify-center gap-5 pb-10">
        <div className="font-bold text-2xl sm:text-3xl">Learn more about us</div>
        <div className="sm:w-[500px] sm:h-[250px]">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/RgKAFK5djSk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>      
      </div>

    </div>
  );
}

export const metadata = {
  title: 'DevFund - Home'
}
