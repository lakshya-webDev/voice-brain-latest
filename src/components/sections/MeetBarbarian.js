import React, { Fragment, useState } from 'react'

const MeetBarbarian = ({ barbarians }) => {
    const [seeAll, setSeeAll] = useState(false);
    console.log("barbarians", barbarians);

     
    return (
        <div className="container">
            <div className="meet-barbarian">
                <h4 className='text-start mobile-text'>Meet The <b>Barbarians</b></h4>
            </div>
            {/* Desktop  */}
            <div className="profile-section-desktop">
            <div className="profile-section d-inline-block justify-content-center">
                <div className="row">
                    {barbarians && barbarians.map((bar, index) => {
                        if (index < 4) {
                            return (
                                <div className="col-md-3 profile-col">
                                    <img  src={`http://localhost:1337${bar.image.data[0].attributes.url}`} alt={`${bar.image_name}`} />
                                </div>
                            )
                        }
                    })}
                </div>
           
                <div className="row">
                    {barbarians && barbarians.map((bar, index) => {
                        if (index > 3) {
                            return (
                                <div className="col-md-3 profile-col">
                                    <img  src={`http://localhost:1337${bar.image.data[0].attributes.url}`} alt={`${bar.image_name}`} />
                                </div>
                            )
                        }
                    })}
                </div>
              
                {/* </div> */}
              </div>
            </div>
{/* Mobile */}
            <div className="profile-section-mobile" id="mobile">
                    <div className="profile-section d-inline-block justify-content-center">
                      
                        <div className="row">
                            {barbarians && barbarians.map((bar, index) => {
                                if (index < 3) {
                                    return (
                                        <div className="col-md-3 profile-col">
                                            <img  src={`http://localhost:1337${bar.image.data[0].attributes.url}`} alt={`${bar.image_name}`} />
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    {seeAll === false &&
                        <p className='se-all barbarian-see' onClick={() => setSeeAll(true)}>See All</p>
                    }
                    <div className="mobile-profile-seeall">
                    <div className="profile-section d-inline-block justify-content-center">
                        <div className="row">
                            {seeAll && barbarians && barbarians.map((bar, index) => {
                                if (index > 2) {
                                    return (
                                        <div className="col profile-col">
                                            <img  src={`http://localhost:1337${bar.image.data[0].attributes.url}`} alt={`${bar.image_name}`} />
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MeetBarbarian;

