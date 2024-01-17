import React from 'react'
import NavLinks from './Links'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { InlineIcon } from '@iconify/react';
function StudentNav() {
    const navlinks = NavLinks.student;
    const crtpath = usePathname()
    return (
        <>
            {
                navlinks.map((item) => {
                    return <Link
                        href={item.path}
                        key={item.lable}
                        className={`text-gray-800 w-[90%] py-3 px-4 flex items-center gap-2 text-xl rounded-lg ${(crtpath == item.path)?"bg-white":""} `}
                    >
                        {item.icon}
                        <p className='text-sm font-light'>
                            {item.lable}
                        </p>
                    </Link>
                })
            }
            <button className='text-red-600 w-[90%] py-3 px-5 flex items-center gap-2 text-xl rounded-lg'><InlineIcon icon='solar:logout-2-outline' className='rotate-180' height="25" width="25"/><p className='text-sm font-light'>Logout</p></button>
        </>
    )
}

export default StudentNav