import { useState } from 'react'
import './App.css'
import Status from "./pages/Status/Status";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app-container'>
<Status/>
    </div>
    </>
  )
}

export default App
