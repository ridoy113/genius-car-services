import React from 'react';

import expart1 from '../../../images/experts/expert-1.jpg';
import expart2 from '../../../images/experts/expert-2.jpg';
import expart3 from '../../../images/experts/expert-3.jpg';
import expart4 from '../../../images/experts/expert-4.jpg';
import expart5 from '../../../images/experts/expert-5.jpg';
import expart6 from '../../../images/experts/expert-6.png';
import Expart from '../Expart/Expart';

const experts = [
    { id: 1, name: 'C.Ronaldo', img: expart1 },
    { id: 2, name: 'Messi', img: expart2 },
    { id: 3, name: 'Naymer', img: expart3 },
    { id: 4, name: 'I.Ovich', img: expart4 },
    { id: 5, name: 'M.salah', img: expart5 },
    { id: 6, name: 'K.Mbappy', img: expart6 }
]

const Exparts = () => {
    return (
        <div className='container'>
            <h1 className='text-primary text-center mt-5'>Our Exparts</h1>
            <div className='row'>
                {
                    experts.map(expert => <Expart
                        key={expert.id}
                        expart={expert}
                    >
                    </Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;