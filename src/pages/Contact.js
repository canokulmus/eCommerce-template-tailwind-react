import React, { useEffect } from 'react'
import Header from '../components/Header'

const Contact = () => {

    return (
        <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto">
                <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                    <div className="text-center">
                        <h1 className="sm:text-3xl text-2xl font-semibold text-center text-sky-600 my-3">Contact Us</h1>
                    </div>
                    <div className="m-7">
                        <form action="" method="POST" id="form">
                            <input type="hidden" name="apikey" defaultValue="YOUR_ACCESS_KEY_HERE" />
                            <input type="hidden" name="subject" defaultValue="New Submission from Web3Forms" />
                            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                                <input type="text" name="name" id="name" placeholder="John Doe" required className="contact-input" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="you@company.com" required className="contact-input" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="phone" className="text-sm text-gray-600 dark:text-gray-400">Phone Number</label>
                                <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567" required className="contact-input" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>
                                <textarea rows={5} name="message" id="message" placeholder="Your Message" className="contact-input" required defaultValue={""} />
                            </div>
                            <div className="flex justify-center my-6">
                                <button className=" rounded-full  p-3 w-full sm:w-56 bg-gradient-to-r from-slate-600 to-teal-300 text-white text-lg font-semibold ">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact