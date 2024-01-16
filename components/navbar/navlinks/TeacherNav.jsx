'use client'
import React, { useState } from 'react'
import NavLinks from './Links'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaAngleDown, FaAngleUp, FaAnglesDown, FaArrowDown, FaArrowDown19, FaArrowTrendDown, FaCartArrowDown, FaCircleDown, FaNotesMedical, FaTurnDown, FaUpDown } from 'react-icons/fa6';
function TeacherNav({ standard }) {
    const navlinks = NavLinks.staff;
    const crtpath = usePathname()
    const [addnotes, setaddNotes] = useState(false)
    return (
        <>
            {
                navlinks.map((item) => {
                    return <Link
                        href={item.path}
                        key={item.lable}
                        className={`text-gray-800 w-[90%] py-3 px-4 flex items-center gap-2 text-xl rounded-r-full ${(crtpath == item.path) ? "shadow-[1px_1px_0px_0px] shadow-gray-500/[.5] bg-white" : ""} `}
                    >
                        {item.icon}
                        <p className='text-sm'>
                            {item.lable}
                        </p>
                    </Link>
                })
            }
            <ul>
                <div className="flex items-center w-[90%] justify-between text-xl px-4 text-gray-800 gap-2 py-2">
                    <div className="flex gap-2">
                        <FaNotesMedical />
                        <h1 className='text-sm'>Notes</h1>
                    </div>
                    <div onClick={()=>setaddNotes(!addnotes)} className="">
                        {
                            addnotes ? <FaAngleUp className='text-sm' /> : <FaAngleDown className='text-sm' />
                        }
                    </div>
                </div>
                {
                    standard.map((item)=>{
                        return
                    })
                }
            </ul>
        </>
    )
}

export default TeacherNav