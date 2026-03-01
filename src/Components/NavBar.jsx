import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'


function NavBar() {
  return (
   //Normal Links
  //  <div className='flex space-x-8 items-center pl-4 pr-4 py-2'>
  //   <Link to={'/'}> <img className='w-[clamp(20px,50vw,50px)]' src={logo} alt="Logo" /> </Link>
     
  //    <div className='text-blue-500 text-3xl font-bold space-x-8'>
  //     <Link  to={'/'}>Movies</Link>
  //     <Link  to={'watchlist'}>Watchlist</Link>
  //   </div>

  //  </div>

  //Here we will use NavLink to add active class to the current link
  <div className='flex space-x-8 items-center pl-4 pr-4 py-2'>
    <NavLink to={'/'}> <img className='w-[clamp(20px,50vw,50px)]' src={logo} alt="Logo" /> </NavLink>
     
     <div className='text-blue-500 text-3xl font-bold space-x-8'>
      <NavLink  to={'/'} style={({isActive})=>{
        return { textDecoration : isActive?'underline':'none'}
      }}> Movies </NavLink>

      <NavLink  to={'watchlist'} style={({isActive})=>{
        return { textDecoration : isActive? 'underline' : 'none' }
      }}>Watchlist</NavLink>
    </div>

  </div>
) 
}

export default NavBar
