import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import sell from '../../assets/sell.png'
import { IoMdSearch } from "react-icons/io";

function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} className='olx-navbar-logo' alt="" />
        <IoMdSearch className='search-icon'/>
        <select className='country-dropdown'>
            <option value="">India</option>
        </select>
        <input type="text" placeholder='Find Cars, Mobile Phones and more...' className='search-box' />
        <img src={search} className='search-img' />
        <select className='language-dropdown'>
            <option value="" className='language'>ENGLISH</option>
        </select>
        <p className='login'>Login</p>
        <img src={sell} className='sell' />
    </div>
  )
}

export default Navbar
