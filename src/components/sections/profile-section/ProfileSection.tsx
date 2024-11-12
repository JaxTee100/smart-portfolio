"use client"
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'

const ProfileSection = () => {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 flex flex-col lg:flex-row items-center justify-center w-full h-screen  text-white gap-12">
        <div className="relative flex items-end justify-center h-[300px] w-[300px] rounded-full overflow-hidden border-4 border-gray-800 bg-gray-500 shadow-lg animate-fadeIn scale-up-center">
            <Image src="/toby.png" alt="Tobias's image" fill className="object-cover" />
        </div>
        
        <div className="flex flex-col items-center gap-4">
        
            <h1 className="text-lg md:text-xl text-gray-400 text-center font-medium h-[50px] tracking-widest">
                Hello,<br/>
                <Typewriter
                words={[' I am Tobias', 'I love to code']}
                loop={Infinity}
                cursor
                cursorStyle=''
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />
            </h1>
            
            <h1 className="text-2xl md:text-4xl text-center font-bold tracking-wider">Udeh Tochukwu Tobias</h1>
            <h3 className="text-xl md:text-2xl tracking-widest">Fullstack Developer</h3>
            <div className="flex gap-4 hover:space-x-8 transition-all h-[100px] py-4">
                <button className="flex items-center justify-center p-3 bg-slate-700 hover:bg-slate-600 rounded-md shadow-md transition-all hover:m-4 h-[50px]">Download CV</button>
                <button className="flex items-center justify-center p-3 bg-slate-800 hover:bg-slate-700 rounded-md shadow-md transition-all hover:m-4 h-[50px]">Contact Info</button>
            </div>
            <div className="flex gap-4">
                <Link href='https://github.com/JaxTee100'>
                 <FaGithub className='hover:animate-bounce text-white text-[30px] lg:text-[40px] cursor-pointer'/>
                </Link>
                <Link href='https://www.linkedin.com/in/classictee/'>
                 <FaLinkedin className='hover:animate-bounce text-white text-[30px] lg:text-[40px] cursor-pointer'/>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default ProfileSection