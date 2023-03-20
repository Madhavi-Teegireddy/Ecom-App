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
import CreateCategory from '../Pages/Admin/CreateCategory';
import CreateProduct from '../Pages/Admin/CreateProduct';
import Products from '../Pages/Admin/Products';
import UpdateProduct from '../Pages/Admin/UpdateProduct';
import Search from '../Pages/Search';
import ProductDetails from '../Pages/ProductDetails';
import Categories from '../Pages/Categories';
import CategoryProduct from '../Pages/CategoryProduct';
import CartPage from '../Pages/CartPage';
import AdminOrders from '../Pages/Admin/AdminOrders';


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/product/:slug" element={<ProductDetails/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/category/:slug" element={<CategoryProduct/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
         
        <Route path="/dashboard" element={ <PrivateRoute/> }>
          <Route path="user" element={<Dashboard/>}/>
          <Route path="user/orders" element={<Orders/>}/>
          <Route path="user/profile" element={<Profile/>}/>
        </Route>              

        <Route path="/dashboard" element={ <AdminRoute/> }>
          <Route path="admin" element={<AdminDashboard/>}/>
          <Route path="admin/create-category" element={<CreateCategory/>}/>
          <Route path="admin/create-product" element={<CreateProduct/>}/>
          <Route path="admin/product/:slug" element={<UpdateProduct/>}/>
          <Route path="admin/products" element={<Products/>}/>
          <Route path="admin/orders" element={<AdminOrders/>}/>
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