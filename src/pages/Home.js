import React from 'react'
import Header from "../components/Header"
import Latest from "../components/Latest"
import Popular from "../components/Popular"

const Home = () => {
    return (
        <>
            <div className="relative overflow-hidden flex justify-center items-center h-screen">
                <div className=" pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24">
                    <div className="mx-auto  max-w-5xl lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8">

                            <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
                                <div className="lg:py-24">
                                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"><span className="block text-primary">Introducing </span><span className="block text-black">New Products</span></h1>
                                    <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">We import the most suitable products for you. Let's create a demand for the product you want now.</p>

                                    <div className="mt-10 sm:mt-12">
                                        {/* This is a working waitlist form. Create your access key from https://web3forms.com/s to setup.  */}
                                        <form className="sm:mx-auto sm:max-w-xl lg:mx-0" action="">
                                            <div className="sm:flex">
                                                <div className="min-w-0 flex-1"><label htmlFor="email" className="sr-only">Email address</label><input id="email" type="email" placeholder="Enter your email" className="block w-full rounded-md border-0 bg-white px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400" autoComplete="off" /></div>
                                                <div className="mt-3 sm:mt-0 sm:ml-3"><button type="button" className="block w-full rounded-md bg-primary py-3 px-4 font-medium text-white shadow hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900">Get Feedback</button></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-20 flex justify-center">
                                <img className=" h-96" src="/img/phones.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home