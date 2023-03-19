import React from 'react'
import "./style.css"

const Header = () => {
  return (
    <div className="header flex   items-center  sm:flex-row sm:p-4 p-1 flex-col  w-[100%] h-[500px] justify-center   " >

      <div className='flex sm:flex-col flex-col  items-start justify-center'>
        <h1 className='text-gradient font-semibold sm:text-6xl text-4xl m-4'>Stream your <span>Favourite movies</span>  Now</h1>
        <p className='text-center font-light text-lg m-4'> This is the best platform to stram your favourite Marvel movies</p>
      </div>
      <div className='header_img rounded-lg opacity-75'></div>

    </div>
  )
}

export default Header