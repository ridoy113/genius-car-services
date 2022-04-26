import React, { useEffect, useState } from 'react';
import Service from '../service/Service';
import './Services.css'


const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://stark-hollows-04141.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div id='services' className='container'>
            <div className="row">
                <h1 className='services-title mt-5'>Oue services</h1>
                <div className="services-container">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;