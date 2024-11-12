import React from 'react'
import { projects } from './projects'
import ProjectsCard from './ProjectsCard'

const FeaturedProjects = () => {
  return (
    <section className='flex flex-col gap-[1rem] p-4  items-center'>
      <h3 className='text-center text-gray-500 text-md'>Browse through</h3>
      <h1 className='text-center text-white text-xl tracking-wider '>MY PROJECTS</h1>
      <div className='flex flex-col md:flex-row items-center justify-center gap-[2rem] flex-wrap'>
        {
          projects.map(project =>(
            <ProjectsCard title={project.title} key={project.id}/>
          ))
        }
      </div>
    </section>
  )
}

export default FeaturedProjects