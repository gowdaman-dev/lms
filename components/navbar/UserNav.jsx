'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaClipboard, FaUser } from 'react-icons/fa6'
import NavList from './NavList'
function UserNav() {
  const userLinks = [
    {
      icon:<FaClipboard/>,
      title:'Dashboard',
      path:"/dashboard"
    },
    {
      icon:<FaUser/>,
      title:'Account',
      path:"/accounts"
    },
  ]
  return (
    <motion.div initial={{ width: 0 }} animate={{ width: '' }} exit={{ width: 0 }} transition={{ duration: .5, ease: "linear" }} className=' flex justify-end h-screen overflow-hidden'>
      <div className="min-w-[300px] h-full flex flex-col  bg-[#F2F5F9] border border-l ">
        <h1 className='px-5 w-full py-5 text-xl text-[#009CFF] tracking-wide font-bold'>#EDULEARN</h1>
        <div className="flex flex-col">
          <div className="w-full bg-white px-5 flex flex-col">
            <div className="flex gap-2 items-center py-2">
              <Image src={'data:image/jpeg;base64,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'} height={50} width={50} className='rounded-full' />
<<<<<<< HEAD
              <h1 className='text-gray-900 text-xl'><b>Uchiha Itachi
                </b></h1>
=======
              <div className="flex flex-col">
                <h1 className='text-gray-900 font-light'>Naruto uzumaki</h1>
                <p className='text-[12px] font-thin'>Student</p>
              </div>
>>>>>>> e2ce663 (new1)
            </div>
          </div>
            <div className="flex flex-col gap-4 py-8">
              <NavList navlinks = {userLinks}/>
            </div>
        </div>
      </div>
    </motion.div>
  )
}

export default UserNav