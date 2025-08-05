import React from 'react'
import Logo from '../assets/images/goodyman.png'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import scroll1 from '../assets/images/1.png'
import scroll2 from '../assets/images/2.png'
import scroll3 from '../assets/images/3.png'
import scroll4 from '../assets/images/4.png'
import scroll5 from '../assets/images/5.png'
import scroll6 from '../assets/images/6.png'
import scroll7 from '../assets/images/7.png'
import scroll8 from '../assets/images/8.png'
import scroll9 from '../assets/images/9.png'
import scroll10 from '../assets/images/10.png'
import scroll11 from '../assets/images/11.png'
import scroll12 from '../assets/images/12.png'
import scroll13 from '../assets/images/13.png'
import scroll14 from '../assets/images/14.png'
import scroll15 from '../assets/images/15.png'
import { TbWorldCode } from "react-icons/tb";
import RequestInformation from './RequestInformation';
import { FaPenNib } from "react-icons/fa6";
import { MdCoPresent } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";
import { IoSchoolOutline } from "react-icons/io5";
import { FaUserGear } from "react-icons/fa6";
import future from '../assets/images/future.jpg'
import collaboration from '../assets/images/collaboration.jpg'


const Home = () => {
    return (
        <div>

            {/* navigation section */}
            <div className="nav flex justify-between py-5 pl-5 pe-16 items-center bg-gray-100">
                {/* logo */}
                <div className="logo">
                    <img src={Logo} alt="" className='h-10 w-auto' />
                </div>

                {/* menu */}
                <div className="menu">
                    <ul>
                        <li className='py-2 px-3 flex gap-2 items-center bg-green-500 rounded-full cursor-pointer hover:text-green-500 hover:bg-transparent'>Register  <div className='bg-white p-2 rounded-full'><  MdKeyboardDoubleArrowRight className='text-lg' /></div> </li>

                    </ul>
                </div>
            </div>


            {/* Hero Section */}
            <div className="hero p-5 md:px-20  h-fit grid grid-cols-1 md:grid-cols-2  gap-2">

                <div className="heroText flex flex-col justify-center items-center ">

                    <h1 className='text-center text-4xl leading-12 px-7 font-bold'>
                        START YOUR  <br /> JOURNEY TODAY
                    </h1>
                    <p className='text-center p-5 text-md text-gray-500'>Our accredited Tech Courses and  program equips you with the leadership skills, strategic mindset, and tech-savvy insight to succeed in today’s global economy—and to thrive in careers that haven’t even been invented yet.</p>


                    <RequestInformation />
                </div>


                {/* hero image */}
                <div className="heroImage mt-5 rounded-lg h-100  ">

                </div>




            </div>


            {/* collaborate section */}
            <div className='bg-green-100 my-10 py-10'>
                <div className='text-center'>
                    <h1>We collaborate with the following digital leaders to ensure students are equipped with up-to-date skills:</h1>
                </div>


                {/* scrolling effect section */}
                <div className="logos">
                    <div className="logos-slide">
                        <img src={scroll1} />
                        <img src={scroll2} />
                        <img src={scroll3} />
                        <img src={scroll4} />
                        <img src={scroll5} />
                        <img src={scroll6} />
                        <img src={scroll7} />
                        <img src={scroll8} />
                        <img src={scroll9} />
                        <img src={scroll10} />
                        <img src={scroll11} />
                        <img src={scroll12} />
                        <img src={scroll13} />
                        <img src={scroll14} />
                        <img src={scroll15} />
                    </div>

                </div>
            </div>


            {/* Specilization section */}
            <div className='grid grid-cols-1 md:grid-cols-2 my-28 px-5 gap-5'>
                <div className='left text-center'>
                    <p className='text-2xl italic'>New Specializations Available</p>
                    <h1 className='text-4xl font-bold my-4'>Master of  <br /> Website Design & Development, Brand Design, Office Experts  </h1>
                </div>

                <div className="right">
                    <p className='text-center leading-5 text-gray-600'>Customize your learning process with cutting-edge specializations
                        in Web development, Branding and Marketing, Office Experts,  Learning Leadership,
                        Supply Chain Management, or Business Analytics — designed
                        to give you a competitive edge in the industries shaping
                        tomorrow.
                    </p>
                </div>
            </div>

            {/* Course list */}
            <div className="courseList  grid grid-cols-1 px-10 md:flex  justify-center gap-10 ">
                <div className="courseFrame flex flex-col items-center justify-center p-10 h-90 w-90 bg-red-100 rounded-2xl">
                    <TbWorldCode className='text-7xl text-red-800' />
                    <h1 className='font-bold '>Web Design & Development</h1>
                    <p className='text-center mt-3 leading-5'>This specialization equips graduates
                        with strategic, ethical, and
                        innovative leadership skills
                        to navigate the rapidly evolving
                        AI landscape and apply the Artificial
                        Intelligence principles in Business.
                    </p>


                    <RequestInformation />
                </div>
                <div className="courseFrame flex flex-col items-center justify-center p-10 h-90 w-90 bg-blue-100 rounded-2xl">
                    <FaPenNib className='text-7xl text-blue-800' />
                    <h1 className='font-bold '>Branding and Marketing</h1>
                    <p className='text-center mt-3 leading-5'>This specialization equips graduates
                        with strategic, ethical, and
                        innovative leadership skills
                        to navigate the rapidly evolving
                        AI landscape and apply the Artificial
                        Intelligence principles in Business.
                    </p>


                    <RequestInformation />
                </div>
                <div className="courseFrame flex flex-col items-center justify-center p-10 h-90 w-90 bg-green-100 rounded-2xl">
                    <MdCoPresent className='text-7xl text-green-800' />
                    <h1 className='font-bold '>Office Expert</h1>
                    <p className='text-center mt-3 leading-5'>This specialization equips graduates
                        with strategic, ethical, and
                        innovative leadership skills
                        to navigate the rapidly evolving
                        AI landscape and apply the Artificial
                        Intelligence principles in Business.
                    </p>


                    <RequestInformation />
                </div>


            </div>

            {/* Tuition and Sections */}
            <div className="sections bg-gray-100 m-10 p-5 md:p-8 content-center gap-5 md:gap-10 rounded-3xl h-80 md:h-50 grid grid-cols-2 md:grid-cols-4">

                <div className='section '>
                    <h1 className='text-3xl font-bold'>Tuition Fee</h1>
                    <p className='text-gray-600 leading-5'>Total Tuition for Courses is based on the Course Applied
                        Students 
                    </p>
                </div>
                <div className='section '>
                    <h1 className='text-3xl font-bold'>Intakes</h1>
                    <p className='text-gray-600 leading-5'>Morning: 9-12pm , Afternoon: 1-4pm, Evening: 5 - 7:30pm
                    </p>
                </div>
                <div className='section '>
                    <h1 className='text-3xl font-bold'>Delivery</h1>
                    <p className='text-gray-600 leading-5'>Hybrid Mode
                        (in-person and online guided learning)
                    </p>
                </div>
                <div className='section '>
                    <h1 className='text-3xl font-bold'>Duration</h1>
                    <p className='text-gray-600 leading-5'>4 - 6 Months
                    </p>
                </div>



            </div>

            {/* Requirements */}
            <div className='p-10 gap-2 my-4 flex flex-col text-center justify-center items-center'>
                <h1 className='text-3xl font-bold'>Minimun CGPA Requirement</h1>
                <p className='text-gray-500 md:text-xl'>Do you have a desire to Change your Life, become better? Apply to our Coaching Training!</p>
                <RequestInformation />
            </div>


            {/* Choose your path */}
            <div className="h-fit bg-blue-100 flex flex-col md:grid   md:grid-cols-2 gap-10 px-10 py-20">
                <div className="chooseImage flex justify-start md:justify-start items-center md:items-end p-5 bg-yellow-500 relative h-70 w-full md:h-full rounded-2xl ">
                    <div className='h-30 w-40 md:w-50 md:h-40 bg-white  rounded-2xl flex flex-col justify-between  p-2 md:p-5'>
                        <p className='text-gray-500'>Student nationalities on campus</p>
                        <h1 className='text-4xl font-bold'>100+</h1>
                    </div>
                </div>

                <div className="choosePath p-5 bg-white rounded-2xl gap-2 h-fit md:h-full w-full md:h-full flex flex-col items-center ">
                    <h1 className='text-3xl font-bold'>Choose your path</h1>
                    <p className='text-center md:text-2xl text-gray-500'>Don't want to choose a specialization? No problem - you can choose electives from the following elective areas.</p>
                    <div className=' grid grid-cols-2 font-bold md:gap-2 md:my-7 md:text-2xl '>
                        <h1>Entrepreneurship</h1>
                        <h1>Digital Marketing</h1>
                        <h1>Graphics Design</h1>
                        <h1>Wed Development</h1>
                        <h1>Excel Accounting</h1>
                        <h1>Online Registration</h1>
                    </div>

                    <RequestInformation />
                </div>
            </div>


            {/* why GoodyMan is the smart Choice */}
            <div className='smartChoice px-5 py-12 grid grid-cols-1 md:grid-cols-2 gap-5 h-fit  '>
                <div className='h-fit '>
                    <h1 className='text-3xl font-bold text-green-800'>Why GoodyMan is the smart choice</h1>
                    <p className='py-5 text-gray-500'>Join a top-rated institution with a 5-Star QS rating and experience a world-class education.</p>
                    <div className="blocks grid-cols-1 ">
                        <div className='block1 mb-5 bg-gray-50 px-2 py-5 flex gap-5 rounded-lg items-center'>
                            <div className="iconBlock p-4 text-3xl  rounded-full bg-red-200 ">
                                <FaPeopleLine />
                            </div>
                            <div className="textBlock ">
                                <h1 className='font-bold text-xl '>Workplace Collaboration</h1>
                                <p className='text-gray-500 leading-5'>Collaborate effectively as a business leader and team member in cross-cultural and global contexts.</p>
                            </div>
                        </div>
                        <div className='block1 mb-5 bg-gray-50 px-2 py-5 flex gap-5 rounded-lg items-center'>
                            <div className="iconBlock p-4 text-3xl rounded-full bg-blue-200 ">
                                <IoSchoolOutline />
                            </div>
                            <div className="textBlock gap-2">
                                <h1 className='font-bold text-xl '>Calibre of instructors</h1>
                                <p className='text-gray-500 leading-5'>Learn from faculty with  academic qualifications and related professional experience too!</p>
                            </div>
                        </div>
                        <div className='block1 bg-gray-50 px-2 py-5 flex gap-5 rounded-lg items-center'>
                            <div className="iconBlock p-4 text-3xl rounded-full bg-green-200 ">
                                <FaUserGear />
                            </div>
                            <div className="textBlock gap-2">
                                <h1 className='font-bold text-xl '>Theory & Practice</h1>
                                <p className='text-gray-500 leading-5'>A combination of theory and practice provides graduates with employer readiness skills needed to think creatively when analyzing new problems.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='galleryChoice bg-red-50  h-fit  '>


                    <div className='starTop flex items-center p-8 gap-5'>
                        <div className="starLogo text-5xl ">
                            <FaUserGear />
                        </div>

                        <di className="starText">
                            <h1 className='font-bold text-xl'>5 Star Rated</h1>
                            <p className='leading-5 text-gray-600'>Goodyman is the 3rd university in Canada, and the
                                1st in Africa, to receive a
                                5 Star rating.
                            </p>
                        </di>
                    </div>

                    {/* scrolling images */}
                    <div className='starDown'>
                        <div className="starLogos w-full  h-[30vh] ">
                            <div className="starLogos-slide  w-fit h-full flex gap-5 items-center overflow-x-hidden">



                                <div className="picHolder1  shadow-md h-[90%] w-60 bg-red-500 rounded-xl">
                                    
                                </div>

                                <div className="picHolder2 shadow-md  h-[90%] w-60 bg-green-500 rounded-xl">

                                </div>

                                <div className="picHolder3  shadow-md h-[90%] w-60 bg-blue-500 rounded-xl">

                                </div>

                            </div>

                        </div>



                        {/* reverse animation section */}

                        <div className="starLogosReverse w-full  h-[30vh] ">
                            <div className="starLogosReverse-slide  w-fit h-full flex gap-5 items-center overflow-x-hidden">



                                <div className="picHolder4  shadow-md h-[90%] w-60 bg-red-500 rounded-xl">

                                </div>
                                <div className="picHolder5  shadow-md h-[90%] w-60 bg-green-500 rounded-xl">

                                </div>
                                <div className="picHolder6  shadow-md h-[90%] w-60 bg-blue-500 rounded-xl">

                                </div>

                            </div>

                        </div>



                    </div>

                </div>


            </div>

        </div>
    )
}

export default Home