import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    return (
        <div className=''>
            <div className="navbar mx-auto py-5 lg:px-32">

                <div className="navbar-start">
                    <div className="navbar bg-base-100 hidden lg:flex">
                        <Link to='/' className="btn btn-ghost normal-case text-xl">Saiket Das</Link>
                    </div>
                    {/* --------------- Phone --------------- */}
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li > <Link to='/blogs'>Blogs</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='#contact'>Contact</Link></li>
                        </ul>
                    </div>

                    {/* --------------- Logo --------------- */}
                    <Link to='' className="btn btn-ghost normal-case text-xl">
                        <img className='w-32' src='//' alt="" />
                    </Link>

                </div>

                {/* --------------- Deskstop --------------- */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li ><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='#contact'>Contact</Link></li>
                    </ul>
                </div>





                <div className="navbar-end hidden lg:flex">
                    <Link to='/login' className="btn btn-primary px-11 btn-ghost">Login</Link>
                </div>

                <div className="navbar-end lg:hidden mx-5">
                    <h2 className='text-xl font-semibold'>Saiket Das</h2>
                </div>


            </div>



        </div >
    );
};

export default Header;