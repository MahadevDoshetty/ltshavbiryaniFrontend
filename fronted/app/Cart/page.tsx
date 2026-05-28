"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaArrowLeft, FaCartShopping, FaTrash, FaLocationDot } from 'react-icons/fa6';

const page = () => {
  const router = useRouter();

  const menu = [
    {
      itemImageLink: "https://lh3.googleusercontent.com/d/1NHNIQ0sqQkkMnZ0h-30eqlDJTiEMm6qE",
      itemId: "1",
      itemTitle: "Chicken Biryani 1/2 Kg with 2 leg pieces",
      itemPrice: 599,
      itemQuantity: 2
    },
    {
      itemImageLink: "https://lh3.googleusercontent.com/d/1NHNIQ0sqQkkMnZ0h-30eqlDJTiEMm6qE",
      itemId: "2",
      itemTitle: "Chicken Biryani Special Combo",
      itemPrice: 799,
      itemQuantity: 1
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1F2E] text-[#F9FAFB] px-3 md:px-10 py-6">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => router.push("/Menu")}
          className="flex items-center gap-2 text-sm bg-[#1E3A4C] px-4 py-2 rounded-lg border border-[#2C4A5F] hover:bg-[#F4B400] hover:text-[#0B1F2E] transition"
        >
          <FaArrowLeft /> Back
        </button>

        <h1 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
          <FaCartShopping className="text-[#F4B400]" /> Cart
        </h1>
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* ITEMS CARD */}
          <div className="bg-[#112A3C] border border-[#2C4A5F] rounded-2xl p-5 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Your Items</h2>

            <div className="flex flex-col gap-4">
              {menu.map((item) => (
                <div key={item.itemId}
                  className="flex flex-col md:flex-row gap-4 bg-[#1E3A4C] border border-[#2C4A5F] p-4 rounded-xl">

                  {/* IMAGE */}
                  <img
                    src={item.itemImageLink}
                    className="w-full md:w-28 h-24 object-cover rounded-lg"
                    alt=""
                  />

                  {/* DETAILS */}
                  <div className="flex-1">
                    <h3 className="font-medium">{item.itemTitle}</h3>
                    <p className="text-[#F4B400] font-semibold mt-1">
                      ₹ {item.itemPrice}
                    </p>
                  </div>

                  {/* QUANTITY */}
                  <div className="flex flex-col items-center justify-center gap-2">
                    <span className="text-xs text-[#9CA3AF]">Qty</span>
                    <div className="flex items-center gap-2">
                      <button className="px-2 py-1 rounded-md bg-[#2C4A5F] hover:bg-[#F4B400] hover:text-black">-</button>
                      <span className="px-3 py-1 bg-[#0B1F2E] rounded-md text-sm">
                        {item.itemQuantity}
                      </span>
                      <button className="px-2 py-1 rounded-md bg-[#2C4A5F] hover:bg-[#F4B400] hover:text-black">+</button>
                    </div>
                  </div>

                  {/* REMOVE */}
                  <button className="flex items-center gap-2 text-sm text-[#F4B400] border border-[#F4B400] px-3 py-1.5 rounded-lg hover:bg-[#F4B400] hover:text-black transition">
                    <FaTrash /> Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ADDRESS CARD */}
          <div className="bg-[#112A3C] border border-[#2C4A5F] rounded-2xl p-5">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FaLocationDot className="text-[#F4B400]" /> Delivery Address
            </h2>

            <div className="grid md:grid-cols-2 gap-3">
              <input className="input" placeholder="Full Name" />
              <input className="input" placeholder="Phone Number" />
              <input className="input md:col-span-2" placeholder="Street Address" />
              <input className="input" placeholder="City" />
              <input className="input" placeholder="Pincode" />
            </div>
          </div>

          {/* PAYMENT METHOD */}
          <div className="bg-[#112A3C] border border-[#2C4A5F] rounded-2xl p-5">
            <h2 className="text-lg font-semibold mb-4">Payment Method</h2>

            <div className="flex flex-col gap-3">

              {/* <label className="flex items-center justify-between bg-[#1E3A4C] border border-[#2C4A5F] p-4 rounded-xl cursor-pointer hover:border-[#F4B400] transition">
                <div className="flex flex-col">
                  <span className="font-medium">Cash on Delivery</span>
                  <span className="text-sm text-[#9CA3AF]">
                    Pay when your order arrives
                  </span>
                </div>
                <input type="radio" name="payment" className="accent-[#F4B400]" defaultChecked />
              </label> */}
              <label className="flex items-center justify-between bg-[#1E3A4C] border border-[#2C4A5F] p-4 rounded-xl opacity-50 cursor-not-allowed">

                <div className="flex flex-col">
                  <span className="font-medium">Cash on Delivery</span>
                  <span className="text-sm text-[#9CA3AF]">
                    Not available for this location
                  </span>
                </div>

                <input
                  type="radio"
                  name="payment"
                  className="accent-[#F4B400]"
                  disabled
                />

              </label>

              <label className="flex items-center justify-between bg-[#1E3A4C] border border-[#2C4A5F] p-4 rounded-xl cursor-pointer hover:border-[#F4B400] transition">
                <div className="flex flex-col">
                  <span className="font-medium">Online Payment</span>
                  <span className="text-sm text-[#9CA3AF]">
                    UPI / Card / Net Banking
                  </span>
                </div>
                <input type="radio" name="payment" className="accent-[#F4B400]" />
              </label>

            </div>
          </div>

          {/* COUPON */}
          <div className="bg-[#112A3C] border border-[#2C4A5F] rounded-2xl p-5">
            <h2 className="text-lg font-semibold mb-3">Coupon</h2>

            <div className="flex flex-col md:flex-row gap-3">
              <input className="input flex-1" placeholder="Enter coupon code" />
              <button className="btn-primary">Apply</button>
            </div>
          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="sticky top-6 h-fit">

          <div className="bg-[#112A3C] border border-[#2C4A5F] rounded-2xl p-5">

            <h2 className="text-lg font-semibold mb-4">Summary</h2>

            <div className="flex flex-col gap-2 text-sm text-[#9CA3AF]">
              <div className="flex justify-between">
                <span>Items Total</span>
                <span className="text-white">₹ 1997</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="text-white">₹ 49</span>
              </div>

              <div className="flex justify-between">
                <span>Taxes</span>
                <span className="text-white">₹ 120</span>
              </div>

              <hr className="border-[#2C4A5F] my-2" />

              <div className="flex justify-between text-base font-semibold text-white">
                <span>Total</span>
                <span className="text-[#F4B400]">₹ 2166</span>
              </div>
            </div>

            <button className="btn-primary w-full mt-5 text-lg py-3" onClick={() => { router.push("/OrderS") }}>
              Place Order
            </button>

          </div>

        </div>

      </div>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-[#112A3C] border-t border-[#2C4A5F] p-3 md:hidden flex justify-between items-center">
        <span className="font-semibold text-[#F4B400]">₹ 2166</span>
        <button className="btn-primary px-6 py-2">Checkout</button>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .input {
          background: #0B1F2E;
          border: 1px solid #2C4A5F;
          padding: 10px;
          border-radius: 10px;
          outline: none;
        }

        .btn-primary {
          background: #F4B400;
          color: #0B1F2E;
          font-weight: 600;
          padding: 10px 16px;
          border-radius: 10px;
          transition: 0.2s;
        }

        .btn-primary:hover {
          background: #D99A00;
        }
      `}</style>

    </div>
  )
}

export default page;