import React from 'react';
import { assets } from '../assets/assets';

const AppDownload = () => {
    return (
        <div className='app-download m-auto mt-8 md:mt-16 text-center font-medium px-4' id='app-download'>
            <p className='text-xl md:text-3xl font-semibold'>
                For Better Experience Download <br />
                <span className='text-3xl md:text-5xl font-outfit font-bold text-green-700'>
                    Khoob Khalo App
                </span>
            </p>
            <div className="app-download-platforms flex gap-3 md:gap-5 justify-center mt-4">
                <img className='max-w-32 md:max-w-44 cursor-pointer hover:scale-105 duration-200' src={assets.play_store} alt="Play Store" />
                <img className='max-w-32 md:max-w-44 cursor-pointer hover:scale-105 duration-200' src={assets.app_store} alt="App Store" />
            </div>
        </div>
    );
}

export default AppDownload;
