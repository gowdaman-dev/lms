'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import StudentNav from './navlinks/StudentNav'
import {FaOutdent, FaRightFromBracket } from 'react-icons/fa6'
import TeacherNav from './navlinks/TeacherNav'

const standard = [
    {
        lable:'1st standard',
        path:'grade1'
    },
    {
        lable:'2nd standard',
        path:'grade2'
    },
]

function Navigator({ role }) {
    return (
        <div className='w-[300px] bg-blue-50 h-screen border-r'>
            <h1 className='w-full text-center py-2 text-xl text-blue-400 font-bold tracking-widest uppercase'>Edulearn</h1>
            <div className="flex gap-4 bg-white w-full py-4 p-4">
                <Image src={'data:image/jpeg;base64,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'}
                    height={40}
                    width={40}
                    className='rounded-full'
                />
                <div className="flex flex-col">
                    <h1 className='text-gray-800 font-light'>Gowdaman P</h1>
                    <p className='text-[12px] font-light text-gray-800'>Student</p>
                </div>
            </div>
            <div className="flex flex-col py-4">
                <TeacherNav standard={standard}/>
                <button className='flex items-center px-4 text-xl py-2 gap-2 text-red-700'><FaRightFromBracket/><p className='text-sm'>Logout</p></button>
            </div>
        </div>
    )
}

export default Navigator