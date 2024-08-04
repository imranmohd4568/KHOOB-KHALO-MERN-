import React from 'react'
import { menu_list } from '../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
    return (
        <div className='explore-menu flex flex-col gap-5 px-10' id='explore-menu'>
            <h1 className='font-sans font-bold text-green-700 text-3xl'>Explore our Menu</h1>
            <p className='text-lg font-outfit text-zinc-500'>Choose from a diverse menu featuring a delectable array of dishes. </p>
            <div className="explore-menu-list flex  gap-5 text-center mx-5 items-center overflow-scroll  ">
                {menu_list.map((item,index) =>{
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item '>
                            <img className={`w-[7.5vw] min-w-20 cursor-pointer rounded-lg ${category===item.menu_name?"border-4 border-green-500 rounded-b-full rounded-t-full mt-2":""}`} src={item.menu_image}></img>
                            <p className='text-center font-semibold text-zinc-500 text-base mt-3'>{item.menu_name}</p>
                        </div>
                    )
            })}
            </div>
            <hr className=' mx-2 h-[2px] bg-zinc-400 border border-none'/>
        </div>
    )
    }

export default ExploreMenu
