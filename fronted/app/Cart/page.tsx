"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaArrowLeft, FaCartShopping } from 'react-icons/fa6';
const page = () => {
  const router = useRouter();
  const [orders, setOrders] = useState(true);
  const menu = [{
    itemImageLink: "https://lh3.googleusercontent.com/d/1NHNIQ0sqQkkMnZ0h-30eqlDJTiEMm6qE",
    itemId: "1",
    itemTitle: "Chicken Biryani 1/2 Kg with 2 leg pieces",
    itemDescription: "Experience authentic biryani crafted with premium basmati rice and slow-cooked chicken, served with 2 tender leg pieces.",
    itemPrice: 599,
    itemQuantity: 5
  }, {
    itemImageLink: "https://lh3.googleusercontent.com/d/1NHNIQ0sqQkkMnZ0h-30eqlDJTiEMm6qE",
    itemId: "1a",
    itemTitle: "Chicken Biryani 1/2 Kg with 2 leg pieces",
    itemDescription: "Experience authentic biryani crafted with premium basmati rice and slow-cooked chicken, served with 2 tender leg pieces.",
    itemPrice: 599,
    itemQuantity: 5
  }];
  return (
    <div className='flex flex-col gap-3'>
      <div></div>
      <div>
        <h1 className='text-2xl bg-yellow-500 w-fit p-4 rounded-2xl flex justify-self-center font-bold gap-0.5' >My Cart <FaCartShopping className='flex place-self-center' /> </h1>
      </div>
      <div className='bg-[#1A2B3A] text-white ml-5 p-2 w-fit rounded-2xl' >
        <button className='flex place-items-center gap-2 font-bold justify-center ' onClick={() => { router.push("/Menu") }} ><FaArrowLeft /> Menu</button>
      </div>
      <div className=' bg-[#1A2B3A] border-2 rounded-2xl p-2' >
        <div className='text-white' >
          <h2 className='text-2xl' >Order Details</h2>
        </div>
        <div className='rounded-2xl max-w-full md:max-w-1/2 flex justify-center gap-2 flex-col' >
          {orders && menu.map((obj) => {
            return (
              <div className='flex justify-between p-2 bg rounded-2xl bg-yellow-500' key={obj.itemId} >
                <div className='flex flex-col' >
                  <img height='auto' width='auto' className='h-10 rounded-2xl' src={obj.itemImageLink} alt="Image" />
                </div>
                <div className='font-bold' >
                  <h2>{obj.itemTitle}</h2>
                  <h2>{obj.itemPrice}</h2>
                </div>
                <div>
                  <h2>Quantity</h2>
                  <div>
                    <button>-</button>
                    <button>{obj.itemQuantity}</button>
                    <button>+</button>
                  </div>
                </div>
                <div><button>Remove</button></div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default page;