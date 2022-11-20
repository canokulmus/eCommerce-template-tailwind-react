import React from 'react'
import { menuAtom } from '../atom/menu'
import { useAtom } from 'jotai'


const Navbar = ({ isMenuOpen, toggleMenu }) => {

    const [menu, setMenu] = useAtom(menuAtom)

    return (
        <div className='md:col-span-1 md:flex md:justify-end'>
            <nav className='text-right'>
                <div className="flex justify-between items-center">
                    <h1 className='font-bold uppercase p-4 border-b border-gray-100'>
                        <a href="/" className='hover:text-gray-800'>CO-Tech</a>
                    </h1>
                    <div className="px-4 cursor-pointer md:hidden" onClick={toggleMenu}>
                        <svg className="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </div>
                </div>

                <ul className={`text-sm mt-6 ${!isMenuOpen && "hidden"} md:block`}>
                    {menu.map(item => (
                        <li className='py-1'>
                            <a href={`${item.link}`} className={`px-4 flex justify-end border-r-4 ${item.active ? "border-primary" : "border-white"}`}>
                                <span>{item.text}</span>
                                {item.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar