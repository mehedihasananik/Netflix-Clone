import React from 'react'


export const Navbar = () => {
  return (
    <div className='relative container mx-auto'>
      <div className='w-[100%] flex justify-between p-4 z-[100]  absolute' >
        <div>
          <h3 className='text-[#E50914] text-4xl uppercase font-bold'>Netflix</h3>
        </div>
        <div>
          <button className='text-white text-base pr-6 cursor-pointer'>Sign In</button>
          <button className='bg-red-600 text-base text-white px-5 py-2 rounded-md cursor-pointer'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}
