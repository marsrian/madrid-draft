import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart} from '../../utilities/fakedb';
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

    useEffect(() =>{
        const getStoredDataFromLS = getShoppingCart();
        let savedCart = [];
        for(const id in getStoredDataFromLS){
            const addedPlayer = players.find(player => player.id === id);
            if(addedPlayer){
                const quantity = getStoredDataFromLS[id];
                addedPlayer.quantity = quantity;
                savedCart.push(addedPlayer);
            }
        };
        setCart(savedCart);
    }, [players]);

    

    const handleAddToCart = (player) =>{
        let newCart = [...cart, player];

        const exists = cart.find(pl =>pl.id === player.id)
        if(!exists){
            player.quantity = 1;
            newCart = [...cart, player];
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pl => pl.id !== player.id)
            newCart = [...cart, exists];
        }

        setCart(newCart);
        addToDb(player.id);
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