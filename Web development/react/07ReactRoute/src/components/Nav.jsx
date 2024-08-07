import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link ,NavLink} from 'react-router-dom'

function Nav(props) {
    let toggleMode = ()=>{
    }
    
  return (
    <>
        <nav x-data="{ isOpen : false }" className="relative bg-white shadow dark:bg-gray-800">
    <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
                <Link to="/">
                    <img className="w-auto h-11 sm:h-11" src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZ28lMjBmb3IlMjBiJTIwYnJhbmR8ZW58MHx8MHx8fDA%3D" alt="" />
                </Link>

                <div className="flex lg:hidden">
                    <button  type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                
                        <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
                <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                    <Link to="/" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">{}</Link>
                    <Link to="/" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Home</Link>
                    <Link to="/about" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">About Us</Link>
                    <Link to="/contact" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Contact Us</Link>
                    <Link to="/pricing" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Pricing</Link>
                    <Link to="/pricing" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Pricing</Link>
                    <Link to="/faq" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">FAQ...</Link>
                </div>

                <div className="flex items-center mt-4 lg:mt-0">
                <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked = {true}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium  text-gray-700 dark:text-gray-200">Toggle Theme &nbsp;&nbsp; </span>
        </label>

                    <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                        <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                        </div>

                        <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">Khatab wedaa</h3>
                    </button>
                </div>
            </div>
        </div>
    </div>
</nav>
    
    
    </>
  )
}

export default Nav