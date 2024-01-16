import React from 'react'
import NavLinks from './Links'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaRightFromBracket, FaRightToBracket } from 'react-icons/fa6';
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
                        className={`text-gray-800 w-[90%] py-3 px-4 flex items-center gap-2 text-xl rounded-r-full ${(crtpath == item.path)?"shadow-[1px_1px_0px_0px] shadow-gray-500/[.5] bg-white":""} `}
                    >
                        {item.icon}
                        <p className='text-sm'>
                            {item.lable}
                        </p>
                    </Link>
                })
            }
            <button className='px-4 text-xl text-red-400 flex items-center justify-start gap-2'><FaRightFromBracket/><p className='text-sm'>Logout</p></button>
        </>
    )
}

export default StudentNav