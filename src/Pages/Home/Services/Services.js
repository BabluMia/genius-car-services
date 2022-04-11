import './Services.css'
import React from 'react';
import repair from '../../../img/repair.png'
const services = [
    {id:1,name:"oil change",price:100,description:"...",img:repair}
]

const Services = () => {
    return (
        <div>
            <h1>Services:</h1>
            <img src={repair} alt="" />
        </div>
    );
};

export default Services;