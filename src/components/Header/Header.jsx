import React from 'react';
import Logo from '../../images/real-madrid.png';

const Header = () => {
    return (
        <nav className='flex flex-col md:flex-row justify-between px-12 py-4 bg-emerald-300 md:h-20'>
            <img className='w-8' src={Logo} alt="" />
            <div className='flex flex-col md:flex-row gap-6 my-auto'>
                <a 
                    className='text-lg text-white font-medium hover:text-red-500' 
                    href="/home">Home</a>
                <a 
                    className='text-lg text-white font-medium hover:text-red-500' 
                    href="/players">Players</a>
                <a 
                    className='text-lg text-white font-medium hover:text-red-500' 
                    href="/cart">Cart</a>
                <a 
                    className='text-lg text-white font-medium hover:text-red-500' 
                    href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;