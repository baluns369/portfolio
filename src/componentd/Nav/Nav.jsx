import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <div className='nav bg-red-800 w-full h-20 p-5  flex'>
        logo
<ul className='flex space-x-6 ... '>
    <Link to={"/"}>
    <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300 ... text-2xl ... text-white '>Home</li> </Link>
    <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300 ... text-2xl text-white '>Project</li>
    <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300 ... text-2xl ... text-white '>Aboute</li>
    <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300 ... text-2xl ... text-white' >Contact</li>

</ul>
      </div>
    </div>
  )
}

export default Nav
