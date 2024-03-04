import React from 'react'
import { GiDogHouse } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import "../css/footer.css";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer absolute rounded-full flex justify-evenly  items-center gap-20 bg-[#38383880] border-[1px] border-[#38383880] '>
      <div className=''>
        <Link to={"/dashboard"}>
      <GiDogHouse />
        
        </Link>
      </div>
<Link to={"/users"}>
      <FaUser />

</Link>
    </div>
  )
}

export default Footer