import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img className='' src={logo}></img>
            <p className=' text-accent mt-2 text-lg'>Journalism Without Fear or Favour</p>

            <p className='text-md text-accent font-medium '>
                {format(new Date(), "EEEE , MMMM MM yyyy")}
            </p>
        </div>
    );
};

export default Header;