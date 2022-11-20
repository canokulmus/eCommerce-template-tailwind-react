import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import data from "../data.json"


const Latest = () => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        setProducts(data.products.filter(product => product.category === 'latest'))
    }, [])


    return (
        <>
            <h4 className='font-bold mt-12 pb-2 border-b border-gray-200 '>Latest Products</h4>
            <div className='mt-8 grid gap-10 sm:grid-cols-2 xl:grid-cols-3 '>

                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}

            </div>
        </>
    )
}

export default Latest