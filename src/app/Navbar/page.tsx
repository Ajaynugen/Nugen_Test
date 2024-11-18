
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-blue-400 h-10 w-full justify-evenly text-center items-center flex'>
      
      <ul className="flex space-x-6">
        <li className='text-black'>
          <Link href="/" className="text-xl">
            Home
          </Link>
        </li>
        <li className='text-black'>
          <Link  href="/about" className="text-xl">
            About
          </Link>
        </li>
        <li className='text-black'>
          <Link href="/Login" className="text-xl">
            Dashboard
          </Link>
        </li>
      </ul>
   

    </div>
  )
}

export default Navbar