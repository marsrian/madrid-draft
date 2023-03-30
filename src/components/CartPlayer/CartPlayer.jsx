import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'

const CartPlayer = (props) => {
    const {img, name} = props.player;
    return (
        <div className='flex bg-orange-400 mt-4 rounded-lg justify-around align-middle p-3'>
            <div className='mt-0'>
                <h6 className=' '>{name}</h6>
            </div>
            <div className='mt-0'>
                <img className='w-8 h-8' src={img} alt="" />
            </div>
            <button>
                <FontAwesomeIcon className='ml-3 text-white' icon={faTrash} />
            </button>
        </div>
    );
};

export default CartPlayer;