import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
function NavList(props) {
    const [navlist, setNavlist] = useState(props.navlinks)
    const userpath = usePathname();
    return (
        <>
            {
                navlist.map((items) =>{
                    return<>{
                        (userpath == items.path)?
                        <Link className='px-5 py-4 text-sm flex gap-4 items-center bg-white w-[95%] rounded-r-full shadow-[2px_2px_0px_0px_var(--midgray)]' href={items.path}key={items.title}>{items.icon}{items.title}</Link>:
                        <Link className='px-5 py-4 text-sm flex gap-4 items-center w-[95%] rounded-r-full' href={items.path}key={items.title}>{items.icon}{items.title}</Link>
                    }</>
                })
            }
        </>
    )
}

export default NavList