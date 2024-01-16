'use client'
import React, { useState } from 'react'
import NavLinks from './Links'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaAngleDown, FaAngleUp, FaAnglesDown, FaArrowDown, FaArrowDown19, FaArrowTrendDown, FaCartArrowDown, FaCircleDown, FaNotesMedical, FaRightFromBracket, FaTurnDown, FaUpDown } from 'react-icons/fa6';
import { motion } from 'framer-motion';
function TeacherNav({ standard }) {
    const navlinks = NavLinks.staff;
    const crtpath = usePathname()
    const [addnotes, setaddNotes] = useState(false)
    return (
        <div className='flex flex-col gap-2'>
            {
                navlinks.map((item) => {
                    return <Link
                        href={item.path}
                        key={item.lable}
                        className={`text-gray-800 w-[90%] py-3 px-4 flex items-center gap-2 text-xl rounded-r-full ${(crtpath == item.path) ? "shadow-[1px_1px_0px_0px] shadow-gray-500/[.5] bg-white" : ""} `}
                    >
                        {item.icon}
                        <p className='text-sm font-light'>
                            {item.lable}
                        </p>
                    </Link>
                })
            }
            <ul className={`${addnotes?'h-fit':'h-[30px]'} overflow-hidden `}>
                <div className={`flex items-center w-[90%] ${addnotes?'bg-white rounded-tr-[20px]':''} justify-between text-xl px-4 text-gray-800 gap-2 py-2`}>
                    <div className="flex gap-2">
                        <FaNotesMedical />
                        <h1 className='text-sm font-light'>Notes</h1>
                    </div>
                    <div onClick={() => setaddNotes(!addnotes)} className="">
                        {
                            addnotes ? <FaAngleUp className='text-sm' /> : <FaAngleDown className='text-sm font-light' />
                        }
                    </div>
                </div>
                <div className={`flex flex-col  gap-4 w-[90%] transition-all ease duration-500 px-12 rounded-br-[20px] bg-white overflow-hidden justify-bottom`}>
                    {
                        standard.map((item) => {
                            return (
                                <Link className='font-light text-blue-400' href={item.path + 'grade'}>{item.lable}</Link>
                            )
                        })
                    }
                </div>
            </ul>
            <button className='px-4 py-4 text-xl text-red-400 flex items-center justify-start gap-2'><FaRightFromBracket/><p className='text-sm'>Logout</p></button>
        </div>
    )
}

export default TeacherNav