import { Button } from "@/components/ui/button";
import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="flex flex-wrap max-w-7xl mx-auto">
      {pizzas.map((item) => (
        <Link 
          href={`/product/${item.id}`} 
          key={item.id}
          className="h-[40vh] w-1/2 lg:w-1/3 p-4 flex flex-col border group"
        >

          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain"/>
            </div>
          )}

          <div className="flex flex-col items-center font-bold bg-blue-200 py-3">
            <h1 className="text-lg md:text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <Button className="hidden group-hover:block uppercase">Add to bag</Button>
            {/* <button className="hidden group-hover:block uppercase bg-black text-white p-2 rounded-md">Add to Cart</button> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;