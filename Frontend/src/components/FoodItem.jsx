import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { StoreContext } from './StoreContext';
import axios from 'axios';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

    return (
        <div className='food-item w-full m-auto rounded-2xl shadow-md'>
            <div className='food-item-img-container relative'>
                <img className='food-item-image w-full rounded-tl-xl rounded-tr-xl' src={url+"/images/"+image} alt={name} />
                {!cartItems[id]
                    ? <img className='add w-8 absolute bottom-3 right-3 cursor-pointer rounded-lg' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to cart" />
                    : <div className='food-item-counter flex absolute bottom-3 right-3 items-center rounded-full bg-white gap-2'>
                        <img className='w-7 cursor-pointer' src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="Remove from cart" />
                        <p className='text-xs md:text-base'>{cartItems[id]}</p>
                        <img className='w-7 cursor-pointer' src={assets.add_icon_green} onClick={() => addToCart(id)} alt="Add more" />
                    </div>
                }
            </div>
            <div className='food-item-info p-5'>
                <div className="food-item-name-rating flex justify-between items-center mb-2">
                    <p className="food-item-name text-sm md:text-lg font-semibold">{name}</p>
                    <img className='w-16 hidden md:block' src={assets.rating_starts} alt="Rating stars" />
                </div>
                <p className='food-item-desc text-xs md:text-base text-zinc-500 font-medium hidden md:block'>{description}</p>
                <p className='food-item-pric text-sm md:text-xl text-green-800 font-medium font-sans mx-1 my-0'>{`$${price}`}</p>
            </div>
        </div>
    );
}

export default FoodItem;
