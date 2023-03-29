import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';

const Main = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPlayers(data));
    }, []);

    const handleAddToCart = (player) =>{
        const newCart = [...cart, player];
        setCart(newCart);
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-5 p-12 gap-6'>
            <div className='col-span-4 grid grid-cols-1 md:grid-cols-3 gap-12'>
                {
                    players.map(player => <Player
                        key={player.id}
                        player={player}
                        handleAddToCart={handleAddToCart}
                    ></Player>)
                }
            </div>
            <div className='col-span-1 bg-slate-400'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;