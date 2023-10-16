import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <footer className='bg-gray-200 w-full fixed bottom-0'>
      <div className='h-12 md:h-24 p-4 flex items-center justify-between max-w-7xl mx-auto gap-3'>
        <Link href='/' className='font-bold'>FOOD</Link>
        <p>
          &copy; 2023 Website | All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer