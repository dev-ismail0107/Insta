import React from 'react'
import './left.css'
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdOutlineTravelExplore } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { IoIosNotifications } from "react-icons/io";
import { IoIosCreate } from "react-icons/io";
import { GiEgyptianProfile } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Left = () => {
  return (
    <div className='--leftside'>
       <div className='--instagram'>
        <h1>Instagram</h1>
      </div> 

      <div className='--all-left-first'>
        <h3><CiHome size ={24}/></h3>
        <Link to='/'><h4>Home</h4></Link>
      </div>

      <div className='--all-left-first'>
        <h3><CiSearch size ={24}/></h3>
        <h4>Search</h4>
      </div>

      <div className='--all-left-first'>
        <h3><MdOutlineTravelExplore size ={24}/></h3>
        <h4>Explore</h4>
      </div>

      <div className='--all-left-first'>
        <h3><BsCameraReels size ={24}/></h3>
        <h4>Reels</h4>
      </div>
      <div className='--all-left-first'>
        <h3><TiMessages size ={24}/></h3>
        <h4>Messages</h4>
      </div>
      <div className='--all-left-first'>
        <h3><IoIosNotifications size ={24}/></h3>
        <h4>Notification</h4>
      </div>
      <div className='--all-left-first'>
        <h3><IoIosCreate size ={24}/></h3>
        <h4>Create</h4>
      </div>
      <div className='--all-left-first'>
        <h3><GiEgyptianProfile size ={24}/></h3>
        <Link to='/bio'><h4>Profile</h4></Link>
      </div>

    </div>
  )
}

export default Left