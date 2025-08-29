import React from 'react'
import Footer from './Footer'

const Courses = () => {
    return (
        <div className='h-fit w-screen  flex flex-col items-center '>
            <div className='text-[2rem] md:text-[4rem] bg-green-500 w-full flex justify-center items-center  font-bold pt-10'>
                <h1 className='text-white'>Courses We Offer</h1>
            </div>

            <div className='   items-center grid grid-cols-1  md:grid-cols-3 gap-15 px-10 py-20'>
                <div className='  shadow-xl/30 bg-[url(./assets/images/coding.jfif)] bg-cover bg-no-repeat bg-red-500 hover:scale-105 cursor-pointer ease-in-out duration-300 h-70 w-90 pb-5 flex flex-col justify-end items-center rounded-lg'>
                    <h1 className='shadow-lg px-3 py-2 font-bold text-white bg-gray-500/75  w-fit rounded-full cursor-pointer'>Web Development</h1>
                </div>
                <div className='  shadow-xl/30 bg-[url(./assets/images/GraphicDesign.jfif)] bg-cover bg-no-repeat bg-red-500 hover:scale-105 cursor-pointer ease-in-out duration-300 h-70 w-90 pb-5 flex flex-col justify-end items-center rounded-lg'>
                    <h1 className='shadow-lg px-3 py-2 font-bold text-white bg-gray-500/75  w-fit rounded-full cursor-pointer'>Graphics Design</h1>
                </div>
                <div className='  shadow-xl/30 bg-[url(./assets/images/uiuxdesign.jfif)] bg-cover bg-no-repeat bg-red-500 hover:scale-105 cursor-pointer ease-in-out duration-300 h-70 w-90 pb-5 flex flex-col justify-end items-center rounded-lg'>
                    <h1 className='shadow-lg px-3 py-2 font-bold text-white bg-gray-500/75  w-fit rounded-full cursor-pointer'>UI UX design</h1>
                </div>
                <div className='  shadow-xl/30 bg-[url(./assets/images/DataAnalysis.jfif)] bg-cover bg-no-repeat bg-red-500 hover:scale-105 cursor-pointer ease-in-out duration-300 h-70 w-90 pb-5 flex flex-col justify-end items-center rounded-lg'>
                    <h1 className='shadow-lg px-3 py-2 font-bold text-white bg-gray-500/75  w-fit rounded-full cursor-pointer'>Data Analysis</h1>
                </div>
                <div className='  shadow-xl/30 bg-[url(./assets/images/artificialgpt.jfif)] bg-cover bg-no-repeat bg-red-500 hover:scale-105 cursor-pointer ease-in-out duration-300 h-70 w-90 pb-5 flex flex-col justify-end items-center rounded-lg'>
                    <h1 className='shadow-lg px-3 py-2 font-bold text-white bg-gray-500/75  w-fit rounded-full cursor-pointer'>Artificial Intelligence</h1>
                </div>
                <div className='  shadow-xl/30 bg-[url(./assets/images/socialmedia.jfif)] bg-cover bg-no-repeat bg-red-500 hover:scale-105 cursor-pointer ease-in-out duration-300 h-70 w-90 pb-5 flex flex-col justify-end items-center rounded-lg'>
                    <h1 className='shadow-lg px-3 py-2 font-bold text-white bg-gray-500/75  w-fit rounded-full cursor-pointer'>Socialmedia Marketing</h1>
                </div>
                <div className='  shadow-xl/30 bg-[url(./assets/images/ComputerRepair.jfif)] bg-cover bg-no-repeat bg-red-500 hover:scale-105 cursor-pointer ease-in-out duration-300 h-70 w-90 pb-5 flex flex-col justify-end items-center rounded-lg'>
                    <h1 className='shadow-lg px-3 py-2 font-bold text-white bg-gray-500/75  w-fit rounded-full cursor-pointer'>Computer Engineering</h1>
                </div>
                <div className='  shadow-xl/30 bg-[url(./assets/images/office.jfif)] bg-cover bg-no-repeat bg-red-500 hover:scale-105 cursor-pointer ease-in-out duration-300 h-70 w-90 pb-5 flex flex-col justify-end items-center rounded-lg'>
                    <h1 className='shadow-lg px-3 py-2 font-bold text-white bg-gray-500/75  w-fit rounded-full cursor-pointer'>Desktop Publishing</h1>
                </div>
                <div className='  shadow-xl/30 bg-[url(./assets/images/videoediting.jfif)] bg-cover bg-no-repeat bg-red-500 hover:scale-105 cursor-pointer ease-in-out duration-300 h-70 w-90 pb-5 flex flex-col justify-end items-center rounded-lg'>
                    <h1 className='shadow-lg px-3 py-2 font-bold text-white bg-gray-500/75  w-fit rounded-full cursor-pointer'>Pro Video Editing</h1>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Courses
