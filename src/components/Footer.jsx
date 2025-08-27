import React from 'react'
import { Link } from 'react-router-dom'
import WhiteLogo from '../assets/images/whitegoodymannewlogo.png'


const Footer = () => {
    return (
        <div className="footer h-[100vh] md:w-screen md:h-fit text-gray-100  bg-gray-950 grid grid-cols-1   p-10   md:grid md:grid-cols-3  m">
            {/* Logo */}
            <div className='flex flex-col gap-5'>
                <img src={WhiteLogo} alt="" className='md:h-[4rem] md:w-80'  />
                <div>
                    <h1 className='font-bold  text-orange-300 text-[1.2rem]'>Our Mission</h1>
                    <p>To empower students, support educators, and transform institutions by delivering innovative digital learning solutions that prepare individuals for the future of work and life.</p>
                </div>

                <div>
                    <h1 className='font-bold  text-orange-300 text-[1.2rem]'>Our Vision</h1>
                    <p>To create a world where every learner—regardless of background, location, or circumstance—has access to quality education, cutting-edge tools, and endless opportunities.</p>
                </div>

            </div>

            {/* Links */}
            <div className='md:flex flex-col items-center'>
                <h1 className='font-bold'>Site Pages</h1>
                <ul className='text-orange-300'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>

            </div>


            {/* Terms and policy */}
            <div className='md:flex flex-col items-center'>
                <Link to='/termsandpolicy'>

                    <h1>Terms&Policy</h1>
                    <h1>C. Goodyman</h1> 
                </Link>
            </div>
        </div>
    )
}

export default Footer
