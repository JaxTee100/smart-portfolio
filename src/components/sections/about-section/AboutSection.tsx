import React from 'react'
import { MdPeople } from "react-icons/md";
import { IoRibbon } from "react-icons/io5";
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className='bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 flex flex-col items-center py-8  gap-4'>
      <p className='text-gray-400 text-md'>Get to know more</p>
      <h1 className='text-4xl text-white tracking-wider font-bold'>About Me</h1>
      <div className='flex flex-col lg:flex-row items-center justify-center lg:gap-8'>
        <div className='relative h-[400px] w-[400px] border bg-black  rounded-[3rem]'>
          <Image src='/toby.png' alt='abt-imag' fill className='object-contain' />
        </div>
        <div className='flex flex-col  md:w-1/2  items-center justify-center  '>
          <div className='flex flex-col lg:flex-row justify-center gap-[2rem] my-[2rem]   w-full'>
            <div className='border border-slate-700 text-center mx-4 flex flex-col flex-1 items-center  rounded-[1.5rem] p-[1.5rem] text-md text-white shadow-xl hover:bg-white hover:bg-opacity-20 transition duration-300'>
              <IoRibbon />
              <h3 className='tracking-widest'>Experience</h3>
              <p className='tracking-widest'>2+ years <br/> Fullstack Development</p>
            </div>
            <div className='border border-slate-700 text-center mx-4 flex flex-col flex-1 items-center  rounded-[1.5rem] p-[1.5rem] text-md text-white shadow-xl hover:bg-white hover:bg-opacity-20 transition duration-300'>
              <MdPeople />
              <h3 className='tracking-widest'>Education</h3>
              <p className='tracking-widest'>B.Sc. Engineering<br /> Electronic Engineering</p>
            </div>
          </div>
          <div className='text-white tracking-wide p-4'>
            <p className='text-center text-sm md:text-md lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Porro iure libero veniam quis, tempora voluptas nemo dicta dolorem 
              asperiores officiis quisquam officia suscipit impedit quo repudiandae 
              nobis dolor eius dignissimos?
            </p>
          </div>
  </div>
</div>

    </section>
  )
}

export default AboutSection