import React, { useContext } from 'react'
import { StoreContext } from '../components/StoreContext'

const PlaceOrder = () => {

    const {getTotalCartAmount}=useContext(StoreContext)


    return (
    <form className='place-order flex items-start justify-between mt-20 mx-20'>
        <div className="place-order-left w-[100%] max-w-[max(30%,500px)]">
            <p className="title text-3xl font-serif font-semibold mb-12">
                Delivery Information
            </p>
            <div className="multi-fields flex gap-2">
                <input type="text" className="text mb-4 w-[100%] p-2 border border-zinc-400 rounded outline-green-500" placeholder='First Name' required />
                <input type="text" className="text mb-4 w-[100%] p-2 border border-zinc-400 rounded outline-green-500"placeholder='Last Name' required />
            </div>
            <input type="email" className="text mb-4 w-[100%] p-2 border border-zinc-400 rounded outline-green-500" placeholder='Email Address' required />
            <input type="text" className="text mb-4 w-[100%] p-2 border border-zinc-400 rounded outline-green-500" placeholder='Street' required />
            <div className="multi-fields flex gap-2">
                <input type="text" className="text mb-4 w-[100%] p-2 border border-zinc-400 rounded outline-green-500" placeholder='City' required />
                <input type="text" className="text mb-4 w-[100%] p-2 border border-zinc-400 rounded outline-green-500" placeholder='State' required />
            </div>
            <div className="multi-fields flex gap-2">
                <input type="text" className="text mb-4 w-[100%] p-2 border border-zinc-400 rounded outline-green-500" placeholder='ZIP CODE' required />
                <input type="text" className="text mb-4 w-[100%] p-2 border border-zinc-400 rounded outline-green-500" placeholder='Country' required />
            </div>
            <input className="text mb-4 w-[100%] p-2 border border-zinc-400 rounded outline-green-500" type='text' placeholder='Phone' required></input>
        </div>
        <div className="place-order-right w-[100%] max-w-max(40%,500px) ml-32">
            <div className="cart-total flex-1 flex flex-col gap-5">
                    <h2 className='text-lg font-semibold font-outfit'>Cart Totals</h2>
                    <div>
                    <div className="cart-total-details flex justify-between text-gray-600">
                        <p>Subtotal</p>
                        <p className='font-sans'>${getTotalCartAmount()}</p>
                    </div>
                    <hr className='my-2 text-gray-600 bg-gray-900'/>
                    <div className="cart-total-details flex justify-between text-gray-600">
                        <p>Delivery Fee</p>
                        <p className='font-sans'>${getTotalCartAmount()===0?0:2}</p>
                    </div>
                    <hr className='my-2 text-gray-600 bg-gray-900'/>
                    <div className="cart-total-details flex justify-between text-gray-600">
                        <b>Total</b>
                        <b className='font-sans'>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                        
                    </div>
                    </div>
                    <button onClick={()=>navigate('/order')} className='border-none text-white bg-green-600 rounded-md w-[max(18vw,250px)] px-3 py-3 cursor-pointer text-base font-semibold mt-8 '>PROCEED TO PAY</button>
                </div>

        </div>
        
    </form>
    )
}

export default PlaceOrder
