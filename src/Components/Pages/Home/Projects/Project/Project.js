import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"


const Project = (props) => {
    const { name, description, img1, stack, liveSite, clientCode, serverCode } = props.project
    return (

        <div className=''>
            <div className='text-center service-card card-hover p-9'>
                <div className="card bg-base-100 shadow-xl">

                    <figure className='px-5 pt-5'>
                        <img className=' shadow-sm' src={img1} alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="lg:card-title text-center font-semibold text-xl">{name}
                            <span className="text-sky-400/50 text-sm pt-1 px-3 italic">{stack}</span>
                        </h2>

                        <p>{description}</p>



                        {/* LIVE WEBSITE LINK  */}
                        <div className='btn btn-sm btn-ghost w-40 mx-auto mt-3 hover:bg-red-100'>
                            <button className='text-base'>
                                <a href={liveSite} target='blank'>
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faCircle}
                                            className='text-red-500 px-1' />
                                    </span>
                                    Live site
                                </a>
                            </button>
                        </div>


                        {/* CLIENT SIDE CODE  */}
                        <div className='grid grid-cols-2 gap-10'>
                            <div className='btn btn-sm btn-ghost hover:bg-gray-300'>
                                <button className='text-base'>
                                    <a href={clientCode} target='blank'>
                                        <span>
                                            <FontAwesomeIcon
                                                icon={faGithub}
                                                className='text-black-500 px-2' />
                                        </span>
                                        Client
                                    </a>
                                </button>
                            </div>

                            {/* SERVER SIDE CODE  */}
                            <div className='btn btn-sm btn-ghost hover:bg-sky-100'>
                                <button className='text-base'>
                                    <a href={serverCode} target='blank'>
                                        <span>
                                            <FontAwesomeIcon
                                                icon={faGithub}
                                                className='text-black-500 px-1' />
                                        </span>
                                        Server
                                    </a>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Project;