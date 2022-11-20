import React from 'react'

const Account = () => {
    return (
        <div className='flex justify-center hidden md:block md:justify-end'>
            <a href="#" className='btn btn-custom1 text-primary transition ease-out duration-500'>
                Log in
            </a>
            <a href="#" className='btn btn-custom1 text-primary ml-2 transition ease-out duration-500'>
                Sign up
            </a>
        </div>
    )
}

export default Account