import React from 'react'
import "../css/header.css"
import Group46 from "../assets/Group46.jpg";
import mopotrologo from "../assets/moptrologo.jpg";
const Header = () => {
  return (
    <div className='text-yellow-50'>
        <div className='call-img absolute '>
      <img src={Group46} alt="" className='rounded-full'/>
        </div>
        <div className='logo absolute '>
            <span className='inline-block bg-zinc-800 w-[20px] text-center h-[23px] rounded-full ml-[70px]  text-[#36A546]' >4</span>
            <img src={mopotrologo} alt="" className='rounded-full'/>
        </div>
      
      </div>
  )
}

export default Header