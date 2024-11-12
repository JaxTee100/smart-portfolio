import Link from 'next/link';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className='flex justify-between items-center border-2 bg-slate-950 p-2 lg:px-4 lg:py-4'>
        <div className='flex gap-4 lg:gap-12'>
          <Link href='/'>
            <FaGithub className='hover:animate-bounce text-white lg:text-[50px] cursor-pointer'/>
          </Link>
          <Link href='/'>
            <FaLinkedin className='hover:animate-bounce text-white lg:text-[50px] cursor-pointer'/>
          </Link>
          <Link href='/'>
            <FaXTwitter className='hover:animate-bounce text-white lg:text-[50px] cursor-pointer'/>
          </Link>
          <Link href='/'>
            <SiGmail className='hover:animate-bounce text-white lg:text-[50px] cursor-pointer' />
          </Link>   
      </div>
      <div className='text-white underline lg:text-[16px] hover:animate-pulse cursor-pointer'>
        T: <span>+2349032027443</span>
      </div>
      
    </div>
  )
}

export default Footer