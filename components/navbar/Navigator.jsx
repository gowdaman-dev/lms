'use client'
import React, { useState } from 'react'
import { FaBars, FaX } from "react-icons/fa6"
import UserNav from './UserNav'
import { AnimatePresence } from 'framer-motion'
function Navigator({ children }) {
    const [menu, setMenu] = useState(false)
    return (
        <div className='flex h-full w-full'>
            <div className="">
                <AnimatePresence mode='wait'>
                    {menu && <UserNav />}
                </AnimatePresence>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex p-2 bg-[#F2F5F9]  w-full">
                    <div onClick={() => setMenu(!menu)} className="p-1 cursor-pointer">
                        {
                            menu ? <FaX className='text-2xl text-[#009CFF]' /> : <FaBars className='text-2xl text-[#009CFF]' />
                        }
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Navigator