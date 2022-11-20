import React from 'react'
import { Link } from 'react-router-dom'

const AccountForm = ({ type }) => {
    return (
        <>
            <div className="account-form-container">
                <div className="account-form ">
                    <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
                        {type === 'signup' ? 'Sign Up' : 'Login'}
                    </div>
                    <div className=''>
                        {type === 'signup' && (
                            <div>
                                <input type="text" className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500" placeholder="Name " />
                            </div>
                        )}
                        <div>
                            <input type="email" className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8" placeholder="Eamil Adress " />
                        </div>

                        {type === 'signup' && (
                            <div>
                                <input type="text" className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder="Country " />
                            </div>
                        )}
                        {type === 'signup' && (
                            <div>
                                <input type="phone" className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder="Phone " />
                            </div>
                        )}
                        <div>
                            <input type="password" className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder="Password " />
                        </div>

                        {type === 'signup' && (
                            <div className="flex">
                                <input type="checkbox" className="border-sky-400 " defaultValue />
                                <div className="px-3 text-gray-500">
                                    I accept terms &amp; conditions
                                </div>
                            </div>
                        )}


                        <div className="flex justify-center my-6">
                            <button className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold ">
                                {type === 'signup' ? 'Sign Up' : 'Login'}
                            </button>
                        </div>

                        <div className="flex justify-center ">

                            {type === 'signup' ? (
                                <>
                                    <p className="text-gray-500">Already have an acount? </p>
                                    <Link to="/login" className="text-sky-600 pl-2"> Log in</Link>
                                </>
                            ) : (
                                <>
                                    <p className="text-gray-500">Do not have an account? </p>
                                    <Link to="/signup" className="text-sky-600 pl-2"> Sign Up</Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountForm