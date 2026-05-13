import React from 'react'
import Image from 'next/image'
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className='w-full p-6 bg-[#1A2B3A] text-white rounded-t-2xl' >
      <div>
        <div className='flex space-x-1.5' >
          <Image src={"/Logo.png"} alt='Logo' height={45} width={45} />
          <div className='flex flex-col justify-center max-w-fit font-extrabold'><h2>LtsHavBiryani</h2></div>
        </div>
        <div className='tracking-widest font-bold text-xl pl-5'>
          <h1>Biryani for <span className='text-orange-400' >every </span>emotion!</h1>
        </div>
        <div className='pl-5'>
          <h2>Know more about us!</h2>
          <div className='flex' >
            <button>
              <Image src={"/Instagram.svg"} alt='Media' height={35} width={35} />
            </button>
            <button>
              <Image src={"/Instagram.svg"} alt='Media' height={35} width={35} />
            </button>
            <button>
              <Image src={"/Instagram.svg"} alt='Media' height={35} width={35} />
            </button>
            <button>
              <Image src={"/Instagram.svg"} alt='Media' height={35} width={35} />
            </button>
            <button>
              <Image src={"/Instagram.svg"} alt='Media' height={35} width={35} />
            </button>
          </div>
        </div>
        <div className='grid grid-cols-4 grid-rows-2 text-xs pl-2.5 text-[#E5E0D8]'>
          <button>Bulk Orders</button>
          <button>Refund Policy</button>
          <button>Privacy Policy</button>
          <button>Terms and Conditions</button>
          <button>Careers</button>
          <button>Security</button>
          <button>For Stakeholders</button>
          <button>Contact Us</button>
        </div>
        <div className='flex justify-center pt-5 text-xs'>
          <h3>© {year} Konnothu Veetil Food Company. All rights reserved </h3>
        </div>
      </div>
    </div >
  )
}

export default Footer