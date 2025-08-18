import React from 'react'
import { Link } from 'react-router-dom'
import WhiteLogo from '../assets/images/whitegoodymannewlogo.png'


const Footer = () => {
    return (
        <div className="footer h-[50vh] text-gray-100  bg-black flex flex-col text-[1.5rem] md:text-[1rem]  p-10 gap-10 items-center md:flex md:flex-row  md:justify-between md:px-20">
            {/* Logo */}
            <div>
                <img src={WhiteLogo} alt="" className='h-[3rem] w-auto'  />
                
            </div>

            {/* Links */}
            <div>
                Home
            </div>


            {/* Terms and policy */}
            <div>
<Link to='/termsandpolicy'>

<h1>Terms&Policy</h1>
</Link>
            </div>
        </div>
    )
}

export default Footer
