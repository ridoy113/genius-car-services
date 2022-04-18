import React from 'react';
import notfound from '../../../images/sleeping.jpg'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-primary text-center'> Expert Is Sleeping...</h1>
            <img className='w-100' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;