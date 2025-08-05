import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import RequestInformation from './components/RequestInformation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/requestInformation' element={<RequestInformation />}/>
    </Routes>
  )
}

export default App
