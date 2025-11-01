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
import Contact from './components/frontend/Contact';
import Login from './components/backend/Login';
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/backend/Dashboard';
import RequireAuth from './components/common/RequireAuth';

import {default as ShowServices} from './components/backend/services/Show';
import {default as CreateServices} from './components/backend/services/Create';
import {default as EditServices}  from './components/backend/services/Edit';

import {default as ShowProjects} from './components/backend/projects/Show';
import {default as CreateProjects} from './components/backend/projects/Create';
import {default as EditProjects}  from './components/backend/projects/Edit';


import {default as ShowTestimonials} from './components/backend/testimonials/Show';
import {default as CreateTestimonial} from './components/backend/testimonials/Create';
import {default as EditTestimonial}  from './components/backend/testimonials/Edit';

import {default as ShowMembers}  from './components/backend/members/Show';
import {default as CreateMember}  from './components/backend/members/Create';
import {default as EditMember}  from './components/backend/members/Edit';
import ServiceDetail from './components/frontend/ServiceDetail';
import ProjectDetail from './components/frontend/ProjectDetail';


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
          <Route path="/contact" element={<Contact />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          
           <Route path="/admin/login" element={<Login />} />

            <Route path="/admin/dashboard" element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
              } />

                <Route path="/admin/services" element={
              <RequireAuth>
                <ShowServices />
              </RequireAuth>
              } />

               <Route path="/admin/services/create" element={
              <RequireAuth>
                <CreateServices />
              </RequireAuth>
              } />

               <Route path="/admin/services/edit/:id" element={
              <RequireAuth>
                <EditServices />
              </RequireAuth>
              } />

               <Route path="/admin/projects" element={
              <RequireAuth>
                <ShowProjects />
              </RequireAuth>
              } />

               <Route path="/admin/projects/create" element={
              <RequireAuth>
                <CreateProjects />
              </RequireAuth>
              } />

                <Route path="/admin/projects/edit/:id" element={
              <RequireAuth>
                <EditProjects />
              </RequireAuth>
              } />

                   <Route path="/admin/testimonials" element={
              <RequireAuth>
                <ShowTestimonials />
              </RequireAuth>
              } />

               <Route path="/admin/testimonials/create" element={
              <RequireAuth>
                <CreateTestimonial />
              </RequireAuth>
              } />

                <Route path="/admin/testimonials/edit/:id" element={
              <RequireAuth>
                <EditTestimonial />
              </RequireAuth>
              } />

              <Route path="/admin/members" element={
              <RequireAuth>
                <ShowMembers />
              </RequireAuth>
              } />
               <Route path="/admin/members/create" element={
              <RequireAuth>
                <CreateMember />
              </RequireAuth>
              } />

               <Route path="/admin/members/edit/:id" element={
              <RequireAuth>
                <EditMember />
              </RequireAuth>
              } />

              <Route path="/admin/" element={
              <RequireAuth>
                <EditMember />
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
