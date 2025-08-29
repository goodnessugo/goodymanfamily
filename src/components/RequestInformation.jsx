import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const RequestInformation = () => {
    return (
        <div>
            <Link to='/courses' >
            <button className='flex justify-between items-center gap-4 bg-green-500 px-5 py-2 mt-6 cursor-pointer rounded-full shadow-lg'>
                
                    {/* <h1 className='text-white font-bold'>Request Information  </h1> */}
                    <h1 className='text-white font-bold'>Explore More </h1>

                
                <div className='bg-white p-3 rounded-full'><  MdKeyboardDoubleArrowRight className='text-lg' /></div>
            </button>
            </Link>
        </div>
    )
}

export default RequestInformation