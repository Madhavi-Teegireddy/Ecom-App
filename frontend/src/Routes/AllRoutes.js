import React from 'react'
import '../App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Policy from '../Pages/Policy';
import PageNotFound from '../Pages/PageNotFound';


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/policy" element={<Policy/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default AllRoutes