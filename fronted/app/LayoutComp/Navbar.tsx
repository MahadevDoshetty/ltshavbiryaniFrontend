"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import { FaCartShopping } from 'react-icons/fa6'
import { FaShoppingBasket } from 'react-icons/fa'
const Navbar = () => {
  const router = useRouter();
  return (
    <div className='flex justify-around p-0 m-0 bg-[#1A2B3A] text-white rounded-b-2xl'>
      <div className='w-1/2 p-0 m-0' >
        <Image src="/Logo.png" width={70} height={70} loading="eager" alt="Logo" onClick={() => { router.push("/") }} />
      </div>
      <div className='flex justify-around space-x-5'  >
        <button onClick={() => { router.push("/Menu") }} >Menu</button>
        <button onClick={() => { router.push("/Cart") }}  >Cart  </button>
        <button onClick={() => { router.push("/Login") }} >Login</button>
      </div>
    </div>
  )
}

export default Navbar;