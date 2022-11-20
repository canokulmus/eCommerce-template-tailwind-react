import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { menuAtom } from './atom/menu';
import { useAtom } from 'jotai';
import { activateMenu } from './atom/menu';

//import react router dom
import { Switch, Route, useLocation } from 'react-router-dom';

function App() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menu, setMenu] = useAtom(menuAtom);
    const location = useLocation();

    useEffect(() => {
        activateMenu(location.pathname, menu, setMenu);
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className='body-container text-gray-600 font-sans grid md:grid-cols-4'>
            <Navbar
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
            />
            <main className=' bg-gray-100 md:col-span-3 min-h-screen'>
                <Switch>
                    <Route exact path='/'
                        render={(props) => {
                            return <Home {...props} />
                        }}
                    />


                    <Route path='/about'
                        render={(props) => {
                            return <About {...props} />
                        }}
                    />
                    <Route path='/contact'
                        render={(props) => {
                            return <Contact {...props} />
                        }}
                    />
                    <Route path='/login'
                        render={(props) => {
                            return <Login {...props} />
                        }}
                    />

                    <Route path='/signup'
                        render={(props) => {
                            return <Signup {...props} />
                        }}
                    />
                    <Route path='/product/:id'
                        render={(props) => {
                            return <Product {...props} />
                        }}
                    />
                </Switch>
            </main>
        </div>
    );
}

export default App;
