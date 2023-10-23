import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <footer className='bg-gray-100 bg-opacity-50 w-full bottom-0 '>
      <div className='h-auto md:h-24 p-4 flex items-center justify-between max-w-7xl mx-auto gap-3'>
        <Link href='/' className='font-bold'>Donut & Burger </Link>
        <p>
          &copy; 2023 Website | All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer