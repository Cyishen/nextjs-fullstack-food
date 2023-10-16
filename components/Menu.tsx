import React from 'react'
import { menu } from '@/data'
import Link from 'next/link'

const Menu = () => {
  return (
    <section className="px-10 py-10">
      <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center justify-center gap-2 bg-gray-100">
          {menu.map((category) => (
          <Link
              href={`/menu/${category.slug}`}
              key={category.id}
              className="w-full h-1/3 bg-cover p-8 md:h-1/2"
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