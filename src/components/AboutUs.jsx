import React from 'react'
import Footer from './Footer'

const AboutUs = () => {
  return (
    <div>
      {/* about hero section */}
      <div className='bg-gray-500 bg-[url(./assets/images/background2.jpg)] bg-no-repeat bg-center bg-cover h-[50vh] md:h-[90vh] w-screen flex justify-center items-center bg-blend-multiply'>
        <h1 className=' text-[4rem] md:text-[9rem] text-white font-bold'>About Us</h1>
      </div>

      {/* Write up for About us */}
      <div className='p-5 md:p-10'>
        <div className=''>
          <h1 className=' text-center text-[1.5rem] md:text-[3rem] font-bold text-green-700'>Empowering Minds. Shaping Futures. Transforming Education.</h1>
          <div className='text-[1.2rem] md:text-[1.5rem] text-justify p-7 md:p-12'>
            <h1 className='pb-3'>
              At Goodyman, we believe education isn’t just about learning—it’s about unlocking human potential. In a world driven by innovation, access to knowledge should never be a privilege; it should be a right. That’s why we exist: to redefine how students learn, educators teach, and knowledge flows.
            </h1>

            <h1 className='pb-3'>
              Founded with a vision to bridge the gap between traditional education and the digital era, Goodyman is on a mission to make learning <b>smarter, simpler, and more accessible</b> for everyone—everywhere.
            </h1>
            <h1 className='pb-3'>
              From personalized learning platforms powered by <b>Interactive classrooms and career-focused training programs, </b> we’re building an ecosystem where education meets technology, seamlessly.
            </h1>

            <h1 className='font-bold text-green-700'> Our Vision</h1>
            <p className='pb-3'>To create a world where every learner—regardless of background, location, or circumstance—has access to quality education, cutting-edge tools, and endless opportunities.

            </p>


            <div>
              <h1 className='font-bold text-green-700'>   Our Mission       </h1>
              <p className='pb-3'>
                To empower students, support educators, and transform institutions by delivering innovative digital learning solutions that prepare individuals for the future of work and life.

              </p>

            </div>




            <div>
              <h1 className='font-bold text-green-700'>What We Do   </h1>
              <ul className='list-disc pb-3'>
                <li><b>Smart Learning Platforms →</b> AI-powered systems that personalize education for every learner.</li>
                <li><b>Skill Development Programs →</b> Hands-on training that prepares learners for real-world challenges.</li>
                <li><b>Virtual Classrooms → </b>Breaking barriers and bringing education to your fingertips.</li>
                <li><b>Collaborative Tools →</b> Connecting students, teachers, and institutions like never before.</li>
              </ul>
            </div>





            <div>
              <b className='font-bold text-green-700'>Why Choose Us</b>
              <ul className='list-disc'>
                <li>Because we don’t just teach—we transform lives.
                </li>
                <li>Because we don’t just innovate—we inspire futures.
                </li>
                <li>Because education is not just what we do; it’s who we are. </li>
              </ul>
              <p>With every platform we build, every student we reach, and every educator we empower, we’re not just shaping better learners; we’re shaping a better world.

              </p>

            </div>


            <div >
              <b className='font-bold text-green-700'>Join the Movement</b>
              <p>At Goodyman we’re not waiting for the future of education—we’re creating it. Whether you’re a student, teacher, institution, or visionary partner, let’s reimagine learning together.

              </p>

              <h1 className='italic font-bold'>Goodyman — Learn. Grow. Lead.</h1>
            </div>
          </div>


        </div>
      </div>




<Footer/>

    </div>
  )
}

export default AboutUs
