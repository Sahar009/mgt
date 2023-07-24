
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Sidebar from './component/sidebar/Sidebar';
import Layout from './component/layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import AddStudent from './pages/add-student/AddStudent';
import Enquiry from './pages/equiry/Enquiry';
import Class from './pages/class/Class';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import Register from './pages/Auth/Register';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Students from './pages/students/Students';
import StudentDetail from './component/Student/studentDetail/StudentDetail';
import EditStudent from './pages/editStudent/EditStudent';
import EditProfile from './pages/profile/EditProfile';
import Profile from './pages/profile/Profile';


axios.defaults.withCredentials = true

function App() {
 
  
  return (<>
<ToastContainer/>
   <BrowserRouter>
   
   <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path="/register" element={<Register/>} />


<Route path='/dashboard' element={<Sidebar>
  <Layout>
    <Dashboard/>
  </Layout>
</Sidebar>}/>
<Route path="/add-student"
          element={
            <Sidebar>
              <Layout>
                <AddStudent />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/classes"
          element={
            <Sidebar>
              <Layout>
                <Class/>
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/enquiry"
          element={
            <Sidebar>
              <Layout>
                <Enquiry/>
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/students"
          element={
            <Sidebar>
              <Layout>
                <Students/>
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/student-detail/:id"
          element={
            <Sidebar>
              <Layout>
                <StudentDetail />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/edit-student/:id"
          element={
            <Sidebar>
              <Layout>
                <EditStudent />
              </Layout>
            </Sidebar>
          }
        />
         <Route
          path="/profile"
          element={
            <Sidebar>
              <Layout>
                <Profile/>
              </Layout>
            </Sidebar>
          }
        />
         <Route
          path="/edit-profile"
          element={
            <Sidebar>
              <Layout>
              <EditProfile />
              </Layout>
            </Sidebar>
          }
        />

   </Routes>
   
   
   
   </BrowserRouter>
   </>
  );
}

export default App;
