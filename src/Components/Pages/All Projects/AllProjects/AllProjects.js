import React, { useEffect, useState } from 'react';
import ProjectList from '../ProjectList/ProjectList';

const AllProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className='mx-auto py-5 lg:px-32'>
            <h2 className='text-3xl font-bold text-primary text-center mb-10'>MY ALL PROJECTS</h2>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-16'>
                {
                    projects.map(project =>
                        <ProjectList
                            key={project._id}
                            project={project}
                        ></ProjectList>)
                }
            </div>
        </div>
    );
};

export default AllProjects;