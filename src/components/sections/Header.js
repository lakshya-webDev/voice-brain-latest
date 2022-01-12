import React from 'react';


const Header = ({ mainSection }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 header-area">
                    <div className="header-content">
                        <div className="header-tagline">
                            <h5>{mainSection.section_name}</h5>
                        </div>
                        <div className="header-heading">
                            <h4>{mainSection.title}</h4>
                        </div>
                        <div className="header-para">
                            <p>{mainSection.description}</p>
                        </div>
                        <button className="header-btn"></button>
                        <div className='d-flex justify-content-center'>
                        <button className="arrow-btn"></button>
                        </div>
                    </div>
                </div>
                <div className="col-md-5"></div>
            </div>
        </div>
    )
}
export default Header;