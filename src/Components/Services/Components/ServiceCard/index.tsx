import React from 'react'
import './index.css';
const ServiceCard = (props : {icon: string, title: string}) => {
    return (
        <div className="service-card">
            <span className="icon">{props.icon}</span>
            <span className="content">{props.title}</span>
        </div>
    )
}


export default ServiceCard