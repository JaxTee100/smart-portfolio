"use client"
import React, { useState } from 'react'
import { linksData } from './data'
import Link from 'next/link'
import { IoMdMenu } from "react-icons/io";

const MobileNavbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const openMenuBar = () => {
        setOpenMenu(prev => !prev)
    }
  return (
    <div className='relative'>
        <div className='' onClick={openMenuBar}>
            <IoMdMenu className='text-white text-3xl' />
        </div>
        
            <div 
                className={`absolute bg-slate-900 w-[380px] right-0 top-14 z-2 p-4 flex 
                    flex-col space-y-2 ${openMenu ? 'mt-0' : 'mt-[-1000px]'} transition-all duration-[2000ms]`}>
                {linksData.map((link) => (
                <Link href={link.path} key={link.title} onClick={() => setOpenMenu(false)} className='w-full text-white hover:bg-slate-950 rounded-md '> {link.title}</Link>
             ))}
            </div>
            
        
    </div>
  )
}

export default MobileNavbar