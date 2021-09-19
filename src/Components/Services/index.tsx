import React from 'react'
import './index.css'
import Chef from '../../Assets/Images/Chef.jpeg'
import SaladFloat from '../../Assets/Images/SaladFloat.png'
import ServiceCard from './Components/ServiceCard'



const ServiceList = [
    {title: 'Home Delivery', icon: '🥡'},
    {title: 'Party arrangements', icon : '🎉'},
    {title: 'Pre-Reservation',icon: '🍽'},
    {title: 'Organised Foodie Place', icon:'🍱'}
]
const Services = () => {

    let serviceList = ServiceList.map(services => <ServiceCard icon={services.icon} title={services.title} />);
    return (
        <div className="services">
            <div className="container hero-content-box">
                <div className="hero-content-img-container service-content-img-container ">
                            <img src={Chef} className="chef-img"/>
                            <img src={SaladFloat} className="floating-img"/>
                </div>
                <div className="hero-content services-content">
                <h1>We are more than multiple service</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magni consectetur, debitis possimus culpa blanditiis dolore perferendis quam consequatur, 
                    libero quo eius quia. Molestias quaerat necessitatibus voluptatum minima culpa facilis.
                </p>
                <div className="service-grid">
                    {serviceList}
                </div>
                </div>
            </div>
        </div>
    )
}


export default Services