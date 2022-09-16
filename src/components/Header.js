import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {

    const { token } = useSelector((store) => store.jwt)

    const menuDisplay = () => {
        if (!token) {
            return (
                <span>
                    <Link className='btn btn-light loginLink' to='/login'>Login</Link>
                    <Link className='btn btn-light loginLink' to='/register'>Register</Link>
                </span>
            )
        }
        else {
            return (
                <span>
                    <Link className='btn btn-light loginLink' to='/appointments'>Appointments</Link>
                    <Link className='btn btn-light loginLink' to='/pets'>Pets</Link>
                </span>
            )
        }
    }

    return (
        <div className='header-container'>
            <h1 className='display-1 header-title'>Critter Cuts <i className="fa-solid fa-paw"></i></h1>

            {menuDisplay()}
        </div>
    );
};

export default Header;