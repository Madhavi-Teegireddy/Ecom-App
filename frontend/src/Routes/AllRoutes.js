import React from 'react'
import '../App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Policy from '../Pages/Policy';
import PageNotFound from '../Pages/PageNotFound';
import Register from '../Pages/Auth/Register';
import Login from '../Pages/Auth/Login';
import Dashboard from '../Pages/User/Dashboard';
import PrivateRoute from './PrivateRoute';
import ForgotPasssword from '../Pages/Auth/ForgotPassword';
import AdminRoute from './AdminRoute';
import AdminDashboard from '../Pages/Admin/AdminDashboard';
import Orders from '../Pages/User/Orders';
import Profile from '../Pages/User/Profile';


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
         
        <Route path="/dashboard" element={ <PrivateRoute/> }>
          <Route path="user" element={<Dashboard/>}/>
          <Route path="user/orders" element={<Orders/>}/>
          <Route path="user/profile" element={<Profile/>}/>
        </Route>              

        <Route path="/dashboard" element={ <AdminRoute/> }>
          <Route path="admin" element={<AdminDashboard/>}/>
        </Route> 

        <Route path="/forgot-password" element={<ForgotPasssword/>}/>

        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/policy" element={<Policy/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default AllRoutes