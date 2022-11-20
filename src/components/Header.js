import React from 'react'

const Header = ({ header }) => {
    return (
        <header className='mt-3'>

            {header &&
                <>
                    <h2 className='text-gray-700 text-6xl font-semibold'>{header.main && header.main}</h2>
                    <h3 className='text-2xl font-semibold'>{header.sub && header.sub}</h3>
                </>
            }
        </header>
    )
}

export default Header