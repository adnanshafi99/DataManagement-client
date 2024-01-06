import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './Components/Pages/Register'
import Login from './Components/Pages/login'
import UserPortal from './Components/Pages/UserPortal'
import AdminPortal from './Components/Pages/AdminPortal'
import ModalForm from './Components/Pages/ModalForm'
import UpdatePageModal from './Components/Pages/UpdatePageModal'
import TestShape from './Components/Pages/TestShape'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='container mx-auto'>
    {/* <Login></Login> */}
    {/* <Register></Register> */}
    {/* <UserPortal></UserPortal> */}
    {/* <AdminPortal></AdminPortal> */}
    {/* <ModalForm></ModalForm> */}
    {/* <UpdatePageModal></UpdatePageModal> */}
    <TestShape></TestShape>
    
    </div>
    
  )
}

export default App
