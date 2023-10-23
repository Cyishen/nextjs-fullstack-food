import Image from 'next/image'
import Link from 'next/link'

import { Button } from './ui/button'
import MobileSidebar from './Mobile-sidebar'
import UserLinks from './UserLinks'
import CartIcon from './CartIcon'
import SpecialBg from './SpecialBg'

const Navbar = () => {
  
  return (
    <nav className='w-full'>
      <div className='flex flex-row justify-between items-center px-5 py-4 border-b'>
        <div className='flex justify-start w-1/3 md:mx-auto gap-3'>
          <SpecialBg />
        </div>

        <div className='flex items-center justify-center w-2/3'>
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
        </div>

        <div className='flex flex-row justify-end w-1/3 md:mx-auto gap-5'>
          <CartIcon />
          <UserLinks />
          <MobileSidebar />
        </div>
      </div>
    </nav>
  )
}

export default Navbar