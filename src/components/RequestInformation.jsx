import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const RequestInformation = () => {
    return (
        <div>
            <Link to='https://forms.gle/urio51CtCJUWAxXo8' >
            <button className='flex justify-between items-center gap-4 bg-green-500 px-3 py-2 mt-6 cursor-pointer rounded-full shadow-lg'>
                
                    <h1 className='text-white font-bold'>Request Information  </h1>

                
                <div className='bg-white p-3 rounded-full'><  MdKeyboardDoubleArrowRight className='text-lg' /></div>
            </button>
            </Link>
        </div>
    )
}

export default RequestInformation