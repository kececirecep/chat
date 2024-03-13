import React from 'react'
import './Menu.scss' 
import { TbMessage2 } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { GrHomeRounded } from "react-icons/gr";
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu-wrapper'>
      <ul>
        <NavLink to="/"><li> <span className="icon"><GrHomeRounded /></span></li></NavLink>
        <NavLink to="/messages"><li><span className="icon"><TbMessage2 /></span></li></NavLink>
        <NavLink to="/friends-list"><li><span className="icon"><LuUsers /></span></li></NavLink> 
        <NavLink to="/home"><li><span className="icon"><IoSettingsOutline /></span></li></NavLink>
      </ul>
      <div className="menu-logout">
        <CiLogout /> 
      </div>
    </div>
  )
}

export default Menu