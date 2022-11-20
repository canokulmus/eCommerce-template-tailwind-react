import React from 'react'
import Account from "../components/Account"
import Header from "../components/Header"
import Latest from "../components/Latest"
import Popular from "../components/Popular"

const Home = () => {
    return (

        <>
            <Account />
            <Header header={{ main: "Products", sub: "For Tech Geeks" }} />
            <Latest />
            <Popular />
            <div className='flex justify-center mt-5'>
                <div className='btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300 tracking-widest'>
                    Load more
                </div>
            </div>
        </>

    )
}

export default Home