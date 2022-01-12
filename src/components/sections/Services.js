import React, { Fragment } from 'react'
import Service1 from '../../assets/images/service-1.png';
import Service2 from '../../assets/images/service-2.png';
import Service3 from '../../assets/images/service-3.png';
import Service4 from '../../assets/images/service-4.png';
const image = [Service1, Service2, Service3, Service4]
const buttonColor = [1, 2, 3, 4]

const Services = ({ serviceSection }) => {
    return (
        <div className="container">
            <div className="we-do pt-5">
                <h4 className='text-start text-capitalize mobile-text'>Our <b>Services</b></h4>

                <div className="service-column mt-5 mb-5 ">
                    <div className="row">
                        {serviceSection && serviceSection.serviceInfo.map((serv, index) => {
                            return (
                                <Fragment>
                                    <div className="col-md-3 p-4 service-col" key={serv.title}>
                                        <div className="service-icon">
                                            <img src={image[index]} className='' />
                                        </div>
                                        <div className="service-content p-3">
                                            <h5 className='text-center'>{serv.title}</h5>
                                        </div>
                                        <div className="service-content">
                                            <p className='text-center'>{serv.description}</p>
                                        </div>
                                        <div className="service-btn p-2">
                                            <button className={`service-btn-${buttonColor[index]} serice-btn-text`}>Learn More</button>
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        })}


                    </div>
                </div>
            </div>
        </div >
    )
}
export default Services;