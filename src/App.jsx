import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import UserPortal from './Components/Pages/UserPortal';
import AdminPortal from './Components/Pages/AdminPortal';
import ModalForm from './Components/Pages/ModalForm';
import UpdatePageModal from './Components/Pages/UpdatePageModal';
import TestShape from './Components/Pages/TestShape';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className='container mx-auto'>
        <Routes>
          {/* Route for the login page (default route) */}
          <Route path="/" element={<Login />} />

          {/* Routes for other pages */}
          <Route path="/register" element={<Register />} />
          <Route path="/user-portal" element={<UserPortal />} />
          <Route path="/admin-portal" element={<AdminPortal />} />
          <Route path="/modal-form" element={<ModalForm />} />
          <Route path="/update-page-modal" element={<UpdatePageModal />} />
          <Route path="/test-shape" element={<TestShape />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
