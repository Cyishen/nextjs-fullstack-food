"use client"
import { Menu, X } from "lucide-react"
import Link from "next/link";
import { useState } from "react"

const links = [
  { id: 1, title: "New One", url: "/" },
  { id: 2, title: "Papular", url: "/" },
  { id: 3, title: "Drink", url: "/" },
];

const MobileSidebar = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      {open ? <X onClick={()=>setOpen(false)} className="cursor-pointer" /> : <Menu onClick={()=>setOpen(true)} className="cursor-pointer"/>} 
      {open && 
        <div className="bg-gray-200 absolute w-full left-0 top-[113px] h-full z-50">
            {links.map( (item)=> (
              <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>
                <div className="flex flex-col text-2xl font-bold px-5 mb-3 py-3 cursor-pointer">
                  {item.title}
                </div>
              </Link>
            ))}
        </div>
      }
    </div>
  )
}

export default MobileSidebar