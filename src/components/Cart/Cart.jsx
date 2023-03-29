import React from 'react';
import CartPlayer from '../CartPlayer/CartPlayer';

const Cart = ({cart}) => {
    // console.log(cart);
    let totalPrice = 0;
    let playerDetails = [];
    for(const player of cart){
        totalPrice = totalPrice + player.Price;
        playerDetails.push(player);
    }
    cart.map(p=> console.log(p));
    return (
        <div className=' sticky top-0 px-3'>
            <div className='relative'>
                <h1 className='text-center text-xl font-semibold mt-3 before:w-32 before:h-1 before:bg-red-500 before:absolute before:bottom-[-5px] before:left-1/4'>Player Draft</h1>
            </div>
            <p className='text-lg mt-4'>Selected Items: {cart.length}</p>
            <p className='text-lg mb-2'>Price: ${totalPrice}m</p>
            {
                playerDetails.map(player => <CartPlayer
                    player={player}
                ></CartPlayer>)
            }
        </div>
    );
};

export default Cart;