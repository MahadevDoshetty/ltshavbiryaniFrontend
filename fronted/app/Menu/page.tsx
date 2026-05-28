"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaShoppingBasket } from 'react-icons/fa';

const Menu = () => {
  const router = useRouter();

  const menu = [{ itemImageLink: "https://lh3.googleusercontent.com/d/1NHNIQ0sqQkkMnZ0h-30eqlDJTiEMm6qE", itemId: "1", itemTitle: "Chicken Biryani 1/2 Kg with 2 leg pieces", itemDescription: "Experience authentic biryani crafted with premium basmati rice and slow-cooked chicken, served with 2 tender leg pieces.", itemPrice: 599, }, { itemImageLink: "https://lh3.googleusercontent.com/d/1NHNIQ0sqQkkMnZ0h-30eqlDJTiEMm6qE", itemId: "1sa", itemTitle: "Chicken Biryani 1/2 Kg with 2 leg pieces", itemDescription: "Experience authentic biryani crafted with premium basmati rice and slow-cooked chicken, served with 2 tender leg pieces.", itemPrice: 599, }, { itemImageLink: "https://lh3.googleusercontent.com/d/1NHNIQ0sqQkkMnZ0h-30eqlDJTiEMm6qE", itemId: "1asdqerf", itemTitle: "Chicken Biryani 1/2 Kg with 2 leg pieces", itemDescription: "Experience authentic biryani crafted with premium basmati rice and slow-cooked chicken, served with 2 tender leg pieces.", itemPrice: 599, }, { itemImageLink: "https://lh3.googleusercontent.com/d/1NHNIQ0sqQkkMnZ0h-30eqlDJTiEMm6qE", itemId: "1asdaswer", itemTitle: "Chicken Biryani 1/2 Kg with 2 leg pieces", itemDescription: "Experience authentic biryani crafted with premium basmati rice and slow-cooked chicken, served with 2 tender leg pieces.", itemPrice: 599, }, { itemImageLink: "https://lh3.googleusercontent.com/d/1NHNIQ0sqQkkMnZ0h-30eqlDJTiEMm6qE", itemId: "1asdcssa", itemTitle: "Chicken Biryani 1/2 Kg with 2 leg pieces", itemDescription: "Experience authentic biryani crafted with premium basmati rice and slow-cooked chicken, served with 2 tender leg pieces.", itemPrice: 599, }, { itemImageLink: "https://lh3.googleusercontent.com/d/1NHNIQ0sqQkkMnZ0h-30eqlDJTiEMm6qE", itemId: "1asdasdasd", itemTitle: "Chicken Biryani 1/2 Kg with 2 leg pieces", itemDescription: "Experience authentic biryani crafted with premium basmati rice and slow-cooked chicken, served with 2 tender leg pieces.", itemPrice: 599, }]
  const [gcs, setGcs] = useState(false);
  const cart: any = [];

  const addFunc = (obj: any) => {
    navigator.vibrate(100);
    cart.push(obj);
    setGcs(true);
  };

  return (
    <div className='w-full px-4 md:px-6 lg:px-10'>

      {/* GRID */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

        {menu.map((obj) => (
          <div
            key={obj.itemId}
            className='bg-[#1E3A4C] border border-[#2C4A5F] rounded-2xl overflow-hidden hover:scale-[1.02] transition duration-200'
          >

            {/* IMAGE */}
            <div className='relative'>
              <img
                src={obj.itemImageLink}
                className='w-full h-44 object-cover'
                alt="Image"
              />

              <button
                onClick={() => addFunc(obj)}
                className='absolute bottom-3 right-3 bg-[#F4B400] text-[#0B1F2E] px-3 py-1 rounded-lg font-semibold hover:bg-[#D99A00]'
              >
                Add +
              </button>
            </div>

            {/* CONTENT */}
            <div className='p-4 flex flex-col gap-2'>
              <h2 className='text-base font-semibold text-white line-clamp-2'>
                {obj.itemTitle}
              </h2>

              <p className='text-sm text-[#9CA3AF] line-clamp-2'>
                {obj.itemDescription}
              </p>

              <span className='text-[#F4B400] font-semibold text-lg'>
                ₹ {obj.itemPrice}
              </span>
            </div>

          </div>
        ))}

      </div>

      {/* FLOATING CART BAR */}
      {gcs && (
        <div className='fixed bottom-0 left-0 w-full bg-[#112A3C] border-t border-[#2C4A5F] px-4 py-3 flex justify-between items-center shadow-lg'>
          <p className='text-sm text-white'>Item added to cart</p>

          <button
            onClick={() => router.push("/Cart")}
            className='bg-[#F4B400] text-[#0B1F2E] px-5 py-2 rounded-lg flex items-center gap-2 font-semibold'
          >
            Go to Cart <FaShoppingBasket />
          </button>
        </div>
      )}

    </div>
  )
}

export default Menu;