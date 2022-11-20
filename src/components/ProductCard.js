import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {

    return (
        <>
            {
                product ?

                    <div className='card'>

                        <Link to={`/product/${product.id}`} >
                            <img src={product.image} className='w-full h-48 sm:h-64 object-cover' alt="stew" />
                            <div className='m-4'>
                                <div>
                                    <span className='font-bold'>{product.name}</span>
                                    <span className='font-bold float-right text-pink-900'>${product.price}</span>
                                </div>

                                <div className='flex justify-between items-center mt-2'>
                                    <span className='block text-gray-500 text-sm basis-2/3'>{product.description}</span>
                                    <button className='text-primary flex items-center font-bold hover:text-red-700 transition ease-out duration-300'>
                                        <svg className="w-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                        <span className='ml-1 text-sm'> Add To Cart</span>
                                    </button>
                                </div>
                            </div>

                            <div className="badge">
                                <span>-%{product.discount}</span>
                            </div>
                        </Link>


                    </div>

                    :
                    null

            }
        </>
    )
}

export default ProductCard