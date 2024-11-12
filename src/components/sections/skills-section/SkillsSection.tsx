import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { backend, frontend } from './skillsData';

const SkillsSection = () => {
  return (
    <section className='bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 flex flex-col items-center mt-8 gap-[1rem] py-8 '>
      <h3 className='text-gray-400 text-md tracking-wider '>Check Out</h3>
      <h1 className='text-4xl text-white font-bold tracking-widest'>My Skills</h1>
      <div className='flex flex-col lg:flex-row justify-center gap-[3rem] w-full  '>
        <div className='flex flex-col gap-4'>
          <h1 className='text-center text-lg text-white tracking-widest font-semibold'>Frontend</h1>
          <div className='border border-slate-700 grid grid-cols-1 md:grid-cols-2 gap-x-[1rem] lg:gap-x-[4rem] gap-y-[1rem] px-12 py-8 rounded-2xl shadow-2xl '>
            {
              frontend.map(skill => (
                <div className='flex space-x-[1rem] hover:bg-white hover:bg-opacity-20 transition duration-300 p-2 rounded-md items-start' key={skill.skillName}>
                  <FaCheckCircle className='text-xl'/>
                  <div >
                    <p className='text-white tracking-widest font- semibold'>{skill.skillName}</p>
                    <span className='text-sm text-gray-500'>{skill.level}</span>
                  </div>
                  
                </div>
                
              ))
            }
          </div>
          
        </div>
        <div className='flex flex-col gap-4'>
            <h1 className='text-center text-lg text-white tracking-widest font-semibold'>Backend</h1>
            <div className='w-full border border-slate-700 grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[1rem] px-12 py-8 rounded-2xl shadow-2xl'>
              {
                backend.map(skill => (
                  <div className='flex space-x-[1rem] hover:bg-white hover:bg-opacity-20 transition duration-300 p-2 rounded-md items-start ' key={skill.skillName}>
                    <FaCheckCircle />
                    <div >  
                      <p className='text-white tracking-widest font-semibold'>{skill.skillName}</p>
                      <span className='text-sm text-gray-500'>{skill.level}</span>
                    </div>
                    
                  </div>
                ))
              }
            </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection