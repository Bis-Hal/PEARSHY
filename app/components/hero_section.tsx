import React from 'react'


const HeroSection = () => {
  return (
    <div className="flex flex-row justify-between bg-water-ball bg-cover w-full h-80" >
      <div className='bg-hero bg-cover w-52 h-96 m-10'></div>
      <div className='flex flex-col items-end justify-between m-10'>
        <div className='text-primaryThemeColor text-7xl text-right flex justify-end items-end w-[70%]'>THE PEARSHY COLLECTION</div>
        <button className='text-white text-xl p-2 rounded-lg shadow-sm shadow-slate-300 bg-primaryThemeColor w-40 h-10'>Buy Now</button>
      </div>

    </div>
  )
}

export default HeroSection