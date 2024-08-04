import React, { Profiler, useContext, useState } from 'react';
import { assets } from '../assets/assets';
import {Link, useNavigate} from 'react-router-dom';
import { StoreContext } from './StoreContext';

const NavBar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("menu"); //when we click menu page , it becomes active and underlined 

    const {getTotalCartAmount,token,setToken}= useContext(StoreContext);
    //addedd
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    return (
        <div className='navbar pt-6 flex justify-between items-center md:px-10'>
        <Link to='/'><img className='logo h-12 w-40 pl-5' src={assets.logokk2} alt="Logo" /></Link>
        <ul className='flex gap-5 text-zinc-500 text-xl font-outfit'>
            <Link to='/' 
            className={`${menu === "Home" ? "border-b-2 border-green-700" : ""} text-xl text-zinc-500 px-2 cursor-pointer hover:scale-105 duration-100`}
            onClick={() => setMenu("Home")}
            >
            Home
            </Link>
            <li
            className={`${menu === "Menu" ? "border-b-2 border-green-700" : ""} text-xl text-zinc-500 px-2 cursor-pointer hover:scale-105 duration-100`}
            onClick={() => setMenu("Menu")}
            >
            <a href='#explore-menu' smooth={true} duration={500}>Menu</a>
            </li>
            <li
            className={`${menu === "Mobile-App" ? "border-b-2 border-green-700" : ""} text-xl text-zinc-500 px-2 cursor-pointer hover:scale-105 duration-100`}
            onClick={() => setMenu("Mobile-App")}
            >
            <a href='#app-download' smooth={true} duration={500}>Mobile-App</a>
            </li>
            <li
            className={`${menu === "Contact Us" ? "border-b-2 border-green-700" : ""} text-xl text-zinc-500 px-2 cursor-pointer hover:scale-105 duration-100`}
            onClick={() => setMenu("Contact Us")}
            >
            <a href='#footer' smooth={true} duration={500}>Contact Us</a>
            </li>
        </ul>
        <div className='flex gap-10 items-center'>
            <img src={assets.search_icon} alt="Search Icon" />
            <div className="navbar-search-icon relative">
            <Link to='/cart'><img className='hover:scale-105 duration-100' src={assets.basket_icon} alt="Basket Icon" /></Link>
            <div className={`${getTotalCartAmount()===0?"":"dot absolute bg-green-600 rounded-md min-w-2 min-h-2 -top-2 -right-2"} `}></div>
            </div>
            {/* added */}
            {!token?<button className='text-xl text-green-800 px-3 py-1 cursor-pointer rounded-3xl hover:scale-105 duration-200 hover:bg-slate-200 bg-transparent border border-zinc-600 font-bold' onClick={()=>setShowLogin(true)}>
            Sign In
            </button>:<div className='navbar-profile relative group'>
            <img src={assets.profile_icon} alt="Profile Icon" />
            <ul className='nav-profile-dropdown absolute right-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white shadow-lg rounded-lg'>
                <li className='flex items-center p-2 hover:bg-gray-200 cursor-pointer'>
                <img src={assets.bag_icon} alt="Orders" className='w-5 h-5 mr-2' /><p>Orders</p>
                </li>
                <hr className='my-1' />
                <li onClick={logout} className='flex items-center p-2 hover:bg-gray-200 cursor-pointer'>
                <img src={assets.logout_icon} alt="Logout" className='w-5 h-5 mr-2' /><p>Logout</p>
                </li>
            </ul>
            </div>
}
            
        </div>
        </div>
    );
    }

export default NavBar;
