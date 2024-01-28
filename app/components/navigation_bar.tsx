import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const NavigationBar = () => {
  return (
    <div className='w-full h-24 flex flex-row justify-between'>
      <div className='flex flex-row items-center'>
        <div className='h-24 w-24 rounded-full bg-cover bg-logo'></div>
        <div>Pearshy</div>
      </div>
      <div className='flex flex-row items-center justify-between'>
        <div className='bg-primaryThemeColor hover:bg-white hover:text-primaryThemeColor rounded-lg m-5 w-24 h-10 flex justify-center items-center text-white'>Home</div>

      </div>
      <div className='flex flex-row items-center justify-between'>
        <FontAwesomeIcon icon={faCartArrowDown} className='w-8 h-8 m-2' />
        <div>Hello World</div>
    
        <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} className='w-12 h-12 p-2 m-2 bg-primaryThemeColor rounded-full' />
      </div>


    </div>
  )
}

export default NavigationBar
