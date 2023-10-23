import React from 'react'
import { menu } from '@/data'
import Link from 'next/link'

import { MenuType } from '@/types/types'



const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", { cache: 'no-store'})

  if(!res.ok) {
    throw new Error("Failed")
  }

  return res.json()
}

const Menu = async () => {

  const menu:MenuType = await getData()

  return (
    <section className="md:px-10 py-10">
      <div className="pl-4 py-4 lg:px-20 xl:px-40 flex flex-col md:flex-row items-center justify-center gap-4">
          {menu.map((category) => (
          <Link
              href={`/menu/${category.slug}`}
              key={category.id}
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[420px] bg-cover p-2 md:p-8 transform scale-100 transition-transform hover:scale-90"
              style={{ backgroundImage: `url(${category.img})` }}
          >
              <div className={`text-${category.color} w-1/2`}>
                <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
                <p className="text-sm my-2">{category.desc}</p>
                <button className={`hidden md:block bg-blue-400 text-${category.color === "black" ? "black" : "white"} py-2 px-4 rounded-md mb-1`}>Explore</button>
              </div>
          </Link>
          ))}
      </div>
    </section>
  )
}

export default Menu