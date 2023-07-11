import './style.css'
import React from 'react'
import {RiArrowDropDownLine} from "react-icons/ri"

const Prove = () => {
  return (
    <div>
      <div className='dropdown'>
        <div className='dropbtn'>
          <span  >Home </span>
          <span><RiArrowDropDownLine /></span>
        </div>
        <div className='dropdown-content'>
          <a href='#' >hii</a>
          <a href='#'>hi</a>
          <a href='#'>hello </a>
          <a href='#'>byy</a>
        </div>

      </div>
     

    </div>
  )
}



export default Prove
