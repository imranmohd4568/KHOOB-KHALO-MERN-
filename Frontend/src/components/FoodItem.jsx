import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from './StoreContext'
import axios from 'axios';

    const FoodItem = ({id,name,price,description,image}) => {

        // const [itemCount,setItemCount]= useState(0)
        const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext)//context API

    return (
        <div className='food-item w-[100%] m-auto rounded-2xl shadow-md'>
            <div className='food-item-img-container relative'>
                <img className='food-item-image w-100% rounded-custom-tl-tr'  src={url+"/images/"+image}></img>
                {!cartItems[id]
                    ?<img className='add w-8 absolute bottom-3 right-3 cursor-pointer rounded-lg' onClick={()=>addToCart(id)}  src={assets.add_icon_white}></img>
                    :<div className='food-item-counter flex absolute bottom-3 right-3 items-center rounded-3xl bg-white gap-2'>
                        <img className='w-7 cursor-pointer' src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} ></img>
                        <p>{cartItems[id]}</p>
                        <img className='w-7 cursor-pointer' src={assets.add_icon_green}  onClick={()=>addToCart(id)}></img>
                        
                    </div>

                }

            </div>
            <div className='food-item-info p-5'>
                <div className="food-item-name-rating flex justify-between items-center mb-2">
                    <p className="food-item-name text-lg font-semibold">{name}</p>
                    <img className='w-16' src={assets.rating_starts}></img>
                </div>
                <p className='food-item-desc text-zinc-500 font-medium'>{description}</p>
                <p className='food-item-pric text-green-800 font-medium font-sans mx-1 my-0 text-xl'>${price}</p>
            </div>
        
        </div>
    )
    }

export default FoodItem
