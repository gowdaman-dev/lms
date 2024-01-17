import Link from 'next/link'
import React, { Children } from 'react'

function page() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="py-2 px-10 bg-[#F2F5F9] flex justify-between items-center">
        <h1 className='text-xl text-sky-600'>Edulearn</h1>
        <div className=" flex gap-4 items-center justify-center">
          <Link className='px-2 py-1 border rounded-[40px] transition-color easeinout duration-500 hover:bg-sky-300 hover:text-white font-light border-sky-400 text-gray-600' href={'/signup'}>Signup</Link>
          <Link className='px-2 py-1 border rounded-[40px] transition-color easeinout duration-500 hover:bg-sky-300 hover:text-white font-light border-sky-400  bg-sky-400 text-white' href={'/signin'}>SignIn</Link>
        </div>
      </div>
      <div className="homebg w-screen h-full">
        <div className="h-full w-full bg-sky-200/[.4] grid place-items-center">
          <div className="flex flex-col item-center justify-center">
            <p className='text-center text-xl text-red-500'>📚 Explore, Engage, Excel! 🚀</p>
            <h1 className='md:text-6xl text-4xl font-bold text-sky-400 tracking-widest text-center'>Welcome to Edulearn</h1>
            <p className='md:w-[700px] w-full px-10 text-center text-white'>At EduLearn, we believe in transforming education through technology. Our Learning Management System (LMS) is designed to empower schools, educators, and students by providing a seamless and interactive learning experience.</p>
          </div>
          <div className="flex gap-4">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default page