import React from 'react';

const CartPlayer = (props) => {
    const {img, id, name} = props.player
    return (
        <div className='flex bg-orange-400 mt-4 rounded-lg justify-around align-middle p-3'>
            <div className='mt-0'>
                <h6>{name}</h6>
            </div>
            <div className='mt-0'>
                <img className='w-8 h-8' src={img} alt="" />
            </div>
        </div>
    );
};

export default CartPlayer;