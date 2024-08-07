import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Layout from './Layout';
import {Contact, Home , Pricing , About ,Faq, NotFound, User} from './components';
import {Route , RouterProvider , createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home/>}/>,
      <Route path='pricing' element={<Pricing/>}/>,
      <Route path='contact' element={<Contact/>}/>,
      <Route path='about' element={<About/>}/>,
      <Route path='faq' element={<Faq/>}/>,
      <Route path='user/:user' element={<User/>}/>

      <Route path='*' element={<NotFound/>}/>,
    </Route>,
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
