import React, { Fragment } from 'react';
import Mission from '../../assets/images/mission.png';
import Ethos from '../../assets/images/ethos.png';

const OurMission = ({ missionSection }) => {
    return (
        <Fragment>
            <div className="container d-flex justify-content-center">
                <div className="mission-section">
                    <div className="row mission-row">
                        <div className="col-md-3 col-12 mission-col border-end">
                            <div className="mission-container">
                                <div className="mission-title">
                                    <h4 className="text-start">Our <b>Mission & Ethos</b></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mission-col border-end" id="Mission">
                            <div className="mission-container mt-2">
                                <div className="mission-image-title d-flex mb-2">
                                    <img src={Mission} className="me-3" /><h5 className='text-mission mt-1'>{missionSection.mission.section_name}</h5>
                                </div>
                                <div className="mission-content">
                                    <p className="text-start">{missionSection.mission.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 mission-col" id="Ethos">
                            <div className="mission-container mt-2">
                                <div className="mission-image-title d-flex mb-2">
                                    <img src={Ethos} className="me-3" /><h5 className="text-ethos mt-1">{missionSection.ethos.section_name}</h5>
                                </div>
                                <div className="ethos-content">
                                    <p className="text-start">{missionSection.ethos.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default OurMission;