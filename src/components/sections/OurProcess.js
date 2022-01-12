import React from 'react'

const OurProcess = ({ ourProcessSection }) => {
    return (
        <div className='container'>
            <div className="our-process">
                <h4 className='text-start text-capitalize'>Our Process</h4>
                <div className='our-process-content mt-5'>
                    <p className='text-start'>{ourProcessSection.description}</p>
                </div>
                <a href="#"><p className='see-process'>See full process &#62;</p></a>
            </div>
        </div>
    )
}
export default OurProcess;