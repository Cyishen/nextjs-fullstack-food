'use client'

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { combo, singleProduct } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  price: number;
  id: number;
  options?: { 
    title: string;
    additionalPrice: number 
  }[];
};

// const Price: React.FC<Props> = ({ price, id })
const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    
    <div className="flex flex-col gap-4">
        <div className="bg-gray-100 px-6 flex items-center gap-3">
            <Image src={singleProduct.img as string} alt={singleProduct.title} width={60} height={60} />
            <p className="font-bold">{singleProduct.title} x {quantity}</p>
        </div>
        <div className="bg-gray-100 px-6 flex items-center gap-3">
            <Image src={combo.img as string} alt={singleProduct.title} width={60} height={60} />
            <p className="font-bold">{combo.title} x 1 (套餐)</p>
        </div>
        <div className="bg-gray-100 px-6 flex items-center gap-3">
            <Image src={combo.img2 as string} alt={singleProduct.title} width={60} height={60} />
            <p className="font-bold">{combo.title2} x 1 (套餐)</p>
        </div>
        
        <h2 className="text-2xl font-bold">${total}</h2>
        <div className="flex gap-4">
            {options?.map((option, index) => (
            <button
                key={option.title}
                className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
                style={{
                background: selected === index ? "rgb(248 113 113)" : "white",
                color: selected === index ? "white" : "red",
                }}
                onClick={() => setSelected(index)}
            >
                {option.title}
            </button>
            ))}
        </div>

        {/* quantity option */}
        <div className="flex flex-col items-center">
            <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
                <span>Quantity</span>
                <div className="flex gap-4 items-center">
                    <button
                        className="bg-gray-100 px-3 py-2 rounded-md"
                        onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                    >
                    {"-"}
                    </button>
                    <span>{quantity}</span>
                    <button
                        className="bg-gray-100 px-3 py-2 rounded-md"
                        onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
                    >
                    {"+"}
                    </button>
                </div>
            </div>

        <div className="flex justify-between w-full py-3">
            <Link href="/">
                <Button variant={"outline"}>
                    上一頁
                </Button>
            </Link>
            <Button className="w-56 p-3">
                加入購物車
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Price;