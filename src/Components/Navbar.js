import React from 'react'


export const Navbar = () => {
  return (
    <>
      <div className='flex justify-between p-4 z-[100] w-full '>
        <h3 className='text-red-700 text-4xl uppercase font-bold'>Netflix</h3>
        <div>
          <button className='text-white text-base pr-6 cursor-pointer'>Sign In</button>
          <button className='bg-red-500 text-base text-white px-5 py-2 rounded-md cursor-pointer'>Sign Up</button>
        </div>
      </div>
    </>
  )
}
