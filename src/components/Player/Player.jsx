import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Player = (props) => {
    const {id, name, Price, img} = props.player;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='border border-[#95A0A7] rounded-lg relative'
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
        >
            <div className='p-2'>
                <img className='w-full h-64 rounded-lg mb-3' src={img} alt="" />
                <p className='text-xl font-medium mb-3'>{name}</p>
                <p className='text-xl mb-12'>Price: ${Price}m</p>
            </div>
            <button 
                onClick={() => handleAddToCart(props.player)} 
                className='font-semibold w-full py-2 bg-orange-300 hover:bg-orange-500 absolute bottom-0 rounded-b-lg'>
                Add To Cart
                <FontAwesomeIcon className='ml-3' icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Player;