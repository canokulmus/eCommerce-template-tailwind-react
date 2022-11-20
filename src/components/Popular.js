import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import data from "../data.json"

const Popular = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(data.products.filter(product => product.category === 'popular'))
    }, [])

    return (
        <>
            <h4 className='font-bold  mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>
            <div className='mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3 '>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}

export default Popular