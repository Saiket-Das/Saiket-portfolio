import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import './ProjectList.css'

const ProjectList = (props) => {
    const { name, img1, img2, img3, img4, img5, stack, liveSite, clientCode, serverCode, more } = props.project
    return (

        <div className='mb-10 mt-10'>
            {/* <div className='text-center service-card card-hover p-9'>
                <div className="card bg-base-100 shadow-xl"> */}

            {/* height:240px;width:320px;overflow:scroll; */}

            {/* ------------------------------------- */}
            {/* <div className=' shadow-lg'>
                        <div className='overflow-y-scroll h-56'>
                            <img src={img1} alt="img1" />
                            <br />
                            <img src={img2} alt="img1" />
                            <br />
                            <img src={img3} alt="img1" />
                            <br />
                            <img src={img4} alt="img1" />
                            <br />
                            <img src={img5} alt="img1" />
                        </div>
                    </div> */}
            {/* ------------------------------------- */}


            {/* <div className="">
                        <h2 className=" text-center font-semibold text-xl">{name}
                            <span className="text-sky-400/50 text-sm pt-1 px-3 italic">({stack})</span>
                        </h2> */}

            {/* <p>{description}</p> */}

            {/* <ol className='list-disc'>
                            <li>{more[0]}</li>
                        </ol> */}



            {/* CLIENT SIDE CODE  */}
            {/* <div className='grid grid-cols-3 gap-10'>
                            <div className='btn btn-sm btn-ghost hover:bg-gray-300'>
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
                            </div> */}

            {/* SERVER SIDE CODE  */}
            {/* <div className='btn btn-sm btn-ghost hover:bg-sky-100'>
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
            </div > */}


            <div className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm">
                <div className=' lg:shadow-sm shadow-xl m-7'>
                    <div className='overflow-y-scroll h-56'>
                        <img src={img1} alt="img1" />
                        <br />
                        <img src={img2} alt="img1" />
                        <br />
                        <img src={img3} alt="img1" />
                        <br />
                        <img src={img4} alt="img1" />
                        <br />
                        <img src={img5} alt="img1" />
                    </div>
                </div>

                <div className="p-6">
                    <h5 className="text-xl font-bold"> {name}
                        <span className="text-sky-400/50 text-sm pt-1 px-3 italic">({stack})</span>
                    </h5>

                    <p className="mt-2 text-sm text-gray-500">
                        <span className='font-bold'>Project overview: </span>
                        {more[0]}
                    </p>


                    <p className="mt-2 text-sm text-gray-500">
                        <span className='font-bold'>Technology used: </span>
                        {more[1]}
                    </p>

                    <div className='grid gird-cols-1 md:gird-cols-2 lg:grid-cols-2'>

                        <div className="inline-block pb-1 mt-4 font-medium text-blue-600 mx-auto lg:mx-0 md:mx-0" >
                            <a className='border-b border-blue-600' href={liveSite}> Live site</a>
                        </div>


                        <div className='flex justify-around'>
                            <div className="inline-block pb-1 mt-4 font-medium text-blue-600">
                                <a className='border-b border-blue-600' href={liveSite}> Client code</a>
                            </div>


                            <div className="inline-block pb-1 mt-4 font-medium text-blue-600 " >
                                <a className='border-b border-blue-600' href={liveSite}>Server code</a>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectList;