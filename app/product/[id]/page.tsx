import Image from "next/image";
import React from "react";

import { singleProduct } from "@/data";
import { ProductType } from "@/types/types";

import Price from "@/components/Price";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Animate from "@/components/Animate";
import DeleteButton from "@/components/DeleteButton";

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, { cache: 'no-store'} )

  if(!res.ok) {
    throw new Error("Failed")
  }

  return res.json()
}

const SingleProductPage = async ( {params}: { params: {id: string} } ) => {

  const singleProduct:ProductType = await getData(params.id)

  return (
    <div className="relative">
      <div className="flex justify-start items-center max-w-7xl mx-auto mt-5 uppercase font-bold text-2xl px-4 gap-3">
        <Link href="/"><Button variant={"outline"} className="md:ml-[115px]">Menu</Button></Link>
      </div>
      <div className="p-4 md:px-24 lg:px-32 xl:px-40 max-w-[1280px] mx-auto h-auto flex flex-col justify-around md:flex-row md:gap-6 md:items-center mb-36 relative">
        {singleProduct?.img && (
          <div className="relative w-full h-1/2 md:h-[60%] flex justify-center">
            <Animate src={singleProduct.img} />
            {/* <Image
              src={singleProduct.img}
              alt={singleProduct.title}
              className="object-contain hover:rotate-[360deg] hover:scale-75 transition-all duration-500 cursor-pointer"
              fill
            /> */}
          </div>
        )}

        <div className="flex flex-col gap-4 md:h-[70%] md:justify-center p-4 bg-white bg-opacity-50">
          <h1 className="text-3xl font-bold xl:text-5xl">{singleProduct.title}</h1>
          <p>{singleProduct.desc}</p>
          <Price product={singleProduct}/>
        </div>
      </div>
      <DeleteButton id={singleProduct.id}/>
    </div>
  );
};

export default SingleProductPage;