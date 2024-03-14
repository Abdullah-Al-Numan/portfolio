import React from 'react'
import ProjectCard from './ProjectCard'
import { PROJECTS_CARD } from '@/data/projects'

const Project = () => {
    return (
        <section id='projects' className="mx-auto mb-20 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
            <div className="mx-auto max-w-7xl">
                <h1 className="text-3xl font-semibold md:text-4xl">Projects</h1>
                <div className="my-2">
                    <span>
                        Here are some of the projects I&apos;d like to share
                    </span>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
                    {PROJECTS_CARD.map((card, index) => (
                        <ProjectCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project
