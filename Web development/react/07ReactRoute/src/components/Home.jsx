import React from 'react'
import { useState } from 'react'

function Home() {

    let [theam , setTheam] = useState('dark')
    const changeTheam= (e)=>{
        setTheam(e)
    }









return (
    <>

<section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">explore our <br /> awesome <span className="underline decoration-blue-500">Components</span></h1>

        <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                <span className="inline-block text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">elegant Dark Mode</h1>

                <p className="text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>

            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                <span className="inline-block text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Easy to customiztions</h1>

                <p className="text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>

            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                <span className="inline-block text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Simple & clean designs</h1>

                <p className="text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>





<section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">recent posts </h1>

            <button className="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">category</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        What do you want to know about UI
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                John snow
                            </a>

                            <p className="text-sm text-gray-500 dark:text-gray-400">February 1, 2022</p>
                        </div>

                        <a href="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                    </div>

                </div>
            </div>

            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">category</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        All the features you want to know</h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                Arthur Melo
                            </a>

                            <p className="text-sm text-gray-500 dark:text-gray-400">February 6, 2022</p>
                        </div>

                        <a href="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                    </div>

                </div>
            </div>

            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt=""/>

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">category</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        Which services you get from Meraki UI
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                Tom Hank
                            </a>

                            <p className="text-sm text-gray-500 dark:text-gray-400">February 19, 2022</p>
                        </div>

                        <a href="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<section className="bg-white dark:bg-gray-900">
    <div className="max-w-6xl px-6 py-10 mx-auto">
        <p className="text-xl font-medium text-blue-500 ">Testimonials</p>

        <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            What clients saying
        </h1>

        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>
            
            <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="client photo" />
                
                <div className="mt-2 md:mx-6">
                    <div>
                        <p className="text-xl font-medium tracking-tight text-white">Ema Watson</p>
                        <p className="text-blue-200 ">Marketing Manager at Stech</p>
                    </div>

                    <p className="mt-4 text-lg leading-relaxed text-white md:text-xl"> “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda”.</p>
                    
                    <div className="flex items-center justify-between mt-6 md:justify-start">
                        <button title="left arrow" className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button title="right arrow" className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</section>


    </>
  )
}

export default Home