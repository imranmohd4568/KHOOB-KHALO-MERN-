import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='footer text-white bg-zinc-500 flex flex-col items-center gap-5 px-5 py-6 pt-14 mt-10' id='footer'>
            <div className='footer-content w-100% grid grid-cols-3 gap-20'>
                <div className='footer-content-left flex flex-col items-start gap-5'>
                    <a href='#' className='cursor-pointer'>
                        <img src={assets.logokk2}></img>
                    </a>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eaque earum error tempora</p>
                    <div className='footer-social-icons flex gap-4'>
                        <img className='cursor-pointer' src={assets.facebook_icon}></img>
                        <img  className='cursor-pointer' src={assets.twitter_icon}></img>
                        <img className='cursor-pointer' src={assets.linkedin_icon}></img>
                    </div>
                </div>
                <div className='footer-content-center flex flex-col items-start gap-5'>
                    <h2 className='font-bold text-lg'>COMPANY</h2>
                    <ul>
                        <li className='mb-2 cursor-pointer'>Home</li>
                        <li className='mb-2 cursor-pointer'>About Us</li>
                        <li className='mb-2 cursor-pointer'>Delivery</li>
                        <li className='mb-2 cursor-pointer'>Privacy policy</li>
                    </ul>
                </div>
                <div className='footer-content-right flex flex-col items-start gap-5'>
                    <h2 className='font-bold text-lg'>GET IN TOUCH</h2>
                    <ul>
                        <li className='mb-2 cursor-pointer'>+1-256-746-1598</li>
                        <li className='mb-2 cursor-pointer'>khoobkhalo@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr className='w-[100%] h-[2px] mx-7 bg-zinc-400 border border-none'/>
            <p className='copyright-footer'>Copyright 2024 © <a className='' href='#'>KhoobKhalo.com</a>  -All Right Reserved. </p>
        </div>
    )
    }

export default Footer
