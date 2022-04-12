import './Service.css'
import React from 'react';

const Service = ({service}) => {
    const {price,name,img,description} = service
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>Car Name: {name}</h2>
            <p>{price}</p>
            <p><small>{description}</small></p>
            <button>Book : {name}</button>
        </div>
    );
};

export default Service;