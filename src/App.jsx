import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './Components/Pages/Register'
import Login from './Components/Pages/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login></Login> */}
    <Register></Register>
        
    </>
  )
}

export default App
