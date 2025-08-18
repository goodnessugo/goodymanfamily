import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import RequestInformation from './components/RequestInformation'
import Footer from './components/Footer'
import TermsAndPolicy from './components/TermsAndPolicy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/requestInformation' element={<RequestInformation />}/>
      <Route path='/footer' element={<Footer />}/>
      <Route path='/termsandpolicy' element={<TermsAndPolicy/>} />
    </Routes>
  )
}

export default App
