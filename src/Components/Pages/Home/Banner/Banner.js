import React from 'react';
import myPhoto from '../../../../Assets/person/person-1.png';
import myResume from '../../../../Assets/Saiket Das.pdf'

import './Banner.css'


const Banner = () => {




    return (
        <div className='mx-auto py-5 lg:px-32'>

            <div className='lg:flex items-center justify-center gap-40 p-6'>



                <div className='card-body '>
                    <div className="hi-typing mx-auto">
                        <h1>Hi, my name is</h1>
                    </div>


                    <div className="my-name mx-auto"  >
                        Saiket Das
                    </div>

                    <p className='text-center mb-5'>Mern Stack Web Developer // Photographer // Traveler</p>

                    <div className="card-actions justify-center">
                        <button className='btn  download-btn'>
                            <a href={myResume} download> My Resume</a>
                        </button>
                    </div>

                </div>



                <figure>
                    <img className='w-96 mx-auto lg:mx-none' src={myPhoto} alt="Album" />
                </figure>

            </div>



        </div >
    );
};

export default Banner;