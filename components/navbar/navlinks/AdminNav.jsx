import React, { useState } from 'react'
import NavLinks from './Links'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { InlineIcon } from '@iconify/react';
function AdminNav({standard}) {
    const navlinks = NavLinks.admin;
    const crtpath = usePathname()
    const [notes , setNotes] = useState(false)
    return (
        <>
            {
                navlinks.map((item) => {
                    return <Link
                        href={item.path}
                        key={item.lable}
                        className={`text-gray-800 w-[90%] py-3 px-4 flex items-center gap-2 text-xl rounded-lg ${(crtpath == item.path) ? "bg-white" : ""} `}
                    >
                        {item.icon}
                        <p className='text-sm font-light'>
                            {item.lable}
                        </p>
                    </Link>
                })
            }
            <div onClick={()=>setNotes(!notes)} className={`w-[90%] cursor-pointer rounded-lg overflow-hidden transition-all ease duration-500 ${notes?'h-fit bg-white':'h-[49px] bg-transparent'}`}>
                <div className="flex justify-between items-center">
                    <div className="text-gray-800 py-3 px-4 flex items-center gap-2 text-xl">
                        <InlineIcon icon="solar:notes-minimalistic-line-duotone" height="25" width="25" />
                        <p className='text-sm font-light'>Notes</p>
                    </div>
                    <div className="px-2">
                        <InlineIcon icon="formkit:down" className='rotate-0' height="20" width="20" />
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-[12px] font-light px-10 py-4">
                    {
                        standard.map((cls)=>{
                            return <Link href={"/notes/"+cls.path+'grade'} className={(crtpath == `/notes/${cls.path}grade`)?"text-sky-600":"text-gray-800"}>{cls.lable}</Link>
                        })
                    }
                </div>
            </div>
            <button className='text-red-600 w-[90%] py-3 px-5 flex items-center gap-2 text-xl rounded-lg'><InlineIcon icon='solar:logout-2-outline' className='rotate-180' height="25" width="25" /><p className='text-sm font-light'>Logout</p></button>
        </>
    )
}

export default AdminNav