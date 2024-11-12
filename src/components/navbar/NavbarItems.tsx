"use client"
import React from 'react'
import { linksData } from './data'
import { usePathname } from 'next/navigation'
import Link from 'next/link';




const NavbarItems = () => {
    const pathname = usePathname();
  return (
        <div className='flex gap-6'>
            { linksData.map((link) => (
                <Link href={link.path} key={link.title} className={`${pathname === link.path && 'border-b-4 border-red-800'} text-white font-semibold text-lg transition-all hover:scale-95`}>{ link.title}</Link>
            ))}
        </div>
  )
}

export default NavbarItems