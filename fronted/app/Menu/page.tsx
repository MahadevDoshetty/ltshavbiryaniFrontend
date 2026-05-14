import React from 'react'

const Menu = () => {
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
  }]
  return (
    <div className='md:grid grid-cols-4 flex flex-col gap-4' >
      {menu.map((obj) => {
        return (
          <div key={obj.itemId} className='flex justify-center p-2 space-x-3 w-full h-50 border-white border-2 rounded-2xl bg-white' >
            <div className=''>
              <img src={obj.itemImageLink} className='h-full w-40 rounded-2xl' width='auto' height='auto' alt="Image" />
              <button className='rounded-2xl absolute bg-[#1A2B3A] p-2  text-white flex place-self-end'>Add +</button>
            </div>
            <div className='w-2xs h-40' >
              <h2 className='text-xl font-bold '>{obj.itemTitle}</h2>
              <h2 className='font-semibold' >₹ {obj.itemPrice}</h2>
              <p>{obj.itemDescription}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Menu;