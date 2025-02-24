import { useState } from 'react'
import './App.css'
import About from './pages/About/about' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app-container'>
    <About />
    </div>
    </>
  )
}

export default App
