import React from 'react'
import { HiCalendarDateRange } from "react-icons/hi2";
import { BiSolidHome } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { SiMessenger } from "react-icons/si";
import { ImBooks } from "react-icons/im";
import { PiCertificateDuotone } from "react-icons/pi";
import { IoLogOut } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";




const Dashboard = () => {
    return (
        <div className='bg-gray-200 grid grid-cols-1 md:flex justify-center items-center gap-5 md:gap-10 p-5 '>

            {/* left Menu */}
            <div className="  leftMenu flex md:flex-col text-white py-10 justify-center md:justify-start items-center gap-7 md:gap-10 text-[1.5rem] rounded-3xl bg-green-500 h-[15vh] md:h-[93vh] md:w-[7vw]">
               <h1  className='text-sm font-bold hidden md:block'>GoodyMan</h1>
                
                <Link to='#' className=' focus:bg-green-200/50  hover:bg-green-200/50  p-2 rounded-lg'>
                    <BiSolidHome  />
                </Link>
                <Link to='#' className=' focus:bg-green-200/50  hover:bg-green-200/50  p-2 rounded-lg'>
                    <ImBooks />
                </Link>
                <Link to='#' className=' focus:bg-green-200/50  hover:bg-green-200/50  p-2 rounded-lg'>
                    <SiMessenger />
                </Link>
                <Link to='#' className=' focus:bg-green-200/50  hover:bg-green-200/50  p-2 rounded-lg'>
                    <PiCertificateDuotone />
                </Link>
                <Link to='#' className=' focus:bg-green-200/50  hover:bg-green-200/50  p-2 rounded-lg'>
                    <IoMdSettings />
                </Link>
                <Link to='#' className=' focus:bg-green-200/50  hover:bg-green-200/50  p-2 rounded-lg'>
                    <IoLogOut />
                </Link>

            </div>

            {/* Middle Section */}
            <div className="middleSection  flex flex-col gap-10  h-fit md:h-[93vh] md:w-[50vw] relative overflow-y-auto no-scrollbar">

                {/* Profile holder */}
                <div className='grid grid-cols-2 text-white h-[10rem] w-[inherit] bg-green-500 rounded-3xl shadow-lg/25 md:fixed '>
                    <div className='dateNameGreeting p-4 flex flex-col justify-between '>
                        <div className='date text-xs flex gap-2 items-center  py-1 px-3 bg-green-200/50 h-fit w-fit rounded-lg'>
                            < HiCalendarDateRange />  <h1>Apr 13, 2026 <span>2:42 pm</span></h1>
                        </div>

                        <div className='nameAndGreeting leading-6'>
                            <h1 className='text-[1.25rem] md:text-[1.3rem]'> Good Day, <span>Dr. Nicholls</span></h1>
                            <h1>Have a Nice Monday!</h1>
                        </div>
                    </div>


                    <div className='flex justify-end items-center px-10'>
                        <div className="profileImage  h-[8rem] w-[8rem] flex justify-center items-center bg-green-900 border-4 border-white rounded-full">
                            < HiCalendarDateRange />
                        </div>
                    </div>


                </div>


                {/* placeholder Section */}
                <div className='h-fit w-[100%] md:mt-[12rem] md:flex md:flex-col gap-10'>

                    {/* Placeholders */}
                    <div className='placeholders  flex justify-between h-[10rem] w-full '>
                        {/* place1 */}
                        <div className='h-[10rem] w-[30%] bg-white shadow-lg/25 rounded-3xl'>

                        </div>
                        {/* place1 */}
                        <div className='h-[10rem] w-[30%] bg-white shadow-lg/25 rounded-3xl'>

                        </div>
                        {/* place1 */}
                        <div className='h-[10rem] w-[30%] bg-white shadow-lg/25 rounded-3xl'>

                        </div>
                    </div>
                    {/* Placeholders */}
                    <div className='placeholders flex justify-between h-[10rem] w-full '>
                        {/* place1 */}
                        <div className='h-[10rem] w-[30%] bg-white shadow-lg/25 rounded-3xl'>

                        </div>
                        {/* place1 */}
                        <div className='h-[10rem] w-[30%] bg-white shadow-lg/25 rounded-3xl'>

                        </div>
                        {/* place1 */}
                        <div className='h-[10rem] w-[30%] bg-white shadow-lg/25 rounded-3xl'>

                        </div>
                    </div>
                    {/* Placeholders */}
                    <div className='placeholders flex justify-between h-[10rem] w-full '>
                        {/* place1 */}
                        <div className='h-[10rem] w-[30%] bg-white shadow-lg/25 rounded-3xl'>

                        </div>
                        {/* place1 */}
                        <div className='h-[10rem] w-[30%] bg-white shadow-lg/25 rounded-3xl'>

                        </div>
                        {/* place1 */}
                        <div className='h-[10rem] w-[30%] bg-white shadow-lg/25 rounded-3xl'>

                        </div>
                    </div>
                    {/* Placeholders */}
                    <div className='placeholders flex justify-between h-[10rem] w-full '>
                        {/* place1 */}
                        <div className='h-[10rem] w-[30%] bg-white shadow-lg/25 rounded-3xl'>

                        </div>
                        {/* place1 */}
                        <div className='h-[10rem] w-[30%] bg-white shadow-lg/25 rounded-3xl'>

                        </div>
                        {/* place1 */}
                        <div className='h-[10rem] w-[30%] bg-white shadow-lg/25 rounded-3xl'>

                        </div>
                    </div>
                </div>


            </div>

            {/* right Section */}
            <div className="rightSection overflow-y-auto no-scrollbar  h-[30vh] md:h-[93vh] md:w-[30vw] ">

                {/* firstSection */}
                <div className='h-[50vh] w-[inherit]  relative'>
                    <div className='h-[10vh] w-[inherit] bg-green-500 rounded-2xl absolute z-[10]'>

                    </div>

                    <div className='h-[45vh] w-[inherit] bg-white rounded-3xl absolute'>

                    </div>
                </div>


                {/* secondSection */}
                <div className='h-[50vh] w-[inherit]  relative'>
                    <div className='h-[10vh] w-[inherit] bg-green-500 rounded-2xl absolute z-[10]'>

                    </div>

                    <div className='h-[45vh] w-[inherit] bg-white rounded-3xl absolute'>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Dashboard
