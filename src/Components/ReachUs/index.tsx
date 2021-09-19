import React from 'react'
import './index.css'
import { FacebookFilled } from '@ant-design/icons';




const ReachUs = () => {

    return (
            <div className="reach-us-container" id="reach-us">
                <div className="reach-us container">
                    <div className="reach-us-header">
                    <h1>Hey There</h1>
                    <p>Let's get in touch</p>
                    </div>
                    <div className="reach-us-links">
                        <p>
                            Order or Dine at <a href="https://zomato.com/lucknow/the-diners-chowk"  >Zomato</a>
                        </p>
                        <p>
                            Call us at <a href="tel:919129860550">+919129860550</a>
                        </p>
                        <p>
                            Follow us on <a href="https://www.facebook.com/thedinersrestaurant" >Facebook</a>
                        </p>
                    </div>
                </div>
                <div className="map-container">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.092345958407!2d80.90471431504398!3d26.868806983146538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdfb2a6d8943%3A0xd982ceb694b6b463!2sThe%20Diners!5e0!3m2!1sen!2sin!4v1632058718546!5m2!1sen!2sin"  
                className="map"
                loading="lazy"></iframe>
                </div>
            </div>
    )
}


export default ReachUs