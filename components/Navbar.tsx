import Image from 'next/image'
import Link from 'next/link'

import { Button } from './ui/button'
import MobileSidebar from './Mobile-sidebar'

const Navbar = () => {
  return (
    <nav className='w-full'>
      <div className='flex flex-row justify-between items-center px-5 py-4 border-b'>
        <div className='flex justify-end w-1/3 md:mx-auto'>
        </div>

        <div className='flex items-center justify-center w-2/3'>
          {/* <ul className='hidden md:flex justify-around flex-1 text-2xl font-bold'>
            <li className='text-2xl mx-2 relative border'>New
              <a className='absolute border bg-white w-36 top-8 -left-12 p-5 flex-col'>
                test
              </a>
            </li>
            <li className='text-2xl mx-2 relative'>Papular</li>
            <li className='text-2xl mx-2 relative'>Drink</li>
          </ul> */}
          <div className='items-center justify-center'>
            <Link href='/'>
              <Image
                src="/burger.svg"
                alt="logo"
                height="80"
                width="80"
              >
              </Image>
            </Link>
          </div>
          {/* <ul className='hidden md:flex justify-around flex-1 text-2xl font-bold'>
            <li className='text-2xl mx-2 relative'>Donut</li>
            <li className='text-2xl mx-2 relative'>Donut</li>
            <li className='text-2xl mx-2 relative'>Donut</li>
          </ul> */}
        </div>

        <div className='flex flex-row justify-end w-1/3 md:mx-auto gap-2'>
          <Link href="/orders">
          <Button variant="secondary" className="hidden md:flex">Order</Button>
          </Link>
          <Link href="/cart">
            <Button variant="secondary" className="hidden md:flex">Cart</Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" className="hidden md:flex">Login</Button>
          </Link>
          
          <MobileSidebar />
        </div>
      </div>
    </nav>
  )
}

export default Navbar