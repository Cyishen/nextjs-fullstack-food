import { Button } from "@/components/ui/button";
import { pizzas } from "@/data";
import { ProductType } from "@/types/types";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async (category: string) => {
  const res = await fetch(`http://localhost:3000/api/products?cat=${category}`, { cache: 'no-store'} )

  if(!res.ok) {
    throw new Error("Fail")
  }
  return res.json()
}

type Props = {
  params: { category: string}
}

const CategoryPage = async ( {params}:Props ) => {

  const products:ProductType[] = await getData(params.category)
  
  return (
    <>
    <div className="flex justify-start items-center max-w-7xl mx-auto mt-5 uppercase font-bold text-2xl px-4 gap-3">
      {params.category}
      <Link href="/"><Button variant={"outline"}>Menu</Button></Link>
    </div>
    <div className="flex flex-wrap max-w-7xl mx-auto mt-5">
      {products.map((item) => (
        <Link 
          href={`/product/${item.id}`} 
          key={item.id}
          className="h-[40vh] w-1/2 lg:w-1/3 p-4 flex flex-col group"
        >
          {item.img ? ( 
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain transform scale-100 transition-transform hover:scale-110"/>
            </div>
          ) : (
            <div className="h-[80%] flex items-center justify-center"> 
              {/* <p>No Image Available</p> */}
              <Image src="https://fakeimg.pl/350x200/?text=NoImage" alt="No Image Available" width={350} height={200} />
            </div>
          )}

          <div className="flex flex-col items-center font-bold py-3">
            <h1 className="text-lg md:text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="text-xl mb-2">${item.price}</h2>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
};

export default CategoryPage;