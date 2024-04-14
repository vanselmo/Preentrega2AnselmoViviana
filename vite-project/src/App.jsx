import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Main/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
