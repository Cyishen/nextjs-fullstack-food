import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className="p-6 h-[500px] flex items-center justify-center md:gap-8">
        <div className="w-full flex flex-col md:flex-row justify-between gap-4 border max-w-7xl">
            <div className="p-4 md:w-1/2 flex flex-col justify-between w-full overflow-scroll">
                <div className="w-full flex flex-row items-center justify-between mb-4 gap-5">
                    <Image src="/burgers/b1.png" alt="" width={100} height={100} />
                    <div className="">
                        <h1 className="uppercase text-xl font-bold">sicilian</h1>
                        <span>combo</span>
                    </div>
                    <h2 className="font-bold">$79.90</h2>
                    <span className="bg-red-400 text-white px-2 rounded-md cursor-pointer">X</span>
                </div>
            </div>
            
            <div className="h-1/2 w-full md:w-1/2 p-4 bg-fuchsia-50 text-2xl flex flex-col gap-4 justify-center lg:h-full">
                <div className="flex justify-between">
                    <span className="">Subtotal (3 items)</span>
                    <span className="">$81.70</span>
                </div>
                <hr className="my-2 border-black" />
                <div className="flex justify-between">
                    <span className="">TOTAL</span>
                    <span className="font-bold">$81.70</span>
                </div>

                <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
                    CHECKOUT
                </button>
            </div>

        {/* <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/> */}
        </div>
    </div>
  )
}

export default CartPage