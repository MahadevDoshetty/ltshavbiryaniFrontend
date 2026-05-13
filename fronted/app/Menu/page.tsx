import React from 'react'

const Menu = () => {
  const menu = [{
    itemImageLink: "https://drive.google.com/uc?export=view&id=1NHNIQ0sqQkkMnZ0h-30eqlDJTiEMm6qE",
    itemId: "1",
    itemTitle: "Chicken Biryani 1/2 Kg with 2 leg pieces",
    itemDescription: "Experience authentic biryani crafted with premium basmati rice and slow-cooked chicken, served with 2 tender leg pieces. Rich in flavor, perfectly spiced, and irresistibly delicious.",
    itemPrice: 599,
  }, {
    itemImageLink: "https://drive.google.com/uc?export=view&id=1NHNIQ0sqQkkMnZ0h-30eqlDJTiEMm6qE",
    itemId: "1sa",
    itemTitle: "Chicken Biryani 1/2 Kg with 2 leg pieces",
    itemDescription: "Experience authentic biryani crafted with premium basmati rice and slow-cooked chicken, served with 2 tender leg pieces. Rich in flavor, perfectly spiced, and irresistibly delicious.",
    itemPrice: 599,
  },
  {
    itemImageLink: "https://drive.google.com/uc?export=view&id=1NHNIQ0sqQkkMnZ0h-30eqlDJTiEMm6qE",
    itemId: "1asd",
    itemTitle: "Chicken Biryani 1/2 Kg with 2 leg pieces",
    itemDescription: "Experience authentic biryani crafted with premium basmati rice and slow-cooked chicken, served with 2 tender leg pieces. Rich in flavor, perfectly spiced, and irresistibly delicious.",
    itemPrice: 599,
  }]
  return (
    <div>
      {menu.map((obj) => {
        return (
          <div key={obj.itemId} className='flex justify-center p-2 space-x-3' >
            <div className=' bg-red-400' >
              <div className='text-xl text-white min-h-full bg-green-400 flex items-end justify-end' >
                <button className='rounded-2xl bg-[#1A2B3A] p-2'>Add +</button>
              </div>
              <img src={obj.itemImageLink} alt="Image" height={150} width={150} />
            </div>
            <div>
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

export default Menu