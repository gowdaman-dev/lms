'use client'
import React, { useState } from 'react'
import { FaBars, FaX } from "react-icons/fa6"
import UserNav from './UserNav'
import { AnimatePresence } from 'framer-motion'
function Navigator({ children }) {
    const [menu, setMenu] = useState(false)
    return (
        <div className='flex'>
            <div className="">
                <AnimatePresence mode='wait'>
                    {menu && <UserNav />}
                </AnimatePresence>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex px-4 py-4 bg-blue-50 w-full">
                    <div onClick={() => setMenu(!menu)} className="p-1 cursor-pointer">
                        {
                            menu ? <FaX className='text-2xl text-gray-800' /> : <FaBars className='text-2xl text-gray-800' />
                        }
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Navigator