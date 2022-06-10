import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faGraduationCap, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

import myPhoto from '../../../Assets/person/My Photo.JPG'
import './About.css'



const About = () => {
    return (
        <div className="bg-gray-100">
            <div className="w-full text-white bg-main-color">
            </div >

            <div className="container mx-auto my-5 p-5">
                <div className="md:flex no-wrap md:-mx-2 ">


                    <div className="w-full md:w-3/12 md:mx-2">
                        <div className="bg-white p-3 border-t-4 border-green-400">

                            <div className="image overflow-hidden">
                                <img className="h-auto w-full mx-auto"
                                    src={myPhoto}
                                    alt="" />
                            </div>

                            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Saiket Das</h1>


                            <h3 className="text-slate-700 font-lg text-semibold leading-6">Junior Web Developer</h3>
                            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                                Hi. I'm Saiket Das. Currently studying Diploma in Infomration Technology at Unitar International University.
                            </p>
                        </div>

                    </div>




                    {/* <!-- PROFILE and ABOUT Section*/}
                    <div className="w-full md:w-9/12 h-64 lg:mt-5 lg:pt-2">

                        <div className="bg-white p-3 shadow-sm rounded-sm">
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span clas="text-green-500">
                                    <FontAwesomeIcon
                                        icon={faUser} />
                                </span>
                                <span className="tracking-wide">About me</span>
                            </div>
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-2 text-sm">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-bold">First Name</div>
                                        <div className="px-4 py-2">Saiket </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-bold">Last Name</div>
                                        <div className="px-4 py-2">Das</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-bold">Gender</div>
                                        <div className="px-4 py-2">Male</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-bold">Contact No.</div>
                                        <div className="px-4 py-2">+60 1156262784</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-bold">Current Address</div>
                                        <div className="px-4 py-2">Kelana Jaya, Petaling Jaya, Malaysia</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-bold">Permanant Address</div>
                                        <div className="px-4 py-2">Gulshan, Dhaka, Bangladesh - 1212</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-bold">Email</div>
                                        <div className="px-4 py-2">
                                            <a className="text-blue-800" href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="blank">saiketdas02@gmail.com</a>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-bold">Birthday</div>
                                        <div className="px-4 py-2">Jan 31, 2002</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="my-5"></div>




                        {/* <!-- SKILLS and EDUCATION --> */}
                        <div className="bg-white p-3 shadow-sm rounded-sm">

                            <div className="grid grid-cols-2">

                                {/* SKILLS  */}
                                <div>

                                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                        <span clas="text-green-500">
                                            <span clas="text-green-500">
                                                <FontAwesomeIcon
                                                    icon={faLaptopCode} />
                                            </span>
                                        </span>
                                        <span className="tracking-wide">Technical Skills</span>
                                    </div>


                                    <ul className="list-inside space-y-2">

                                        <li>
                                            <div className="text-teal-600">Comfortable</div>
                                            <div
                                                className="text-gray-500 text-xs">
                                                JavaScript, React, React Router, Tailwind, Bootstrap, HTML5, CSS3
                                            </div>
                                        </li>


                                        <li>
                                            <div className="text-teal-600">Fimilar</div>
                                            <div
                                                className="text-gray-500 text-xs">
                                                Node.js, Express.js, MongoDB, React Query, Figma, Axios, Stripe
                                            </div>
                                        </li>


                                        <li>
                                            <div className="text-teal-600">Tools</div>
                                            <div className="text-gray-500 text-xs">Git, GitHub, Firebase, Heroku, Netlify, VS Code, Chrome-dev-tools</div>
                                        </li>

                                        <li>
                                            <div className="text-teal-600">Others</div>
                                            <div
                                                className="text-gray-500 text-xs">
                                                DaisyUI, JWT Token, React Hooks Form, Rest API, React Toastify
                                            </div>
                                        </li>

                                    </ul>

                                </div>



                                {/* EDUCATION  */}
                                <div>
                                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                        <span clas="text-green-500">
                                            <span clas="text-green-500">
                                                <FontAwesomeIcon
                                                    icon={faGraduationCap} />
                                            </span>
                                        </span>
                                        <span className="tracking-wide">Education</span>
                                    </div>

                                    <ul className="list-inside space-y-2">

                                        <li>
                                            <div
                                                className="text-teal-600">
                                                Diploma in Information Technology
                                            </div>

                                            <div
                                                className=" text-sm">
                                                Unitar Int. University, Malaysia
                                            </div>
                                            <div
                                                className="text-gray-500 text-xs">
                                                Oct 2019 - Present
                                            </div>

                                        </li>

                                        <li>
                                            <div
                                                className="text-teal-600">
                                                Secondary School Certificate
                                            </div>

                                            <div
                                                className=" text-sm">
                                                Solmaid High School, Bangladesh
                                            </div>

                                            <div
                                                className="text-gray-500 text-xs">
                                                2018
                                            </div>
                                        </li>

                                    </ul>

                                </div>

                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;