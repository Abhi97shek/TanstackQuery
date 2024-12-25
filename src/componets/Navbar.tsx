import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar:React.FC = () => {
  return (
    <div className='flex justify-around p-4 bg-slate-500 '>
        <div>
            Logo
        </div>
        <ul className='flex gap-10'>
            <li><NavLink to="/">Home</NavLink></li>
            <li>Contact Us</li>
            <li><NavLink to="/tanstack">Tanstack Query Data</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar