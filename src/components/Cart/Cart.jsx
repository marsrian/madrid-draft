import React from 'react';
import CartPlayer from '../CartPlayer/CartPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart}) => {
    console.log(cart);
    let totalPrice = 0;
    let playerDetails = [];
    let quantity = 0;
    for(const player of cart){
        totalPrice = totalPrice + player.Price * player.quantity;
        quantity = quantity + player.quantity;
        playerDetails.push(player);
    }

    const tax = totalPrice * 7 /100;
    const grandTotal = totalPrice + tax;
    return (
        <div className=' sticky top-0 px-3'>
            <div className='relative'>
                <h1 className='text-center text-xl font-semibold mt-3 before:w-32 before:h-1 before:bg-red-500 before:absolute before:bottom-[-5px] before:left-1/4'>Player Draft</h1>
            </div>
            <p className='text-lg mt-4'>Selected Items: {cart.length}</p>
            <p className='text-lg mb-2'>Price: ${totalPrice}m</p>
            <p className='text-lg mb-2'>Tax: ${tax}</p>
            <h6 className='text-lg font-medium mb-3'>Grand Total: ${grandTotal}m</h6>
            {
                playerDetails.map((player, index) => <CartPlayer
                    player={player}
                    key={index}
                ></CartPlayer>)
            }

            <div className='bg-orange-300 mt-4 rounded-lg align-middle p-3 text-center'>
                <button className='font-semibold text-lg text-red-600'>
                    Clear Cart
                    <FontAwesomeIcon className='ml-3 only:' icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default Cart;