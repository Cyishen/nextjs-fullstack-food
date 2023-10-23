"use client"
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/utils/store'
import Image from 'next/image'

import React, { useEffect } from 'react'
import { useRouter } from "next/navigation";

const CartPage = () => {

    const { products, totalItems, totalPrice, addToCart, removeFromCart} = useCartStore()
    const router = useRouter();

    useEffect(() => {
        useCartStore.persist.rehydrate()
    },[])
      
    
  return (
    <div className="p-6 mb-20 flex flex-col items-center justify-center md:gap-8">
        <div className="w-full p-2 flex justify-between m-4 max-w-7xl">

            <Button className="text-xl" variant="outline" onClick={()=>router.back()}>上一頁</Button>

            <h1 className="text-4xl font-bold flex">結帳內容</h1>
        </div>
        <div className="w-full flex flex-col justify-between gap-4 border max-w-7xl bg-white bg-opacity-50"> 
            <div className="p-4 w-full flex flex-col">
                <div className='flex flex-row justify-between font-bold text-2xl'>
                    <h2>商品</h2>
                    <h2 className="hidden md:block">品項</h2>
                    <h2 className="hidden md:block">單價</h2>
                    <h2 className="hidden md:block">合計</h2>
                </div>
                <hr className="my-2 border-black" />
                {products.map((item)=> (
                    <div className="flex flex-wrap md:flex-row items-center justify-between mb-4 gap-5" key={item.id+ item.optionTitle}>
                        { item.img && (
                            <Image src={item.img} alt="" width={100} height={100} />
                        )}

                        <div>
                            <h1 className="uppercase text-base md:text-xl font-bold">{item.title} x {item.quantity}</h1>
                            <span>{item.optionTitle}</span>
                        </div>
                        <div className="font-bold hidden md:block">{item.price}</div>
                 
                        <div className='flex flex-row gap-6'>
                            <h2 className="font-bold">${item.price}</h2>
                            <span className="bg-red-400 text-white px-2 rounded-md cursor-pointer" 
                                onClick={ ()=>removeFromCart(item) }
                            >X</span>
                        </div>
                    </div>    
                ))}
            </div>
            
            <div className="p-4 w-full bg-fuchsia-50 text-2xl flex flex-col gap-4 justify-center">
                <div className="flex justify-end gap-20">
                    <span className="">數量</span>
                    <span className="font-bold">{totalItems}</span>
                </div>
                <hr className="my-2 border-black w-full md:w-1/2 self-end" />
                <div className="flex justify-end gap-20">
                    <span className="">合計</span>
                    <span className="font-bold">${totalPrice}</span>
                </div>
                
                <Button variant={"destructive"} className="text-white text-lg uppercase p-6 rounded-md w-full md:w-1/2 self-end">
                    checkout
                </Button>
            </div>
        </div>
    </div>

  )
}

export default CartPage