import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ Added Route here
import Home from './components/Home';
import About from './components/About';
import Services from './components/frontend/Services';
import "./assets/css/style.scss";
import Project from './components/frontend/Project';
import Blogs from './components/frontend/Blogs';
import Contact from './components/frontend/Contact';
import Login from './components/backend/login';
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/backend/Dashboard';
import RequireAuth from './components/common/RequireAuth';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> {/* ✅ Route now works */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Project/>} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/admin/login" element={<Login />} />

            <Route path="/admin/dashboard" element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
              } />


        </Routes>
      </BrowserRouter>
        <ToastContainer
        position="top-center"
         />
    </>
  )
}

export default App
