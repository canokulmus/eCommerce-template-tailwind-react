import React, { useState } from 'react';
import Popular from './components/Popular';
import Latest from './components/Latest';
import Account from './components/Account';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className='body-container text-gray-600 font-nunito grid md:grid-cols-4'>

            <Navbar
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
            />

            <main className='px-6 md:px-16 py-6 bg-gray-100 md:col-span-3'>
                <Account />
                <Header />

                <div>
                    <Latest />
                    <Popular />

                    <div className='flex justify-center mt-5'>
                        <div className='btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300 tracking-widest'>
                            Load more
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
