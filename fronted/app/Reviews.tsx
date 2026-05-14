import React from 'react'

const Reviews = () => {
    return (
        <div className='w-full p-4 bg-[#1A2B3A] rounded-2xl text-white ' >
            <div>
                <h1 className='text-2xl place-self-center font-extrabold' >What Our Customers Say !</h1>
            </div>

            <div className='flex p-8 overflow-x-scroll w-3/4 gap-5 h-auto scrollbar-none justify-around place-self-center xs:' >
                <div className='border-2 rounded-2xl border-amber-50 w-1/3 p-12 '>
                    <p className='font-extrabold '>"Really loved the flavor and aroma, felt fresh and satisfying."</p>
                    <p className='font-extralight' >    -Vijay Thalapathy </p>
                </div>
                <div className='border-2 rounded-2xl border-amber-50 w-1/3 p-12'>
                    <p className='font-extrabold' >"The biryani is awesome, I order it often !"</p>
                    <p className='font-extralight'> - Vijay Thalapathy </p>
                </div>
                <div className='border-2 rounded-2xl border-amber-50 w-1/3 p-12'>
                    <p className='font-extrabold'>"Great balance of spices, not too strong but still very tasty."</p>
                    <p className='font-extralight'> - Vijay Thalapathy </p>
                </div>
                <div className='border-2 rounded-2xl border-amber-50 w-1/3 p-12' >
                    <p className='font-extrabold'>"Chicken was tender and well-marinated, full of flavor in every bite."</p>
                    <p className='font-extralight'> - Vijay Thalapathy </p>
                </div>
                <div className='border-2 rounded-2xl border-amber-50 w-1/3 p-12' >
                    <p className='font-extrabold'>"Very satisfying meal, perfect for a weekend craving."</p>
                    <p className='font-extralight'> - Vijay Thalapathy </p>
                </div>
            </div>
        </div>
    )
}

export default Reviews;