import React from 'react'

const NavigationBar = () => {
  return (
    <div className='w-full h-24 p-3 flex flex-row justify-between'>
      <div className='flex flex-row items-center'>
        <div className='bg-black h-16 w-16 rounded-full'></div>
        <div className='p-5'>Pearshy</div>
      </div>
      <div className='flex flex-row items-center justify-between'>
        <div className='bg-primaryThemeColor hover:bg-white hover:text-primaryThemeColor p-3 rounded-lg m-5 text-white'>tab 1</div>
        <div className='bg-primaryThemeColor p-3 rounded-lg m-5 text-white'>tab 1</div>
        <div className='bg-primaryThemeColor p-3 rounded-lg m-5 text-white'>tab 1</div>
        <div className='bg-primaryThemeColor p-3 rounded-lg m-5 text-white'>tab 1</div>
        <div className='bg-primaryThemeColor p-3 rounded-lg m-5 text-white'>tab 1</div>
      </div>
      <div className='flex flex-row items-center justify-between'>
        <div className='bg-black h-16 w-16 rounded-full'></div>
        <div className='bg-black h-16 w-16 rounded-full'></div>
        <div className='bg-black h-16 w-16 rounded-full'></div>
      </div>


    </div>
  )
}

export default NavigationBar
