import React from 'react'

function Header() {
  return (
    <div className='flex justify-between px-4 pt-4 dark:bg-black transition duration-400'>
        <h2 className='dark:text-gray-200'>Dashboard</h2>
        <h2 className='dark:text-gray-200'>Welcome Back, Chimwemwe</h2>
    </div>
  )
}

export default Header