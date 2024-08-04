    import React from 'react';

    const Header = () => {
    return (
        <div className='header h-[34vw] my-8 mx-auto bg-no-repeat bg-cover relative rounded-2xl ' style={{ backgroundImage: "url('/header1.png')" }}>
        {/* Overlay to dim the background */}
        <div className="absolute inset-0 bg-green-800 bg-opacity-50 rounded-2xl"></div>
        
        <div className="header-content absolute flex flex-col items-start  gap-[1.5vw] max-w-[50%] bottom-[10%] left-[42vw] z-10">
            <h2 className="text-6xl font-bold text-white animate-fadeIn">Order your favourite food here</h2>
            <p className="text-lg text-white font-outfit animate-fadeIn">
            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our Mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
            </p>
            <button className="px-4 py-2 bg-zinc-400 text-white rounded-md hover:bg-zinc-500 font-semibold">View Menu</button>
        </div>
        </div>
    );
    };

    export default Header;
