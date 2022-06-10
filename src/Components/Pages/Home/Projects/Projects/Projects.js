import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Project from '../Project/Project';


const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className='mx-auto py-5 lg:px-32'>
            <div className='mt-20'>
                <h2 className='text-4xl font-bold text-center mb-12'>My <span className='text-primary'>Projects</span></h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16'>
                {
                    projects.map(project =>
                        <Project
                            key={project._id}
                            project={project}
                        ></Project>)
                }
            </div>


            <div className='flex justify-center mt-12'>
                <Link to='/projects'>
                    <button className="btn btn-primary w-60">
                        Explore more
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Projects;