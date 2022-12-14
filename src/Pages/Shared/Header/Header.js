import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
            logOut()
            .then(() => {
                toast.success('Successfully LogOut!');
            })
            .catch(error => {
                console.error(error)
            })
    }

    const menuItems = <>
        <li className='font-semibold'><Link className='mr-5' to='/'>Home</Link></li>
        <li className='font-semibold'><Link className='mr-5' to='/blog'>Blog</Link></li>

        {
            user?.uid ?
                <>
                    <li className='font-semibold mr-5'><Link to='/review'>My Review</Link></li>
                    <li className='font-semibold mr-5'><Link to='/foodAdd'>Add Services</Link></li>
                    <li onClick={handleSignOut} className='font-semibold '><  Link className='mr-5'>logOut</Link></li>
                </>
                :
                <>
                    <li className='font-semibold'><Link className='mr-5' to='/login'>Login</Link></li>
                    <li className='font-semibold'><Link className='mr-5' to='/register'>Register</Link></li>
                </>
        }
    </>
    return (
        <div>
            <div className="navbar flex justify-between h-20 mb-12 pt-12 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {menuItems}

                        </ul>
                    </div>
                    <div>
                        <Link to='/' className=" text-xl font-bold">Home Made Food Service</Link>
                        <img src='' alt="" />
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 ">

                        {menuItems}

                    </ul>
                </div>
                <div>
                </div>
                {
                    user?.uid ?
                        <div className="navbar-end grid">
                            <div>
                                <img className='rounded-full w-16 h-16 mr-5' src={user?.photoURL} alt="" />
                            </div>
                            <div>
                                <p>{user?.displayName}</p>
                            </div>
                        </div>
                        :
                        <FaUser></FaUser>
                }

            </div>
        </div>
    );
};

export default Header;