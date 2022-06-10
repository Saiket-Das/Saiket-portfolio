import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import './SocialLink.css'


const SocialLink = () => {
    return (
        <div className='bg-gray-100 p-16'>

            <div className='text-center'>
                <h2 className='uppercase text-3xl font-bold text-primary'>Follow us on social media</h2>
                <p className='text-base font-semibold uppercase mt-5 mb-10'>Get all the latest news</p>
            </div>

            <div className='container '>

                <div className='flex '>

                    <ul className="wrapper mx-auto">

                        {/* --------------- Github --------------- */}
                        <a href="https://github.com/Saiket-Das" target="_blank" rel="noopener noreferrer">
                            <li className="icon github">
                                <span className="tooltip">GitHub</span>
                                <span>  <FontAwesomeIcon icon={faGithub} /></span>
                            </li>
                        </a>

                        {/* --------------- LinkedIn --------------- */}
                        <a href="https://www.linkedin.com/in/saiket-das-3b2900229/" target="_blank" rel="noopener noreferrer">
                            <li className="icon linkedin">
                                <span className="tooltip">LinkedIn</span>
                                <span><FontAwesomeIcon icon={faLinkedin} /></span>
                            </li>
                        </a>

                        {/* --------------- Stack Overflow --------------- */}
                        <a href="https://stackoverflow.com/users/19033864/saiket-das" target="_blank" rel="noopener noreferrer">
                            <li className="icon stackoverflow">
                                <span className="tooltip">Stackoverflow</span>
                                <span><FontAwesomeIcon icon={faStackOverflow} /></span>
                            </li>
                        </a>

                    </ul>


                </div>
            </div>
        </div>
    );
};

export default SocialLink;
