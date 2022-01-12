import React, { useState } from 'react'

const WeDo = ({ whatWeDoSection }) => {
    const [seeAll, setSeeAll] = useState(false);
    return (
        <div className="container">
            <div className="we-do pt-5">
                <h4 className='text-start text-capitalize'>What we do</h4>
                <div className='wedo-description mt-4'>
                    <p className='text-start'>{whatWeDoSection.description}</p>
                </div>

                {whatWeDoSection && whatWeDoSection.information.map((info, index) => {
                    if (index < 2) {
                        return (
                            <div className='wedo-section mt-5 mb-3'>
                                <div className="row wedo-row">
                                    <div className="col-md-3 wedo-col border-end">
                                        <div className="wedo-container p-3">
                                            <div className="wedo-title">
                                                <h4 className="text-start mobile-text">{info.technology_name}</h4>
                                            </div>
                                            <div className="learn-more  justify-content-start">
                                                <a href="#" className="learn-btn">Learn More</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-9 wedo-col ">
                                        <div className="wedo-content-container p-3 ">
                                            <div className="we-do-title">
                                                <h5 className='text-start'>{info.technology_title}</h5>
                                            </div>
                                            <div className="wedo-content mt-3">
                                                <p className="text-start">{info.technology_description}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                })}
                {seeAll === false &&
                    <p className='se-all text-end' onClick={() => setSeeAll(true)}>See All</p>
                }


                {seeAll && whatWeDoSection && whatWeDoSection.information.map((info, index) => {
                    if (index > 1) {
                        return (
                            <div className='wedo-section mt-5 mb-3'>
                                <div className="row wedo-row">
                                    <div className="col-md-3 wedo-col border-end">
                                        <div className="wedo-container p-3">
                                            <div className="wedo-title">
                                                <h4 className="text-start mobile-text">{info.technology_name}</h4>
                                            </div>
                                            <div className="learn-more  justify-content-start">
                                                <a href="#" className="learn-btn">Learn More</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-9 wedo-col ">
                                        <div className="wedo-content-container p-3 ">
                                            <div className="we-do-title">
                                                <h5 className='text-start'>{info.technology_title}</h5>
                                            </div>
                                            <div className="wedo-content mt-3">
                                                <p className="text-start">{info.technology_description}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                })}
            </div>

        </div>
    )
}
export default WeDo;