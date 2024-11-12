import Image from 'next/image'


interface ProjectsCardProps {
    title: string;
  }

const ProjectsCard = ({title}: {title: string}) => {
  return (
    <div className='flex flex-col border border-slate-700 px-10 py-8 gap-[1rem] rounded-xl shadow-xl hover:bg-slate-200 hover:bg-opacity-20 transition duration-300 '>
        <div className='image relative h-[300px] w-[300px] rounded-xl  overflow-hidden hover:scale transition-all duration-300'>
            <Image src='/thread-app.webp' alt='project-image' className='object-cover' fill />
        </div>
        <p className='text-center font-semibold text-lg text-white'>{title}</p>  
        <div className='flex items-center justify-center gap-[1rem]'>
            <div className='border rounded-3xl p-3 flex items-center justify-center text-white text-sm w-[100px] hover:bg-white hover:bg-opacity-20 transition duration-300 cursor-pointer'>GitHub</div>
            <div className='border rounded-3xl p-3 flex items-center justify-center text-white text-sm w-[100px] hover:bg-white hover:bg-opacity-20 transition duration-300 cursor-pointer'>Link</div>
        </div>      
    </div>
  )
}

export default ProjectsCard