import React, { useState } from 'react'
import "./style.css"
import img from "../assets/logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  
    return (
      <>
   
      <div className="navbar flex w-[100%]  sm:justify-around justify-between sm:items-center p-2">
        <div className='flex justify-start items-start w-[120px] bg-slate-400 rounded-sm'>
          <img src={img} alt="img" />
        </div>
        <ul className='nav-links sm:flex hidden justify-between items-center m-1 font-bold text-2xl text-gradient'>
          <li> <a href="#">Home   </a></li>
          <li> <a href="#About">About </a> </li>
          <li> <a href="#Movies">Movies</a>  </li>
          <li> <a href="#WebSeries">WebSeries</a>  </li>
        </ul>
        <div className='sm:hidden'>
          {
            toggle
              ? <CloseIcon color='#fff' size={27} onClick={() => { setToggle(false) }} />
              : <MenuIcon color='#fff' size={27} onClick={() => { setToggle(true) }} />
          }
          <ul className='Menu_bg sm:hidden px-6 rounded-xl sidebar absolute right-1 
           flex flex-col justify-between first-letter:items-start m-1 font-bold text-xl text-gradient
           '
            style={{
              transform: toggle ? 'translateY(0)' : 'translateY(-150%)',
              transition: 'transform 0.3s ease-in-out'
            }}
            >
          <li> <a href="#">Home   </a></li>
          <li> <a href="#About">About </a> </li>
          <li> <a href="#Movies">Movies</a>  </li>
          <li> <a href="#WebSeries">WebSeries</a>  </li>
          </ul>
        </div>
      </div>
      </>
    )
  }

export default Navbar