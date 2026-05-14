"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Menu = () => {
  const router = useRouter();
  const menu = [{
    itemImageLink: "https://lh3.googleusercontent.com/d/1NHNIQ0sqQkkMnZ0h-30eqlDJTiEMm6qE",
    itemId: "1",
    itemTitle: "Chicken Biryani 1/2 Kg with 2 leg pieces",
    itemDescription: "Experience authentic biryani crafted with premium basmati rice and slow-cooked chicken, served with 2 tender leg pieces.",
    itemPrice: 599,
  }, {
    itemImageLink: "https://lh3.googleusercontent.com/d/1NHNIQ0sqQkkMnZ0h-30eqlDJTiEMm6qE",
    itemId: "1sa",
    itemTitle: "Chicken Biryani 1/2 Kg with 2 leg pieces",
    itemDescription: "Experience authentic biryani crafted with premium basmati rice and slow-cooked chicken, served with 2 tender leg pieces.",
    itemPrice: 599,
  },
  {
    itemImageLink: "https://lh3.googleusercontent.com/d/1NHNIQ0sqQkkMnZ0h-30eqlDJTiEMm6qE",
    itemId: "1asdqerf",
    itemTitle: "Chicken Biryani 1/2 Kg with 2 leg pieces",
    itemDescription: "Experience authentic biryani crafted with premium basmati rice and slow-cooked chicken, served with 2 tender leg pieces.",
    itemPrice: 599,
  }, {
    itemImageLink: "https://lh3.googleusercontent.com/d/1NHNIQ0sqQkkMnZ0h-30eqlDJTiEMm6qE",
    itemId: "1asdaswer",
    itemTitle: "Chicken Biryani 1/2 Kg with 2 leg pieces",
    itemDescription: "Experience authentic biryani crafted with premium basmati rice and slow-cooked chicken, served with 2 tender leg pieces.",
    itemPrice: 599,
  }, {
    itemImageLink: "https://lh3.googleusercontent.com/d/1NHNIQ0sqQkkMnZ0h-30eqlDJTiEMm6qE",
    itemId: "1asdcssa",
    itemTitle: "Chicken Biryani 1/2 Kg with 2 leg pieces",
    itemDescription: "Experience authentic biryani crafted with premium basmati rice and slow-cooked chicken, served with 2 tender leg pieces.",
    itemPrice: 599,
  }, {
    itemImageLink: "https://lh3.googleusercontent.com/d/1NHNIQ0sqQkkMnZ0h-30eqlDJTiEMm6qE",
    itemId: "1asdasdasd",
    itemTitle: "Chicken Biryani 1/2 Kg with 2 leg pieces",
    itemDescription: "Experience authentic biryani crafted with premium basmati rice and slow-cooked chicken, served with 2 tender leg pieces.",
    itemPrice: 599,
  }];
  const [gcs, setGcs] = useState(false);
  const [message, setMessage] = useState("");
  const [btnMsg, setBtnMsg] = useState("");
  const cart: any = [];
  const addFunc = (obj: any) => {
    navigator.vibrate(100);
    cart.push(obj);
    console.log(cart);
    setMessage("Item added to cart");
    if (cart.length > 0) {
      setGcs(true)
    }
  };

  return (
    <div className='md:grid grid-cols-4 flex flex-col gap-4' >
      {menu.map((obj) => {
        return (
          <div key={obj.itemId} className='flex justify-center p-2 space-x-3 w-full h-50 border-white border-2 rounded-2xl bg-white' >
            <div className=''>
              <img src={obj.itemImageLink} className='h-full w-40 rounded-2xl' width='auto' height='auto' alt="Image" />
              <button className='rounded-2xl absolute bg-[#1A2B3A] p-2  text-white flex place-self-end' onClick={() => addFunc(obj)} >Add +</button>
            </div>
            <div className='w-2xs h-40'>
              <h2 className='text-xl font-bold '>{obj.itemTitle}</h2>
              <h2 className='font-semibold' >₹ {obj.itemPrice}</h2>
              <p>{obj.itemDescription}</p>
            </div>
          </div>
        )
      })}
      <div className='flex flex-col fixed w-full place-content-end bottom-0' >{gcs && <div className='flex justify-around bg-yellow-300 place-items-center-safe text-black ' >
        <p className='p-2 text-xl' >Items added to cart</p>
        <button className='rounded-2xl bg-[#1A2B3A] p-2 m-2  text-white' onClick={() => router.push("/Cart")} >Go to Cart</button>
      </div>
      }
      </div>
    </div>
  )
}

export default Menu;