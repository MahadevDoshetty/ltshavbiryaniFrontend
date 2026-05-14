import React from 'react'
import Image from "next/image";

const Banner = () => {
    const banner = [
        "https://drive.google.com/uc?export=view&id=1oHEo8jkfEPyHM9U9yWM3iRsuHLAloYLV", "https://drive.google.com/uc?export=view&id=1djc9sydRBqKWALOdy4ca3jGDqj6Mn9r8", "https://drive.google.com/uc?export=view&id=1siMEN7-OYk9GcYknAKMOg-I4Hi50sMnQ", "https://drive.google.com/uc?export=view&id=109ruPi5_gBumcAAvNqACbs3vkjaQ3Bvc"
    ]
    return (
        <div className='flex  p-2 m-2 rounded-2xl overflow-x-auto scrollbar-none' >
            {banner.map((link, index) => {
                return <Image src={link} alt="Banner" key={index} className='md:w-full' height={200} width={300} />
            })}
        </div>
    )
}

export default Banner;