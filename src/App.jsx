import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import RequestInformation from './components/RequestInformation'
import Footer from './components/Footer'
import TermsAndPolicy from './components/TermsAndPolicy'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/requestInformation' element={<RequestInformation />}/>
      <Route path='/footer' element={<Footer />}/>
      <Route path='/termsandpolicy' element={<TermsAndPolicy/>} />
      <Route path='/aboutus' element={<AboutUs/>} />
      <Route path='/contactus' element={<ContactUs/>} />
    </Routes>
  )
}

export default App
